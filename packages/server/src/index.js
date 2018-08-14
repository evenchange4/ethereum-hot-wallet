// @flow

import './utils/dotenv';
import { router, get } from 'microrouter';
import Web3 from 'web3';
import nodeInfo from './routes/nodeInfo';
import block from './routes/block';
import transaction from './routes/transaction';
import { extend } from './utils/web3-helper';
import middleware from './utils/middleware';
import log from './utils/log';

const { NODE_RPC_DOMAIN }: any = process.env;

log(`Connect to Node RPC: ${NODE_RPC_DOMAIN}`);

const web3 = extend(new Web3(new Web3.providers.HttpProvider(NODE_RPC_DOMAIN)));

export default router(
  get('/node', middleware(web3)(nodeInfo)),
  get('/block/:blockNumber', middleware(web3)(block)),
  get('/transaction/:transactionHash', middleware(web3)(transaction)),
);
