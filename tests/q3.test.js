import { expect, test, describe } from 'vitest';
import elephant from '../solutions/q3.js';

describe('Elephant', () => {
    test('Example 1: should return 1 for x=5', () => {
        expect(elephant(5)).toBe(1);
    });

    test('Example 2: should return 3 for x=12', () => {
        expect(elephant(12)).toBe(3);
    });

    test('Should handle minimum input x=1', () => {
        expect(elephant(1)).toBe(1);
    });

    test('Should handle x=6', () => {
        expect(elephant(6)).toBe(2);
    });

    test('Should handle x=25', () => {
        expect(elephant(25)).toBe(5);
    });

    test('Should throw error for negative numbers', () => {
        expect(() => elephant(-1)).toThrow('Input must be between 1 and 1,000,000');
    });

    test('Should throw error for numbers greater than 1,000,000', () => {
        expect(() => elephant(1000001)).toThrow('Input must be between 1 and 1,000,000');
    });

    test('Should throw error for non-integer inputs', () => {
        expect(() => elephant(5.5)).toThrow('Input must be an integer');
    });
});