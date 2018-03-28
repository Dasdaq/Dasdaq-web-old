import Promise from 'bluebird';
import Cookie from 'js-cookie';
import _ from 'lodash';
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
  const response = await axios.get(`${apiHost}/dapps/${itemId}/top`);
  const data = response.data.data;
  // format
  ['win', 'loss'].forEach((key) => {
    data[key].forEach((v) => {
      // eslint-disable-next-line no-param-reassign
      v.value = _.round(web3.fromWei(v.value, 'ether'), 2);
    });
  });
  return {
    winList: data.win,
    lossList: data.loss,
  };
};

export const getContracts = async (itemId) => {
  const response = await axios.get(`${apiHost}/dapps/${itemId}/contract`);
  return response.data.data;
};

export const getItem = async (itemId) => {
  const response = await axios.get(`${apiHost}/dapps/${itemId}`);
  // format
  const d = response.data.data;
  ['h1', 'd1', 'd7'].forEach((k1) => {
    d[k1].forEach((v) => {
      ['totalGasCost', 'totalVolume'].forEach((k2) => {
        // eslint-disable-next-line no-param-reassign
        v[k2] = _.round(web3.fromWei(v[k2], 'ether'), 2);
      });
    });
  });

  ['totalVolume', 'totalGasCost'].forEach((key) => {
    // eslint-disable-next-line no-param-reassign
    d[key] = _.round(web3.fromWei(d[key], 'ether'), 2);
  });

  ['balance', 'volumeLastWeek', 'volumeLastDay'].forEach((key) => {
    // eslint-disable-next-line no-param-reassign
    d[key] = _.round(d[key], 2);
  });

  return d;
};

export const getUser = async (address) => {
  const response = await axios.get(`${apiHost}/user/${address.toLowerCase()}`);
  const d = response.data;
  return {
    address,
    balance: d.balance,
    income: _.round(web3.fromWei(d.total, 'ether'), 5),
    playedDApps: d.data.map(v => ({
      id: v.id,
      income: _.round(web3.fromWei(v.value, 'ether'), 5),
      name: v.name,
    })),
  };
};

export const getAppsRanking = async () => {
  const response = await axios.get(`${apiHost}/dapps`);
  const d = response.data.data;

  d.forEach((v) => {
    // eslint-disable-next-line no-param-reassign
    v.createdAt = (new Date(v.createdAt)).getTime();
    ['totalVolume', 'totalGasCost'].forEach((key) => {
      // eslint-disable-next-line no-param-reassign
      v[key] = _.round(web3.fromWei(v[key], 'ether'), 2);
    });

    ['balance', 'volumeLastWeek', 'volumeLastDay'].forEach((key) => {
      // eslint-disable-next-line no-param-reassign
      v[key] = _.round(v[key], 2);
    });
  });
  return d;
};
