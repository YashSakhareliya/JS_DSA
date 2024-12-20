import { expect, test, describe } from 'vitest';
import wrongSubtraction from '../solutions/q8.js';

describe('Wrong Subtraction', () => {
    test('Example 1: n=512, k=4 should return 50', () => {
        expect(wrongSubtraction(512, 4)).toBe(50);
    });

    test('Example 2: n=1000000000, k=9 should return 1', () => {
        expect(wrongSubtraction(1000000000, 9)).toBe(1);
    });

    test('Should handle minimum n=2', () => {
        expect(wrongSubtraction(2, 1)).toBe(1);
    });

    test('Should handle n=10 with k=1', () => {
        expect(wrongSubtraction(10, 1)).toBe(1);
    });

    test('Should handle sequence of operations', () => {
        // 512 -> 511 -> 510 -> 51 -> 50
        expect(wrongSubtraction(512, 4)).toBe(50);
    });

    test('Should throw error for n < 2', () => {
        expect(() => wrongSubtraction(1, 1)).toThrow('n must be between 2 and 10^9');
    });

    test('Should throw error for n > 10^9', () => {
        expect(() => wrongSubtraction(2e9, 1)).toThrow('n must be between 2 and 10^9');
    });

    test('Should throw error for k < 1', () => {
        expect(() => wrongSubtraction(512, 0)).toThrow('k must be between 1 and 50');
    });

    test('Should throw error for k > 50', () => {
        expect(() => wrongSubtraction(512, 51)).toThrow('k must be between 1 and 50');
    });

    test('Should throw error for non-integer inputs', () => {
        expect(() => wrongSubtraction(512.5, 4)).toThrow('All inputs must be integers');
    });
});