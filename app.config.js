export default (props) => {
  return Object.assign({}, {
    ...props.config,
  }, {
    extra: {
      ...props.config.extra,
      apiRoot: 'http://localhost:3000', // http://192.168.1.62:3000
    }
  });
}

/*
const props = {
  projectRoot: '',
  staticConfigPath: 'app.json',
  packageJsonPath: 'package.json',
  // from app.json->expo
  config: {
    name: 'My App',
    version: '0.0.0',
    slug: 'myapp',
    scheme: 'myapp',
    platforms: [ 'ios', 'android', 'web' ],
    orientation: 'portrait',
    icon: './assets/images/icon.png',
    splash: {
      image: './assets/images/splash.png',
      resizeMode: 'contain',
      backgroundColor: '#ffffff'
    },
    updates: { fallbackToCacheTimeout: 0 },
    assetBundlePatterns: [ '**\/*' ],
    ios: { supportsTablet: true },
    web: { favicon: './assets/images/favicon.png' },
    extra: {}, // from app.json->expo.extra
    description: 'Description', // from package.json->description
    sdkVersion: '37.0.0',  // from package.json
  }
};
*/
