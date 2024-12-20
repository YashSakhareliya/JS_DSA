import { expect, test, describe } from 'vitest';
import meetingFriends from '../solutions/q6.js';

describe('Meeting Friends', () => {
    test('Example 1: positions [7,1,4] should return 6', () => {
        expect(meetingFriends(7, 1, 4)).toBe(6);
    });

    test('Example 2: positions [30,20,10] should return 20', () => {
        expect(meetingFriends(30, 20, 10)).toBe(20);
    });

    test('Should handle minimum valid coordinates', () => {
        expect(meetingFriends(1, 2, 3)).toBe(2);
    });

    test('Should handle maximum valid coordinates', () => {
        expect(meetingFriends(100, 98, 99)).toBe(2);
    });

    test('Should throw error for non-distinct coordinates', () => {
        expect(() => meetingFriends(1, 1, 2)).toThrow('All coordinates must be distinct');
    });

    test('Should throw error for coordinates > 100', () => {
        expect(() => meetingFriends(101, 2, 3)).toThrow('All coordinates must be between 1 and 100');
    });

    test('Should throw error for coordinates < 1', () => {
        expect(() => meetingFriends(0, 2, 3)).toThrow('All coordinates must be between 1 and 100');
    });

    test('Should throw error for non-integer coordinates', () => {
        expect(() => meetingFriends(1.5, 2, 3)).toThrow('All coordinates must be integers');
    });

    test('Should handle scattered positions', () => {
        expect(meetingFriends(10, 50, 30)).toBe(40);
    });

    test('Should handle consecutive positions', () => {
        expect(meetingFriends(5, 6, 7)).toBe(2);
    });
});