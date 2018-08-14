// @flow
import * as React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Home from '../Home';

it('should render Home', async () => {
  const wrapper = shallow(<Home />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
