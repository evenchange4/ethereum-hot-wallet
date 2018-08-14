// @flow

import { send } from 'micro';
import * as R from 'ramda';
import log from '../utils/log';
import { type Req, type Res } from '../utils/type.flow';

const nodeInfo = async (req: Req, res: Res) => {
  const { web3 } = req.context;
  try {
    const data = await web3.admin.nodeInfo();
    return send(res, 200, R.pick(['enode', 'name'])(data));
  } catch (error) {
    log(`[nodeInfo error] ${error}`);
    return send(res, 500, '500 nodeInfo internal error');
  }
};

export default nodeInfo;
