/* global fetch */
// @flow
import * as React from 'react';
import { ScrollView } from 'react-native';
import List from 'antd-mobile-rn/lib/list/index.native';
import { Actions } from 'react-native-router-flux';
import { API_DOMAIN } from 'dotenv.macro';

type State = {
  nodeInfo: {
    enode: string,
    name: string,
  },
  block: {
    hash: string,
    transactions: Array<string>,
  },
};

export default class Home extends React.Component<{}, State> {
  state = {
    nodeInfo: {
      enode: '',
      name: '',
    },
    block: {
      hash: '',
      transactions: [],
    },
  };

  componentDidMount() {
    fetch(`${API_DOMAIN}/node`)
      .then(response => response.json())
      .then(nodeInfo => {
        this.setState({ nodeInfo });
      });

    fetch(`${API_DOMAIN}/block/614060`)
      .then(response => response.json())
      .then(block => {
        this.setState({ block });
      });
  }

  onTransactionClick = (transactionHash: string) => () => {
    Actions.Transaction({ transactionHash });
  };

  render() {
    const { nodeInfo, block } = this.state;
    const { onTransactionClick } = this;

    return (
      <ScrollView
        automaticallyAdjustContentInsets={false}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <List renderHeader={() => 'NodeInfo'}>
          <List.Item extra={nodeInfo.enode}>enode</List.Item>
          <List.Item extra={nodeInfo.name}>name</List.Item>
        </List>

        <List renderHeader={() => 'Block 614060'}>
          <List.Item extra={block.hash}>hash</List.Item>
        </List>

        <List renderHeader={() => 'Transactions'}>
          {block.transactions.map(transaction => (
            <List.Item
              key={transaction}
              arrow="horizontal"
              onClick={onTransactionClick(transaction)}
            >
              {transaction}
            </List.Item>
          ))}
        </List>
      </ScrollView>
    );
  }
}
