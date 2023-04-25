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
outputs: [
    new BN(6800)
  ],
  expected: {
    inputs: [{
      i: 0,
      value: new BN(10000)
    }],
    outputs: [{
      value: new BN(6800)
    }],
    fee: new BN(3200)
  }
},
{
  description: '1 output, sub-optimal inputs (if re-ordered, no direct possible), change expected',
  feeRate: new BN(5),
  inputs: [
    new BN(10000),
    new BN(40000),
    new BN(40000)
  ],
  outputs: [
    new BN(4700)
  ],
  expected: {
    inputs: [{
      i: 0,
      value: new BN(10000)
    }],
    outputs: [{
      value: new BN(4700)
    },
    {
      value: new BN(4170)
    }
    ],
    fee: new BN(1130)
  }
},
{
  description: '1 output, fails, skips (and finishes on) detrimental input',
  feeRate: new BN(55),
  inputs: [{
    value: new BN(44000)
  },
  {
    value: new BN(800)
  }
  ],
  outputs: [
    new BN(38000)
  ],
  expected: {
    fee: new BN(18700)
  }
},
{
  description: '1 output, optimal inputs, no change',
  feeRate: new BN(10),
  inputs: [
    new BN(10000)
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
  description: '1 output, no fee, change expected',
  feeRate: new BN(0),
  inputs: [
    new BN(5000),
    new BN(5000),
    new BN(5000),
    new BN(5000),
    new BN(5000),
    new BN(5000)
  ],
  outputs: [
    new BN(28000)
  ],
  expected: {
    inputs: [{
      i: 0,
      value: new BN(5000)
    },
    {
      i: 1,
      value: new BN(5000)
    },
