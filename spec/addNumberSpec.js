var app = require('../addNumber.js');

describe('Addition', function () {
    it('should add 2 numbers correctly', function () {
        var addValue = app.AddNumber(3, 4);
        expect(addValue).toBe(7);
    });
});