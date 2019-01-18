'use strict';

var assert = require('assert');
var hzFunctions =  require('./../index.js');

describe('f_01()', () => {
  it('Should return same object as input', () => {
    const result = hzFunctions.f_01({test: 1});
    assert.deepEqual(result, {test: 1});
  });
});

describe('f_02()', () => {
  it('Should return double for valñue', () => {
    const result = hzFunctions.f_02(2);
    assert.deepEqual(result, 4);
  });
});

