import { expect, test, describe } from 'vitest';
import soldierBananas from '../solutions/q4.js';

describe('Soldier and Bananas', () => {
    test('Example: k=3, n=17, w=4 should return 13', () => {
        expect(soldierBananas(3, 17, 4)).toBe(13);
    });

    test('Should return 0 when soldier has enough money', () => {
        expect(soldierBananas(1, 10, 3)).toBe(0);
    });

    test('Should handle minimum inputs k=1, n=0, w=1', () => {
        expect(soldierBananas(1, 0, 1)).toBe(1);
    });

    test('Should handle exact money case', () => {
        expect(soldierBananas(2, 10, 2)).toBe(0);
    });

    test('Should handle large numbers within limits', () => {
        expect(soldierBananas(1000, 1000000000, 1000)).toBe(499500000);
    });

    test('Should throw error for non-integer inputs', () => {
        expect(() => soldierBananas(3.5, 17, 4)).toThrow('All inputs must be integers');
    });

    test('Should throw error for k > 1000', () => {
        expect(() => soldierBananas(1001, 17, 4)).toThrow('k and w must be between 1 and 1000');
    });

    test('Should throw error for w > 1000', () => {
        expect(() => soldierBananas(3, 17, 1001)).toThrow('k and w must be between 1 and 1000');
    });

    test('Should throw error for negative n', () => {
        expect(() => soldierBananas(3, -1, 4)).toThrow('n must be between 0 and 10^9');
    });

    test('Should throw error for n > 10^9', () => {
        expect(() => soldierBananas(3, 1000000001, 4)).toThrow('n must be between 0 and 10^9');
    });
});