//detectionConfig

export default {
  // order and from where user language should be detected
  // order: ['querystring', 'cookie', 'localStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
  order: [
    'querystring', 'path', 'redux',
  ],

  // keys or params to lookup language from
  lookupQuerystring: 'lng',
  lookupCookie: 'lng',
  lookupLocalStorage: 'lng',
  lookupFromPathIndex: 0,
  // lookupFromSubdomainIndex: 0,

  lookupRedux: () => null,
  cacheUserLanguageRedux: () => null,

  // cache user language on
  // caches: [ 'localStorage', 'cookie' ],
  caches: [],
  excludeCacheFor: ['cimode'], // languages to not persist (cookie, localStorage)

  // optional expire and domain for set cookie
  cookieMinutes: 365 * 24 * 60,
  // cookieDomain: 'myDomain',

  // optional htmlTag with lang attribute, the default is:
  // htmlTag: document.documentElement
};
