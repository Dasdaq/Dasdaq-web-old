import Web3 from 'web3';
import { defaultNetwork } from '@/config';

const web3Provider = window.web3 ? window.web3.currentProvider : null;
const web3 = web3Provider
  ? new Web3(web3Provider)
  : new Web3(new Web3.providers.HttpProvider(defaultNetwork.rpc));

export default web3;
