const rand_test = require('../classes/rand.js');
const expect = require('chai').assert;

let class_rand = new Rand();

describe("rand test", function () {
    const num = 5;
    let output = class_rand.rand(num)
    assert(output, 38);
})

describe("rand second test", function () {
    const num = 7;
    let output = class_rand.rand(num)
    assert(output, 52);
})

describe("rand third test", function () {
    const num = 0.5;
    let output = class_rand.rand(num)
    assert(output, 6.5);
})