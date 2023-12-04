export function mySqrt(x: number): number {
  let left = 0,
    right = x,
    res = 0;

  if (x < 0) {
    throw new Error('Cannot calculate square root of negative input');
  }

  while (left <= right) {
    const m = Math.ceil(left + (right - left) / 2);

    if (m * m < x) {
      left = m + 1;
      res = m;
    } else if (m * m > x) {
      right = m - 1;
    } else {
      return m;
    }
  }

  return res;
}
