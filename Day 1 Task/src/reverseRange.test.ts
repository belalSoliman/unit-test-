import { generateReverseRange } from "./reverseRange";

describe("generateReverseRange generator behavior", () => {
  test("generates numbers in descending order with a default step of 1", () => {
    const result = Array.from(generateReverseRange(0, 5));
    expect(result).toEqual([4, 3, 2, 1, 0]);
  });

  test("generates numbers in descending order with a specified step value", () => {
    const result = Array.from(generateReverseRange(0, 10, 2));
    expect(result).toEqual([9, 7, 5, 3, 1]);
  });

  test("returns an empty array when lowerBound and upperBound are identical", () => {
    const result = Array.from(generateReverseRange(5, 5));
    expect(result).toEqual([]);
  });

  test("generates numbers in descending order when lowerBound is less than upperBound with a positive decrementStep", () => {
    const result = Array.from(generateReverseRange(0, 5, 2));
    expect(result).toEqual([4, 2, 0]);
  });

  test("returns an empty array when a negative decrementStep is provided", () => {
    const result = Array.from(generateReverseRange(0, 10, -2));
    expect(result).toEqual([]);
  });
});
