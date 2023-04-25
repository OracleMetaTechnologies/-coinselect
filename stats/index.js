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
