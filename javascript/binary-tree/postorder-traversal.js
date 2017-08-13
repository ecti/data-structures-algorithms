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

/**
 * postorderTraversalStack -- method 1
 * traverse by storing branch nodes in stack in reverse order, root, right, left
 * keep track of traversed nodes by adding null to stack
 * @param {*} root 
 */
const postorderTraversalStack1 = (root) => {
    if (!root) {
        return [];
    }

    const result = [];
    const stack = [];
    let current = root;

    while (current !== null || stack.length > 0) {
        if (current === null) {
            let node = stack.pop();

            if (node === null) {
                node = stack.pop();
                result.push(node.data);
            } else if (node.right === null) {
                result.push(node.data);
            } else {
                stack.push(node, null);
                current = node.right;
            }
        } else {
            stack.push(current);
            current = current.left;
        }
    }

    return result;
};

/**
 * postorderTraversalStack -- method 2
 * traverse left side while keeping track of right node and root in stack
 * @param {*} root 
 */
const postorderTraversalStack2 = (root) => {
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
    const array3 = [1, 2, 3, 4, 5, null, 6, null, null, null, 7];

    console.log('recursive: ', postorderTraversalRecursive(binaryTree.serialize(array)));
    console.log('recursive: ', postorderTraversalRecursive(binaryTree.serialize(array2)));

    console.log('stack -- method 1: ', postorderTraversalStack1(binaryTree.serialize(array2)));
    console.log('stack -- method 1: ', postorderTraversalStack1(binaryTree.serialize(array3)));
    console.log('stack -- method 2: ', postorderTraversalStack2(binaryTree.serialize(array2)));
})();
