import {
  TreeNode,
  isSymmetricIterative,
  isSymmetricRecursive,
} from './problem-101';

describe('Problem 101 - Symmetric Tree - Recursive', () => {
  it('[1,2,2,3,4,4,3] returns true', () => {
    const root = new TreeNode(
      1,
      new TreeNode(2, new TreeNode(3), new TreeNode(4)),
      new TreeNode(2, new TreeNode(4), new TreeNode(3)),
    );

    expect(isSymmetricRecursive(root)).toBe(true);
  });

  it('[1,2,2,null,3,null,3] returns false', () => {
    const root = new TreeNode(
      1,
      new TreeNode(2, null, new TreeNode(3)),
      new TreeNode(2, null, new TreeNode(3)),
    );

    expect(isSymmetricRecursive(root)).toBe(false);
  });
});

describe('Problem 101 - Symmetric Tree - Iterative', () => {
  it('[1,2,2,3,4,4,3] returns true', () => {
    const root = new TreeNode(
      1,
      new TreeNode(2, new TreeNode(3), new TreeNode(4)),
      new TreeNode(2, new TreeNode(4), new TreeNode(3)),
    );

    expect(isSymmetricIterative(root)).toBe(true);
  });

  it('[1,2,2,null,3,null,3] returns false', () => {
    const root = new TreeNode(
      1,
      new TreeNode(2, null, new TreeNode(3)),
      new TreeNode(2, null, new TreeNode(3)),
    );

    expect(isSymmetricIterative(root)).toBe(false);
  });
});
