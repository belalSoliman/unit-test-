import {
  multiplyNumbers,
  divideNumbers,
  convertToUpperCase,
  checkAnagram,
  findMinimum,
  filterStringsByPrefix,
  convertSnakeToCamelCase,
} from "./functions";

test("multiplies 4 * 3 to equal 12", () => {
  expect(multiplyNumbers(4, 3)).toBe(12);
});

test("divides 20 by 4 to equal 5", () => {
  expect(divideNumbers(20, 4)).toBe(5);
});

test("returns null when dividing by 0", () => {
  expect(divideNumbers(10, 0)).toBeNull();
});

test("converts the string to uppercase", () => {
  expect(convertToUpperCase("hello")).toBe("HELLO");
});

test("checks if two strings are anagrams", () => {
  expect(checkAnagram("listen", "silent")).toBe(true);
  expect(checkAnagram("hello", "world")).toBe(false);
});

test("finds the minimum number in array", () => {
  expect(findMinimum([7, 3, 9, 1])).toBe(1);
});

test("filters strings in the array by prefix", () => {
  const arr = ["apple", "apricot", "banana", "avocado"];
  expect(filterStringsByPrefix(arr, "ap")).toEqual(["apple", "apricot"]);
});

test("converts snake_case to camelCase", () => {
  expect(convertSnakeToCamelCase("hello_world")).toBe("helloWorld");
  expect(convertSnakeToCamelCase("make_snake_case")).toBe("makeSnakeCase");
});
