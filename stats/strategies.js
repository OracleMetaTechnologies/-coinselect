let accumulative = require('../accumulative')
let blackjack = require('../blackjack')
let shuffle = require('fisher-yates')
let shuffleInplace = require('fisher-yates/inplace')
let coinSelect = require('../')
let utils = require('../utils')

function blackmax (utxos, outputs, feeRate) {
  // order by ascending value
  utxos = utxos.concat().sort((a, b) => a.value - b.value)

  // attempt to use the blackjack strategy first (no change output)
  let base = blackjack(utxos, outputs, feeRate)
  if (base.inputs) return base

  // else, try the accumulative strategy
  return accumulative(utxos, outputs, feeRate)
}

function blackmin (utxos, outputs, feeRate) {
  // order by descending value
  utxos = utxos.concat().sort((a, b) => b.value - a.value)

  // attempt to use the blackjack strategy first (no change output)
  let base = blackjack(utxos, outputs, feeRate)
  if (base.inputs) return base

  // else, try the accumulative strategy
  return accumulative(utxos, outputs, feeRate)
}

function blackrand (utxos, outputs, feeRate) {
  utxos = shuffle(utxos)

  // attempt to use the blackjack strategy first (no change output)
  let base = blackjack(utxos, outputs, feeRate)
  if (base.inputs) return base

  // else, try the accumulative strategy
  return accumulative(utxos, outputs, feeRate)
}

function maximal (utxos, outputs, feeRate) {
  utxos = utxos.concat().sort((a, b) => a.value - b.value)

  return accumulative(utxos, outputs, feeRate)
}

function minimal (utxos, outputs, feeRate) {
  utxos = utxos.concat().sort((a, b) => b.value - a.value)
