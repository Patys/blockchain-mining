const Blockchain = require('./blockchain/src/blockchain')

const patyscoin = new Blockchain

patyscoin.addBlock({ ownerID: 1, amount: 100 })
patyscoin.addBlock({ ownerID: 2, amount: 132 })
patyscoin.addBlock({ ownerID: 1, amount: -5 })

console.log(patyscoin.blockchain)
console.log(patyscoin.isChainValid())

patyscoin.blockchain[1].data = { ownerID: 666, amount: 999999 }

console.log(patyscoin.blockchain)
console.log(patyscoin.isChainValid())
