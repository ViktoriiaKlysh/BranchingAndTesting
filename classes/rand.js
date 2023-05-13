class Rand {
    x;

    constructor(_x) {
        this.x = _x;
    }

    rand() {
        return 7 * this.x + 3 % 11;
    }
}

module.exports = Rand;