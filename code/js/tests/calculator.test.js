const sut = require('../src/calculator');

test('Adding 1 and 2 should equal 3', () => {
    expect(sut.add(1, 2)).toEqual(3);
});

test('Subtract 5 and 1 should equal 4', () => {
    expect(sut.subtract(5, 1)).toEqual(4);
});
