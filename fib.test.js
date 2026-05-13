const { FibArray, resetArray } = require('./fib');

describe('FibArray Function', () => {
    
    // Clear the array state before each individual test runs
    beforeEach(() => {
        resetArray();
    });

    test('should generate correct sequence for length 5', () => {
        const result = FibArray(5);
        expect(result).toEqual([0, 1, 1, 2, 3]);
    });

    test('should generate correct sequence for length 10', () => {
        const result = FibArray(10);
        expect(result).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
    });

    test('should handle a length shorter than the starting array base length', () => {
        const result = FibArray(2);
        expect(result).toEqual([0, 1]);
    });
});