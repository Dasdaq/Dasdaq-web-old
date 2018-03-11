/* eslint-disable import/prefer-default-export */

export const i18n = [{
  langDisplay: '中文',
  locale: 'zh',
}, {
  default: true,
  langDisplay: 'English',
  locale: 'en',
}];

export const disqus = {
  shortname: 'dapdap',
};

export const apiHost = 'http://10.30.4.57:5000';
export const submitDappLink = 'https://baidu.com';

export const network = {
  1: {
    default: true, // It will be used when no metaMask
    name: 'Main Ethereum Network',
    rpc: 'https://mainnet.infura.io/',
  },
  2: {
    name: 'Morden Test Network',
  },
  3: {
    name: 'Ropsten Test Network',
    rpc: 'https://ropsten.infura.io/',
  },
  4: {
    name: 'Rinkeby Test Network',
    rpc: 'https://rinkeby.infura.io/',
  },
  42: {
    name: 'Kovan Test Network',
    rpc: 'https://kovan.infura.io/',
  },
};

export const defaultNetwork = Object.values(network).find(net => net.default);

