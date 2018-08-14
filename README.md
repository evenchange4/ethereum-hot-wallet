#

```
$ brew tap ethereum/ethereum
$ brew install ethereum
$ geth --rpc --rpcaddr localhost --rpcport 8545 --rpcapi "eth,net,web3,admin"
```

http://localhost:3000/node
http://localhost:3000/block/614060
http://localhost:3000/transaction/0x4b6776c238213a86fa01852f6faeec4f38a4ca5248b488166abc1efef407da06
http://localhost:3000/transaction/0xd6a80a88b9564aa7580b90ca2e5fec8da9d113f54370f86f72fcf0e40f05d131

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
