const crypto = require('crypto')

// exemplo de teste unit
module.exports = function generateUniqueId() {
  return crypto.randomBytes(4).toString('HEX')
}

