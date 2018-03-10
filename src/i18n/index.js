import Vue from 'vue';
import VueI18n from 'vue-i18n';
import { i18n } from '@/config';

Vue.use(VueI18n);

let defaultLocale = i18n[0].locale;
const messages = {};

i18n.forEach((item) => {
  // eslint-disable-next-line
  messages[item.locale] = require(`./locales/${item.locale}.json`);
  if (item.default) {
    defaultLocale = item.locale;
  }
});

export default new VueI18n({
  locale: defaultLocale,
  fallbackLocale: defaultLocale,
  messages,
});
