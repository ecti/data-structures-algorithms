const binaryTree = require('./binary-tree');

/**
 * http://www.geeksforgeeks.org/tree-traversals-inorder-preorder-and-postorder/
 * Given a binary tree, traverse it preorder: root, left, right
 * [1, 2, 3, 4, 5] returns [1, 2, 4, 5, 3]
 */

const preorderTraversal = (root, result) => {
    result = result || [];
    if (!root) {
        return null;
    }

    result.push(root.data);
    preorderTraversal(root.left, result);
    preorderTraversal(root.right, result);

    return result;
};

const preorderTraversalStack = (root) => {
    if (!root) {
        return [];
    }

    const result = [];
    const stack = [];
    stack.push(root);

    while (stack.length > 0) {
        const node = stack.pop();
        result.push(node.data);

        if (node.right) {
            stack.push(node.right);
        }
        if (node.left) {
            stack.push(node.left);
        }
    }

    return result;
};

// Driver program
(() => {
    const array = [1, 2, 3, 4, 5];
    
    console.log(preorderTraversal(binaryTree.serialize(array)));

    console.log(preorderTraversalStack(binaryTree.serialize(array)));
})();
