// @flow

import { send } from 'micro';
import * as R from 'ramda';
import log from '../utils/log';
import { type Req, type Res } from '../utils/type.flow';

const transaction = async (req: Req, res: Res) => {
  const { web3 } = req.context;
  const { transactionHash } = req.params;
  try {
    const data = await web3.eth.getTransaction(transactionHash);
    return send(
      res,
      200,
      R.pick([
        'blockHash',
        'blockNumber',
        'from',
        'gas',
        'gasPrice',
        'hash',
        'nonce',
        'to',
        'value',
      ])(data),
    );
  } catch (error) {
    log(`[transaction error] ${error}`);
    return send(res, 500, '500 transaction internal error');
  }
};

export default transaction;
