const isProd = process.env.NODE_ENV === "production";

export default {
  language: null,
  fallbackLng: "en",
  languages_list: [
    { key: "en", value: "en", country_сode: 'en', text: "English" },
    { key: "ru", value: "ru", country_сode: 'ru', text: "Russian/Русский" }
  ],
  whitelist: ["en", "ru"],
  ns: [
    "common"//, "button", "msg"
  ],
  default_ns: "common", // default namespace (needs no prefix on calling t)
  fallback_ns: "common",// fallback, can be a string or an array of namespaces
  //nsSeparator: false,  // ':'
  keySeparator: false, // '.', // we do not use keys in form messages.welcome
  saveMissing: false, // send not withTranslationd keys to endpoint
  debug: isProd ? false : true,
  preload: true,
};
