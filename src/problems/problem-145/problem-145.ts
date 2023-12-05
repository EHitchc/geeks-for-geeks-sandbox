/**
 * Definition for a binary tree node.
 */
export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

export function postorderTraversalRecursive(root: TreeNode | null): number[] {
  const res: number[] = [];

  if (root == null) {
    return [];
  }

  function traverse(root: TreeNode | null): void {
    if (root == null) {
      return;
    }
    traverse(root.left);
    traverse(root.right);
    res.push(root.val);
  }

  traverse(root);

  return res;
}

export function postorderTraversalIterative(root: TreeNode | null): number[] {
  if (root == null) {
    return [];
  }

  const stack: (TreeNode | null)[] = [root];
  const visited: boolean[] = [false];
  const res: number[] = [];

  while (stack.length > 0) {
    const cur = stack.pop(),
      v = visited.pop();

    if (cur) {
      if (v) {
        res.push(cur.val);
      } else {
        stack.push(cur);
        visited.push(true);
        stack.push(cur.right);
        visited.push(false);
        stack.push(cur.left);
        visited.push(false);
      }
    }
  }

  return res;
}
