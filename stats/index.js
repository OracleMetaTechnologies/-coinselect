let Simulation = require('./simulation')
let modules = require('./strategies')
let min = 14226 // 0.1 USD
let max = 142251558 // 1000 USD
let feeRate = 56 * 100
let results = []

// switch between two modes
// true - failed payments are discarded
// false - failed payments are queued until there is enough balance
let discardFailed = false
let walletType = 'p2pkh' // set to either p2pkh or p2sh

// data from blockchaing from ~august 2015 - august 2017
// see https://gist.github.com/runn1ng/8e2881e5bb44e01748e46b3d1c549038
// these are 2-of-3 lengths, most common p2sh (66%), percs changed so they add to 100
let scripthashScriptLengthData = {
  prob: 0.16,
  inLengthPercs: {
    252: 25.29,
    253: 49.77,
    254: 24.94
  },
  outLength: 23
}