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
    module: {
      loaders: []
    },
    plugins: [],
  };

  const baseAssetUrl = url.format(Object.assign(url.parse(opts.assetsUrl), {pathname: ''}));
  config.entry.push('webpack-dev-server/client?' + baseAssetUrl);
  config.entry.push('webpack/hot/only-dev-server');
  config.entry.push('./src/client');

  config.module.loaders.push({
    test: /\.js$/,
    loaders: ['react-hot', 'babel'],
    include: path.join(__dirname, '..', 'src'),
  });

  config.plugins.push(new webpack.HotModuleReplacementPlugin());

  return config;
}
