const Rand = require('../classes/rand.js');
const assert = require('chai').assert;

describe("rand test", function () {
    let generator1 = new Rand(5);
    let generator2 = new Rand(7);
    let generator3 = new Rand(0.5);

    it("First test", function () {
        console.log(Rand.rand)
        let output = generator1.rand()
        assert.equal(output, 38);
    });

    it("Second test", function () {
        console.log(Rand.rand)
        let output = generator2.rand()
        assert.equal(output, 52);
    });

    it("Third test", function () {
        console.log(Rand.rand)
        let output = generator3.rand()
        assert.equal(output, 6.5);
    });
})