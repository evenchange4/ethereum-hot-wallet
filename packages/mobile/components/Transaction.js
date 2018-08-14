/* global fetch */
// @flow
import * as React from 'react';
import { ScrollView } from 'react-native';
import List from 'antd-mobile-rn/lib/list/index.native';
import { API_DOMAIN } from 'dotenv.macro';

type Props = {
  transactionHash: string,
};

type State = {
  transaction: {
    blockHash: string,
    blockNumber: number,
    from: string,
    gas: number,
    gasPrice: string,
    hash: string,
    nonce: number,
    to: string,
    value: string,
  },
};

export default class Transaction extends React.Component<Props, State> {
  state = {
    transaction: {
      blockHash: '',
      blockNumber: 0,
      from: '',
      gas: 0,
      gasPrice: '',
      hash: '',
      nonce: 0,
      to: '',
      value: '',
    },
  };

  componentDidMount() {
    const { transactionHash } = this.props;
    fetch(`${API_DOMAIN}/transaction/${transactionHash}`)
      .then(response => response.json())
      .then(transaction => {
        this.setState({ transaction });
      });
  }

  props: Props;

  render() {
    const { transactionHash } = this.props;
    const { transaction } = this.state;

    return (
      <ScrollView
        automaticallyAdjustContentInsets={false}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <List renderHeader={() => `Transaction ${transactionHash}`}>
          <List.Item extra={transaction.blockHash}>blockHash</List.Item>
          <List.Item extra={transaction.blockNumber}>blockNumber</List.Item>
          <List.Item extra={transaction.from}>from</List.Item>
          <List.Item extra={transaction.gas}>gas</List.Item>
          <List.Item extra={transaction.gasPrice}>gasPrice</List.Item>
          <List.Item extra={transaction.hash}>hash</List.Item>
          <List.Item extra={transaction.nonce}>nonce</List.Item>
          <List.Item extra={transaction.to}>to</List.Item>
          <List.Item extra={transaction.value}>value</List.Item>
        </List>
      </ScrollView>
    );
  }
}
