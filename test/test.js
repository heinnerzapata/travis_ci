'use strict';

var assert = require('assert');
var hzFunctions =  require('./../index.js');

describe('f_01()', () => {
  it('Should return same object as input', () => {
    var hzFunctions =  require('./../index.js');
    const result = hzFunctions.f_01({test: 1});
    assert.deepEqual(result, {test: 1});
  });
});
