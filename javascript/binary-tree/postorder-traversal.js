const binaryTree = require('./binary-tree');

/**
 * http://www.geeksforgeeks.org/tree-traversals-inorder-preorder-and-postorder/
 * Given a binary tree, traverse it postorder: left, right, root
 * [1, 2, 3, 4, 5] returns [4, 5, 2, 3, 1]
 */

const postorderTraversalRecursive = (root, result) => {
    result = result || [];
    if (!root) {
        return null;
    }

    postorderTraversalRecursive(root.left, result);
    postorderTraversalRecursive(root.right, result);
    result.push(root.data);

    return result;
};

const postorderTraversalStack = (root) => {
    if (!root) {
        return [];
    }

    const result = [];
    const stack = [];
    let current = root;

    while (current !== null || stack.length > 0) {
        if (current === null) {
            const node = stack.pop();
            if (node.right && node.right === stack[stack.length - 1]) {
                current = stack.pop();
                stack.push(node);
            } else {
                result.push(node.data);
                current = null;
            }
        } else {
            if (current.right) {
                stack.push(current.right);
            }
            stack.push(current);
            current = current.left;
        }
    }
    return result;
};

// Driver program
(() => {
    const array = [1, 2, 3, 4, 5];
    const array2 = [1, 2, 3, 4, 5, 6, 7, null, null, null, null, null, 8];

    console.log('recursive: ', postorderTraversalRecursive(binaryTree.serialize(array)));
    console.log('recursive: ', postorderTraversalRecursive(binaryTree.serialize(array2)));

    console.log('stack: ', postorderTraversalStack(binaryTree.serialize(array2)));
})();
