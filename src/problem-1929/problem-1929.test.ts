import { getConcatenation } from './problem-1929';

describe('Problem 1929 - Concatenation of Array', () => {
  it('[1,2,1] should return [1,2,1,1,2,1]', () => {
    expect(getConcatenation([1, 2, 1])).toStrictEqual([1, 2, 1, 1, 2, 1]);
  });

  it('[1,3,2,1] should return [1,3,2,1,1,3,2,1]', () => {
    expect(getConcatenation([1, 2, 1])).toStrictEqual([1, 2, 1, 1, 2, 1]);
  });
});
