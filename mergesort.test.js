const { mergesort } = require('./mergesort');

describe('mergesort Function', () => {

    test('should sort an array in ascending order', () => {
        const result = mergesort([3, 1, 2]);
        expect(result).toEqual([1, 2, 3]);
    });

    test('should handle an already sorted array', () => {
        const result = mergesort([1, 2, 3, 4, 5]);
        expect(result).toEqual([1, 2, 3, 4, 5]);
    });

    test('should handle a single element array', () => {
        const result = mergesort([1]);
        expect(result).toEqual([1]);
    });

    test('should handle an array with duplicate values', () => {
        const result = mergesort([3, 1, 2, 1, 3]);
        expect(result).toEqual([1, 1, 2, 3, 3]);
    });

    test('should handle an array sorted in reverse order', () => {
        const result = mergesort([5, 4, 3, 2, 1]);
        expect(result).toEqual([1, 2, 3, 4, 5]);
    });

    test('should handle an array with negative numbers', () => {
        const result = mergesort([-3, -1, -2]);
        expect(result).toEqual([-3, -2, -1]);
    });

    test('should handle an empty array', () => {
        const result = mergesort([]);
        expect(result).toEqual([]);
    });

});