import i18n from "i18n-js";

i18n.translations = {
  en: require("./languages/english.json")
  // id: require('./languages/id.json')
};

i18n.defaultLocale = "end";
i18n.fallbacks = true;
