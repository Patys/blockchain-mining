const CryptoJS = require("crypto-js")

class Block {
  constructor(index, previousHash, timestamp, data) {
    this.index = index
    this.previousHash = previousHash
    this.timestamp = timestamp
    this.data = data
    this.hash = this.calculateHash()
  }

  calculateHash() {
    return CryptoJS.SHA256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data)).toString()
  }
}

module.exports = Block
