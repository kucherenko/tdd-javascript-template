require('./bootstrap');

var StringCalculator = require('../src/StringCalculator');

describe('String Calculator', function () {
    var sut;

    beforeEach(function () {
        sut = StringCalculator;
    });


    it('should be object', function () {
        sut.should.be.a('Object');
    });

});