export function getConcatenation(
  nums: number[],
  repetitions: number = 2,
): number[] {
  const res = [];

  for (let i = 0; i < repetitions; i++) {
    for (const num of nums) {
      res.push(num);
    }
  }

  return res;
}
