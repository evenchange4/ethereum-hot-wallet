// @flow
import { type Web3, type Handler, type Req, type Res } from './type.flow';

export const extend = (web3: Web3) =>
  web3.extend({
    property: 'admin',
    methods: [
      {
        name: 'nodeInfo',
        call: 'admin_nodeInfo',
        outputFormatter: web3.extend.formatters.formatOutputString,
      },
    ],
  });

export const middleware = (web3: Web3) => (handler: Handler) => (
  req: Req,
  res: Res,
  ...restArgs: any
) => {
  req.context = {
    ...req.context,
    web3,
  };
  return handler(req, res, ...restArgs);
};
