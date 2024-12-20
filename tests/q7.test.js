import { expect, test, describe } from 'vitest';
import divisibilityProblem from '../solutions/q7.js';

describe('Divisibility Problem', () => {
    test('Example case: a=10, b=4 should return 2', () => {
        expect(divisibilityProblem(10, 4)).toBe(2);
    });

    test('Example case: a=13, b=9 should return 5', () => {
        expect(divisibilityProblem(13, 9)).toBe(5);
    });

    test('Example case: a=100, b=13 should return 4', () => {
        expect(divisibilityProblem(100, 13)).toBe(4);
    });

    test('Example case: a=123, b=456 should return 333', () => {
        expect(divisibilityProblem(123, 456)).toBe(333);
    });

    test('Example case: a=92, b=46 should return 0', () => {
        expect(divisibilityProblem(92, 46)).toBe(0);
    });

    test('Should handle minimum inputs a=1, b=1', () => {
        expect(divisibilityProblem(1, 1)).toBe(0);
    });

    test('Should handle when a is smaller than b', () => {
        expect(divisibilityProblem(5, 10)).toBe(5);
    });

    test('Should throw error for non-integer inputs', () => {
        expect(() => divisibilityProblem(5.5, 2)).toThrow('Inputs must be integers');
    });

    test('Should throw error for inputs > 10^9', () => {
        expect(() => divisibilityProblem(2e9, 5)).toThrow('Inputs must be between 1 and 10^9');
    });

    test('Should throw error for negative inputs', () => {
        expect(() => divisibilityProblem(-5, 2)).toThrow('Inputs must be between 1 and 10^9');
    });
});