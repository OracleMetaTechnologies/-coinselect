var BN = require('bn.js')

module.exports = [{
  description: '1:1, no remainder',
  feeRate: new BN(10),
  inputs: [
    new BN(11920)
  ],
  output: new BN(10000),
  expected: {
    inputs: [{
      value: new BN(11920)
    }],
    outputs: [{
      value: new BN(10000)
    }],
    fee: new BN(1920)
  }
},
{
  description: '1:1',
  feeRate: new BN(10),
  inputs: [
    new BN(12000)
  ],
  output: {
    address: 'woop',
    value: new BN(10000)
  },
  expected: {
    fee: new BN(2000),
    inputs: [{
      value: new BN(12000)
    }],
    outputs: [{
      address: 'woop',
      value: new BN(10000)
    }]
  }
},
{
  description: '1:1, w/ change',
  feeRate: new BN(10),
  inputs: [
    new BN(12000)
  ],
  output: new BN(8000),
  expected: {
    inputs: [{
      value: new BN(12000)
    }],
    outputs: [{
      value: new BN(8000)
    },
    {
      value: new BN(1740)
    }
    ],
    fee: new BN(2260)
  }
},
{
  description: '1:4',
  feeRate: new BN(10),
  inputs: [
    new BN(12000)
  ],
  output: new BN(2000),
  expected: {
    inputs: [{
      value: new BN(12000)
    }],
    outputs: [{
      value: new BN(2000)
    },
    {
      value: new BN(2000)
    },
    {
      value: new BN(2000)
    },
    {
      value: new BN(2000)
    }
    ],
    fee: new BN(4000)
  }
},
