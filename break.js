var utils = require('./utils')
var ext = require('./bn-extensions')

// break utxos into the maximum number of 'output' possible
module.exports = function broken (utxos, output, feeRate) {
  if (!utils.uintOrNull(feeRate)) return {}

  var bytesAccum = utils.transactionBytes(utxos, [])
  var value = utils.uintOrNull(output.value)
  var inAccum = utils.sumOrNaN(utxos)

  if (!value || !inAccum) return { fee: ext.mul(feeRate, bytesAccum) }

  var outputBytes = utils.outputBytes(output)
  var outAccum = ext.BN_ZERO
  var outputs = []
