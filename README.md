#

```
$ brew tap ethereum/ethereum
$ brew install ethereum
$ geth --rpc --rpcaddr localhost --rpcport 8545 --rpcapi "eth,net,web3,admin"
```

http://localhost:4000/node
http://localhost:4000/block/614060
http://localhost:4000/transaction/0xe9e91f1ee4b56c0df2e9f06c2b8c27c6076195a88a7b8537ba8313d80e6f124e

```shell
$ cd packages/server
$ cp .env.example .env # input your own config
$ npm run dev # dev server
> Ready on http://localhost:3000

# Production
$ npm run build
$ npm start
> Ready on http://localhost:3000

# or
$ docker build -t ethereum-hot-wallet/server .
$ docker run --rm -it \
  -p 3000:3000 \
  -e "PORT=3000" \
  -e "DEBUG=server" \
  -e "NODE_RPC_DOMAIN=http://localhost:8545" \
  ethereum-hot-wallet/server
```
