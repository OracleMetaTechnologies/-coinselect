var BN = require('bn.js')

module.exports = [{
  description: '1 output, no change',
  feeRate: new BN(10),
  inputs: [
    new BN(102001)
  ],
  outputs: [
    new BN(100000)
  ],
  expected: {
    inputs: [{
      i: 0,
      value: new BN(102001)
    }],
    outputs: [{
      value: new BN(100000)
    }],
    fee: new BN(2001)
  }
},
{
  description: '1 output, change expected',
  feeRate: new BN(5),
  inputs: [
    new BN(106001)
  ],
  outputs: [
    new BN(100000)
  ],
  expected: {
    inputs: [{
      i: 0,
      value: new BN(106001)
    }],
    outputs: [{
      value: new BN(100000)
    },
    {
      value: new BN(4871)
    }
    ],
    fee: new BN(1130)
  }
},
{
  description: '1 output, change expected, value > 2^32',
  feeRate: new BN(5),
  inputs: [
    new BN(5000000000)
  ],
  outputs: [
    new BN(1)
  ],
  expected: {
    inputs: [{
      i: 0,
      value: new BN(5000000000)
    }],
    outputs: [{
      value: new BN(1)
    },
    {
      value: new BN(4999998869)
    }
    ],
    fee: new BN(1130)
  }
},
{
  description: '1 output, sub-optimal inputs (if re-ordered), direct possible',
  feeRate: new BN(10),
  inputs: [
    new BN(10000),
    new BN(40000),
    new BN(40000)
  ],
  outputs: [
    new BN(7700)
  ],
  expected: {
    inputs: [{
      i: 0,
      value: new BN(10000)
    }],
    outputs: [{
      value: new BN(7700)
    }],
    fee: new BN(2300)
  }
},
{
  description: '1 output, sub-optimal inputs (if re-ordered), direct possible, but slightly higher fee',
  feeRate: new BN(10),
  inputs: [
    new BN(10000),
    new BN(40000),
    new BN(40000)
  ],
