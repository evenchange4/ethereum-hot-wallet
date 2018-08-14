// @flow
import * as React from 'react';
import { Scene, Router, Stack } from 'react-native-router-flux';
import Home from './components/Home';
import Transaction from './components/Transaction';

const App = () => (
  <Router>
    <Stack key="root">
      <Scene key="Home" component={Home} title="Home" />
      <Scene key="Transaction" component={Transaction} title="Transaction" />
    </Stack>
  </Router>
);

export default App;
