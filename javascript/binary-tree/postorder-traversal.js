const binaryTree = require('./binary-tree');

/**
 * http://www.geeksforgeeks.org/tree-traversals-inorder-preorder-and-postorder/
 * Given a binary tree, traverse it postorder: left, right, root
 * [1, 2, 3, 4, 5] returns [4, 5, 2, 3, 1]
 */

const postorderTraversal = (root, result) => {
    result = result || [];
    if (!root) {
        return null;
    }

    postorderTraversal(root.left, result);
    postorderTraversal(root.right, result);
    result.push(root.data);

    return result;
};

// Driver program
(() => {
    const array = [1, 2, 3, 4, 5];
    console.log(postorderTraversal(binaryTree.serialize(array)));
})();
