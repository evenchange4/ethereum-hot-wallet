// @flow
import * as React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Transaction from '../Transaction';

it('should render Transaction', async () => {
  const wrapper = shallow(<Transaction transactionHash="hash" />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
