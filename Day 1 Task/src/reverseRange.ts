export function* generateReverseRange(
  lowerBound: number,
  upperBound: number,
  decrementStep: number = 1
): Generator<number, void, unknown> {
  for (let i = upperBound - 1; i >= lowerBound; i -= decrementStep) {
    yield i;
  }
}
