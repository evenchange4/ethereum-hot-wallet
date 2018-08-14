// @flow

import { send } from 'micro';
import { type Req, type Res } from '../utils/type.flow';

const health = async (req: Req, res: Res) => {
  send(res, 200, '200 OK');
};

export default health;
