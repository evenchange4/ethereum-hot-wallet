// @flow

// Web3
export type Web3 = {
  extend: ({
    property: string,
    methods: Array<{
      name: string,
      call: string,
      outputFormatter: any,
    }>,
  }) => any,
  eth: {
    getTransaction: string => Promise<Object>,
    getBlock: number => Promise<Object>,
  },
  admin: {
    nodeInfo: () => Promise<Object>,
  },
};

// router
export type Res = any;
export type Req = {
  context: {
    web3: Web3,
  },
  params: {
    blockNumber: number,
    transactionHash: string,
  },
};
export type Handler = (Res, Req) => any;
