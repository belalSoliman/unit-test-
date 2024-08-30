export const multiplyNumbers = (num1: number, num2: number) => num1 * num2;

export const divideNumbers = (numerator: number, denominator: number) =>
  denominator !== 0 ? numerator / denominator : null;

export const convertToUpperCase = (inputString: string) =>
  inputString.toUpperCase();

export const checkAnagram = (string1: string, string2: string) => {
  const normalizeString = (s: string) =>
    s
      .toLowerCase()
      .replace(/[^a-z0-9]/g, "")
      .split("")
      .sort()
      .join("");
  return normalizeString(string1) === normalizeString(string2);
};

export const findMinimum = (numbers: number[]): number => Math.min(...numbers);

export const filterStringsByPrefix = (
  strings: string[],
  prefix: string
): string[] => {
  return strings.filter((str) => str.startsWith(prefix));
};

export const convertSnakeToCamelCase = (snakeCaseString: string) => {
  return snakeCaseString.replace(/(_\w)/g, (match) => match[1].toUpperCase());
};
