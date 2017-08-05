const binaryTree = require('./binary-tree');

/**
 * http://www.geeksforgeeks.org/tree-traversals-inorder-preorder-and-postorder/
 * Given a binary tree, traverse it inorder: left, root, right
 * [1, 2, 3, 4, 5] returns [4, 2, 5, 1, 3]
 */

const inorderTraversal = (root, result) => {
    result = result || [];
    if (!root) {
        return null;
    }

    inorderTraversal(root.left, result);
    result.push(root.data);
    inorderTraversal(root.right, result);

    return result;
};

// Driver program
(() => {
    const array = [1, 2, 3, 4, 5];
    console.log(inorderTraversal(binaryTree.serialize(array)));
})();
