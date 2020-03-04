const { web3 } = require("./node-app");
let rpcUrl = '';     //rpc proxy
web3.setProvider(new web3.providers.HttpProvider(rpcUrl));
