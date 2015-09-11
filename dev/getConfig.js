import defaults from 'defaults';

export default function getConfig(opts){
  var config = defaults(opts, {
    production: false,
    assetsUrl: 'http://localhost:8081/public',
    mainUrl: 'http://localhost:8080',
    hot: false,
  });

  return config;
}