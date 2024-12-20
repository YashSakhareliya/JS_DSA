import { expect, test, describe } from 'vitest';
import candiesDistribution from '../solutions/q5.js';

describe('Candies and Two Sisters', () => {
    test('Example case n=7 should return 3', () => {
        expect(candiesDistribution(7)).toBe(3);
    });

    test('Example case n=1 should return 0', () => {
        expect(candiesDistribution(1)).toBe(0);
    });

    test('Example case n=2 should return 0', () => {
        expect(candiesDistribution(2)).toBe(0);
    });

    test('Example case n=3 should return 1', () => {
        expect(candiesDistribution(3)).toBe(1);
    });

    test('Example case n=2000000000 should return 999999999', () => {
        expect(candiesDistribution(2000000000)).toBe(999999999);
    });

    test('Example case n=763243547 should return 381621773', () => {
        expect(candiesDistribution(763243547)).toBe(381621773);
    });

    test('Should handle n=4', () => {
        expect(candiesDistribution(4)).toBe(1);
    });

    test('Should handle n=5', () => {
        expect(candiesDistribution(5)).toBe(2);
    });

    test('Should throw error for non-integer input', () => {
        expect(() => candiesDistribution(3.5)).toThrow('Input must be an integer');
    });

    test('Should throw error for negative numbers', () => {
        expect(() => candiesDistribution(-1)).toThrow('n must be between 1 and 2*10^9');
    });

    test('Should throw error for numbers > 2*10^9', () => {
        expect(() => candiesDistribution(2e9 + 1)).toThrow('n must be between 1 and 2*10^9');
    });
});