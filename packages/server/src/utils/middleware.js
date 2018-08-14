// @flow
import * as R from 'ramda';
import compress from 'micro-compress';
import rateLimit from 'micro-ratelimit';
import { middleware as web3Middleware } from './web3-helper';
import { type Web3 } from './type.flow';

const middleware = (web3: Web3) =>
  R.compose(
    compress,
    // TODO: jest problem --forceExit
    R.curry(rateLimit)({ window: 1000, limit: 1 }),
    web3Middleware(web3),
  );

export default middleware;
