import Cookie from 'js-cookie';
import axios from 'axios';

export const getLocale = () => (
  Cookie.get('locale') ||
  (
    navigator.language ||
    navigator.browserLanguage ||
    navigator.userLanguage
  ).toLowerCase()
);

export const setLocale = (locale) => {
  Cookie.set('locale', locale, { expires: 365 });
};

export const getIP = async () => {
  const response = await axios.get('http://ip-api.com/json');
  return response.data;
};
