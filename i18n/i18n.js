
import { Platform } from 'react-native';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import LanguageDetector from 'i18next-browser-languagedetector';
import ReduxDetector, { languageChange } from 'i18next-redux-languagedetector';

import Backend from 'i18next-chained-backend';
import LocalStorageBackend from 'i18next-localstorage-backend';
import XHR from 'i18next-xhr-backend';
import * as Localization from 'expo-localization';

import i18nextConfig from './i18next-config';
import detectionConfig from './detection/config';
import i18nLogger from './logger';

import locales from '../locales';
//import { checkLocalStorage, checkCookies } from '../lib/device-info';

const LngDetector = new LanguageDetector();
//LngDetector.addDetector(ReduxDetector);
// creating a language detection plugin using expo
// http://i18next.com/docs/ownplugin/#languagedetector

const RNLngDetector = {
  type: 'languageDetector',
  async: true, // flags below detection to be async
  detect: callback => {
    return /*'en'; */ Localization.getLocalizationAsync().then(({ locale }) => {
      callback(locale);
    });
  },
  init: () => { },
  cacheUserLanguage: () => { },
};

const Detector = Platform.select({
  web: () => LngDetector,
  default: () => RNLngDetector,
})();
const caches = ['redux'];
//if (checkLocalStorage()) caches.push('localStorage');
//if (checkCookies()) caches.push('cookie');
detectionConfig.caches = caches;


const basename = process.env.PUBLIC_URL || '';
const backendConfig = {
  // array of existing i18next backends from https://www.i18next.com/plugins-and-utils.html#backends
  backends: [
    LocalStorageBackend, // primary
    XHR                  // fallback
  ],
  // array of options in order of backends above
  backendOptions: [
    {
      prefix: 'locales-', // prefix for stored languages
      expirationTime: 10 * 60 * 1000,  // expiration // 7*24*60*60*1000
      //versions: { ru: 'v0.0.0', en: 'v0.0.0' } // language versions
    }, {
      loadPath: `${basename}/static/locales/{{lng}}/{{ns}}.json`, // xhr load path for my own fallback
      addPath: `${basename}/static/locales/add/{{lng}}/{{ns}}`,
      //loadPath: `${basename}/static/locales/resources.json?lng={{lng}}&ns={{ns}}`,// to adapt to multiLoading
      //allowMultiLoading: true,
    }
  ]
};


export default (store) => {
  const lookupRedux = () => {
    console.log('lookupRedux')
    let state = store.getState().get(['i18next']).toJS();//internationalization
    return state;
  };
  const cacheUserLanguageRedux = (language) => store.dispatch(languageChange(language));
  detectionConfig.lookupRedux = lookupRedux;
  detectionConfig.cacheUserLanguageRedux = cacheUserLanguageRedux;

  i18n
    .use(i18nLogger)
    //.use(LngDetector)
    .use(Detector)
    //.use(RNLngDetector)
    .use(initReactI18next)
    .init({
      resources: locales,

      whitelist: i18nextConfig.whitelist,
      fallbackLng: i18nextConfig.fallback_lng, // if detected lng is not available
      // have a common namespace used around the full app
      ns: i18nextConfig.ns,
      defaultNS: i18nextConfig.default_ns,
      debug: i18nextConfig.debug,

      backend: backendConfig,
      detection: detectionConfig,

      saveMissing: i18nextConfig.saveMissing, // send not withTranslationd keys to endpoint
      keySeparator: i18nextConfig.keySeparator, // we do not use keys in form messages.welcome

      preload: i18nextConfig.preload,

      interpolation: {
        escapeValue: false // react already safes from xss
      },
      // react-i18next options
      react: {
        wait: false,
        //defaultTransParent: 'div', // needed for preact
        useSuspense: true,
        bindI18n: 'languageChanged loaded',
        bindStore: 'added removed',
        nsMode: 'default',
      }
    });

  return i18n;
};
