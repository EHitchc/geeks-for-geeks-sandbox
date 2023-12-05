import {
  TreeNode,
  postorderTraversalIterative,
  postorderTraversalRecursive,
} from './problem-145';

describe('Problem 145: Binary Tree Postorder Traversal - Recursive', () => {
  it('input [1,null,2,3] returns [3,2,1]', () => {
    const root = new TreeNode(1, null, new TreeNode(2, new TreeNode(3)));

    expect(postorderTraversalRecursive(root)).toStrictEqual([3, 2, 1]);
  });

  it('input [] returns []', () => {
    const root = null;

    expect(postorderTraversalRecursive(root)).toStrictEqual([]);
  });

  it('input [1] returns [1]', () => {
    const root = new TreeNode(1);

    expect(postorderTraversalRecursive(root)).toStrictEqual([1]);
  });
});

describe('Problem 145: Binary Tree Postorder Traversal - Iterative', () => {
  it('input [1,null,2,3] returns [3,2,1]', () => {
    const root = new TreeNode(1, null, new TreeNode(2, new TreeNode(3)));

    expect(postorderTraversalIterative(root)).toStrictEqual([3, 2, 1]);
  });

  it('input [] returns []', () => {
    const root = null;

    expect(postorderTraversalIterative(root)).toStrictEqual([]);
  });

  it('input [1] returns [1]', () => {
    const root = new TreeNode(1);

    expect(postorderTraversalIterative(root)).toStrictEqual([1]);
  });
});
