import { mySqrt } from './problem-69';

describe('Problem 69: Sqrt', () => {
  it('0 should return 0', () => {
    expect(mySqrt(0)).toBe(0);
  });

  it('-1 should throw error', () => {
    expect(() => {
      mySqrt(-1);
    }).toThrow();
  });

  it('1 should return 1', () => {
    expect(mySqrt(1)).toBe(1);
  });

  it('4 should return 2', () => {
    expect(mySqrt(4)).toBe(2);
  });

  it('8 should return 2', () => {
    expect(mySqrt(8)).toBe(2);
  });

  it('500 should return ', () => {
    expect(mySqrt(500)).toBe(22);
  });
});
