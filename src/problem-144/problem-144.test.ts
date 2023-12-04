import {
  TreeNode,
  preorderTraversalIterative,
  preorderTraversalRecursive,
} from './problem-144';

describe('Problem 144: Binary Tree Preorder Traversal - Recursive', () => {
  it('input [1,null,2,3] returns [1,2,3]', () => {
    const root = new TreeNode(1, null, new TreeNode(2, new TreeNode(3)));

    expect(preorderTraversalRecursive(root)).toStrictEqual([1, 2, 3]);
  });

  it('input [] returns []', () => {
    const root = null;

    expect(preorderTraversalRecursive(root)).toStrictEqual([]);
  });

  it('input [1] returns [1]', () => {
    const root = new TreeNode(1);

    expect(preorderTraversalRecursive(root)).toStrictEqual([1]);
  });
});

describe('Problem 144: Binary Tree Preorder Traversal - Iterative', () => {
  it('input [1,null,2,3] returns [1,2,3]', () => {
    const root = new TreeNode(1, null, new TreeNode(2, new TreeNode(3)));

    expect(preorderTraversalIterative(root)).toStrictEqual([1, 2, 3]);
  });

  it('input [] returns []', () => {
    const root = null;

    expect(preorderTraversalIterative(root)).toStrictEqual([]);
  });

  it('input [1] returns [1]', () => {
    const root = new TreeNode(1);

    expect(preorderTraversalIterative(root)).toStrictEqual([1]);
  });
});
