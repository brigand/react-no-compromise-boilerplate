import webpack from 'webpack';
import defaults from 'defaults';
import url from 'url';
import path from 'path';

export default function makeWebpackConfig(opts){
  const FLAGS = {
    __DEV__: !opts.production,
    __PROD__: !!opts.production,
  };

  var config = {
    devtool: 'eval',
    entry: [],
    output: {
      path: path.join(__dirname, '..', 'dist'),
      publicPath: opts.assetsUrl,
      filename: 'bundle.js',
    },
    externals: [],
    module: {
      loaders: []
    },
    plugins: [],
  };

  if (opts.node) {
    config.target = 'node';
    const node_modules = require('fs').readdirSync('node_modules').filter((x) => x !== '.bin');
    config.externals.push(...node_modules);
    config.output.libraryTarget = 'commonjs2';
    config.devtool = 'source-map';
  }

  const baseAssetUrl = url.format(Object.assign(url.parse(opts.assetsUrl), {pathname: ''}));
  if (opts.watch) {
    config.entry.push('webpack-dev-server/client?' + baseAssetUrl);
  }
  if (opts.hot) {
    config.entry.push('webpack/hot/only-dev-server');
    config.plugins.push(new webpack.HotModuleReplacementPlugin());
  }
  config.entry.push(...opts.entry);

  const dirs = {
    src: [
      path.join(__dirname, '..', 'src'),
      path.join(__dirname, '..', 'dev', 'dev-pages'),
    ],
  };
  const jsLoaderConfig = {
    test: /\.js$/,
    loaders: ['babel'],
    include: dirs.src,
  };

  if (opts.hot) {
    jsLoaderConfig.loaders.unshift('react-hot');
  }

  if (opts.production) {
    config.devtool = 'source-map';
    config.plugins.push(new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }));
  }

  config.module.loaders.push(jsLoaderConfig);

  config.module.loaders.push({
    test: /\.less$/,
    loaders: opts.test
      ? ['null-loader']
      : ['style-loader', 'css-loader', 'less-loader'],
    include: dirs.src,
  });

  return config;
}
