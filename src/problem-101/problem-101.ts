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

export function isSymmetricRecursive(root: TreeNode | null): boolean {
  if (!root) {
    return false;
  }

  function traverse(left: TreeNode | null, right: TreeNode | null): boolean {
    if (!left && !right) {
      return true;
    } else if (!left || !right) {
      return false;
    }

    return (
      left.val == right.val &&
      traverse(left.left, right.right) &&
      traverse(left.right, right.left)
    );
  }

  return traverse(root.left, root.right);
}

export function isSymmetricIterative(root: TreeNode | null): boolean {
  if (!root) {
    return false;
  }

  const res: boolean = true;
  const leftStack: (TreeNode | null)[] = [root.left];
  const rightStack: (TreeNode | null)[] = [root.right];

  while (leftStack.length > 0 || rightStack.length > 0) {
    const l = leftStack.pop();
    const r = rightStack.pop();

    if (l?.val !== r?.val) {
      return false;
    } else if (l && r && l.val === r.val) {
      leftStack.push(l.left);
      rightStack.push(r.right);
      leftStack.push(l.right);
      rightStack.push(r.left);
    }
  }

  return res;
}
