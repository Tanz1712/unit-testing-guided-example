const { multiply } = require('./../calculator.js');

describe('Multiply', () => {
    // Our tests will be added here.
    test("should multiply two positive number correctly", () => {
        const result = multiply(1, 2);
        expect(result).toBe(2);
  });

  test("should multiply a negative and a positive number correctly", () => {
    const result = multiply(-1, 2);
    expect(result).toBe(-2);
  });

  test("should multiply any integer with zero correctly", () => {
    const result = multiply(1, 0);
    expect(result).toBe(0);
  });