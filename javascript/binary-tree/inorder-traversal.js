const binaryTree = require('./binary-tree');

/**
 * http://www.geeksforgeeks.org/tree-traversals-inorder-preorder-and-postorder/
 * Given a binary tree, traverse it inorder: left, root, right
 * [1, 2, 3, 4, 5] returns [4, 2, 5, 1, 3]
 */

const inorderTraversalRecursive = (root, result) => {
    result = result || [];
    if (!root) {
        return null;
    }

    inorderTraversalRecursive(root.left, result);
    result.push(root.data);
    inorderTraversalRecursive(root.right, result);

    return result;
};

const inorderTraversalStack = (root) => {
    if (!root) {
        return [];
    }

    const result = [];
    const stack = [];
    let current = root;

    while (current !== null || stack.length > 0) {
        if (current === null) {
            const node = stack.pop();
            result.push(node.data);
            current = node.right;
        } else {
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

    console.log('recursive: ', inorderTraversalRecursive(binaryTree.serialize(array)));
    console.log('stack: ', inorderTraversalStack(binaryTree.serialize(array)));

    console.log('stack: ', inorderTraversalStack(binaryTree.serialize(array2)));
})();
