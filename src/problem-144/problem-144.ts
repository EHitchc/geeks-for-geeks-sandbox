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

export function preorderTraversalRecursive(root: TreeNode | null): number[] {
	if (!root) {
		return [];
	}

	const res: number[] = [];

	function traverse(node: TreeNode | null) {
		if (!node) {
			return;
		}
		res.push(node.val);
		traverse(node.left);
		traverse(node.right);
	}

	traverse(root);

	return res;
}

export function preorderTraversalIterative(root: TreeNode | null): number[] {
	if (!root) {
		return [];
	}

	const stack: (TreeNode | null)[] = [root];
	const res: number[] = [];

	while (stack.length > 0) {
		const cur = stack.pop();
		if (cur) {
			res.push(cur.val);
			stack.push(cur.right);
			stack.push(cur.left);
		}
	}

	return res;
}
