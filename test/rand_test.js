const Rand = require('../classes/rand.js');
const assert = require('chai').assert;

describe("rand test", function () {
    let generator = new Rand(5)
    it("Test", function () {
        console.log(Rand.rand)
        let output = generator.rand()
        assert.equal(output, 38);
    })
})

// describe("rand second test", function () {
//     const num = 7;
//     let output = class_rand.rand(num)
//     assert.equal(output, 52);
// })

// describe("rand third test", function () {
//     const num = 0.5;
//     let output = class_rand.rand(num)
//     assert.equal(output, 6.5);
// })