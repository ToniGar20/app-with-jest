const { average } = require('../src/utils/average');

describe('average tests', () => {
    test('of one value it is the value itself', () => {
        expect(average([1])).toBe(1)
    })

    test('average of numbers returned properly', () => {
        expect(average([1, 2, 3, 4, 5, 6])).toBe(3.5)
    })

    test('average of empty array is zero', () => {
        expect(average([])).toBe(0)
    })
});