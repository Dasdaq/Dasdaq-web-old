import Promise from 'bluebird';
import Cookie from 'js-cookie';
import axios from 'axios';
import web3 from '@/web3';
import { apiHost } from '@/config';

export const getLocale = () => {
  const locale = Cookie.get('locale') || (navigator.language || navigator.browserLanguage || navigator.userLanguage).toLowerCase();
  return locale.split('-')[0];
};

export const setLocale = (locale) => {
  Cookie.set('locale', locale, { expires: 365 });
};

export const getIP = async () => {
  const response = await axios.get('http://ip-api.com/json');
  return response.data;
};

export const getMe = async () => {
  if (!window.web3) {
    throw Error('NO_METAMASK');
  }
  const me = {};
  me.address = (await Promise.promisify(web3.eth.getAccounts)())[0];

  if (me.address) {
    me.balance = await Promise.promisify(web3.eth.getBalance)(me.address);
    return me;
  }
  throw Error('METAMASK_LOCKED');
};

export const getPlayers = async (itemId) => {
  const response = await axios.get(`${apiHost}/api/dapps/${itemId}/top`);
  const data = response.data.data.data;
  // format
  return {
    winList: data.win,
    lossList: data.loss,
  };
};

export const getContracts = async (itemId) => {
  const response = await axios.get(`${apiHost}/api/dapps/${itemId}/contract`);
  return response.data.data;
};
