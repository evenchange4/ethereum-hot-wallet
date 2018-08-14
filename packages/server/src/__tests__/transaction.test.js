// @flow
import micro from 'micro';
import listen from 'test-listen';
import request from 'request-promise';
import MOCK_TRANSACTION from '../__mock-data__/transaction';
import index from '../index';
import { type Handler, type Req, type Res } from '../utils/type.flow';

jest.mock('../utils/web3-helper', () => ({
  extend: () => {},
  middleware: () => (handler: Handler) => (
    req: Req,
    res: Res,
    ...restArgs: any
  ) => {
    req.context = {
      ...req.context,
      web3: {
        extend: () => {},
        eth: {
          getTransaction: () => Promise.resolve(MOCK_TRANSACTION),
          getBlock: () => Promise.resolve({}),
        },
        admin: {
          nodeInfo: () => Promise.resolve({}),
        },
      },
    };
    return handler(req, res, ...restArgs);
  },
}));

it('should return correct json data', async () => {
  const service = micro(index);
  let error;
  try {
    const url = await listen(service);
    const response = await request({
      uri: `${url}/transaction/123`,
    });
    expect(response).toMatchSnapshot();
  } catch (err) {
    error = err;
  }

  expect(error).toBeUndefined();
  service.close();
});
