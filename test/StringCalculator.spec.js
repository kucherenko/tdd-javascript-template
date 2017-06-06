require('./bootstrap');

var StringCalculator = require('../src/StringCalculator');

describe('String Calculator', () => {
    let sut;

    beforeEach(() => {
        sut = StringCalculator;
    });

    it('should pass test', () => {
        let a = true;
        a.should.be.true;
    });

});
