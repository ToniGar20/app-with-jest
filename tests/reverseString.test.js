const { reverseString } = require('../src/utils/reverseString');

test('string reverse of *tonigarcia*', () => {
    const result = reverseString('tonigarcia');
    expect(result).toBe('aicraginot');
});

test('string reverse of nothing is undefined', () => {
    const result = reverseString();
    expect(result).toBe(undefined);
});