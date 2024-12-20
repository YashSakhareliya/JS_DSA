import { expect, test, describe } from 'vitest';
import dominoPiling from '../solutions/q2.js';

describe('Domino Piling', () => {
    test('Example 1: 2x4 board should fit 4 dominoes', () => {
        expect(dominoPiling(2, 4)).toBe(4);
    });

    test('Example 2: 3x3 board should fit 4 dominoes', () => {
        expect(dominoPiling(3, 3)).toBe(4);
    });

    test('Minimum board 1x1 should fit 0 dominoes', () => {
        expect(dominoPiling(1, 1)).toBe(0);
    });

    test('1x2 board should fit 1 domino', () => {
        expect(dominoPiling(1, 2)).toBe(1);
    });

    test('Maximum board 16x16 should fit 128 dominoes', () => {
        expect(dominoPiling(16, 16)).toBe(128);
    });

    test('Should throw error for M > N', () => {
        expect(() => dominoPiling(4, 2)).toThrow('M must be less than or equal to N');
    });

    test('Should throw error for negative numbers', () => {
        expect(() => dominoPiling(-1, 4)).toThrow('Inputs must be between 1 and 16');
    });

    test('Should throw error for numbers > 16', () => {
        expect(() => dominoPiling(2, 17)).toThrow('Inputs must be between 1 and 16');
    });

    test('Should throw error for non-integer inputs', () => {
        expect(() => dominoPiling(2.5, 4)).toThrow('Inputs must be integers');
    });
});