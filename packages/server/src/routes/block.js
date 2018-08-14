// @flow

import { send } from 'micro';
import * as R from 'ramda';
import log from '../utils/log';
import { type Req, type Res } from '../utils/type.flow';

const block = async (req: Req, res: Res) => {
  const { web3 } = req.context;
  const { blockNumber } = req.params;
  try {
    const data = await web3.eth.getBlock(blockNumber);
    return send(
      res,
      200,
      R.pick([
        'difficulty',
        'gasLimit',
        'gasUsed',
        'hash',
        'miner',
        'parentHash',
        'totalDifficulty',
        'transactions',
      ])(data),
    );
  } catch (error) {
    log(`[block error] ${error}`);
    return send(res, 500, '500 block internal error');
  }
};

export default block;
