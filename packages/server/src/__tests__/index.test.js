// @flow
import micro from 'micro';
import listen from 'test-listen';
import request from 'request-promise';
import index from '../index';

it('should run server without error', async () => {
  const service = micro(index);
  let error;
  try {
    const url = await listen(service);
    await request(url);
  } catch (err) {
    error = err;
  }

  expect(error).toBeUndefined();
  service.close();
});
