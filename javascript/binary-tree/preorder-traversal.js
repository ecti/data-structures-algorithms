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

// Driver program
(() => {
    const array = [1, 2, 3, 4, 5];
    console.log(preorderTraversal(binaryTree.serialize(array)));
})();
