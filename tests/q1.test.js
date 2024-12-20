import { expect, test,describe  } from "vitest";
import watermelon from "../solutions/q1";

describe("Watermelon weighe is dividable or not", () => {
    test("Example 1", () => {
        expect(watermelon(1)).toBe("NO");
    });

    test("Example 2", () => {
        expect(watermelon(2)).toBe("NO");
    });

    test("Example 3", () => {
        expect(watermelon(3)).toBe("NO");
    });

    test("Example 4", () => {
        expect(watermelon(4)).toBe("YES");
    });
});