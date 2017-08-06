const binaryTree = require('./binary-tree');

/**
 * http://www.geeksforgeeks.org/tree-traversals-inorder-preorder-and-postorder/
 * Given a binary tree, traverse it inorder: left, root, right
 * [1, 2, 3, 4, 5] returns [4, 2, 5, 1, 3]
 */

const levelorderTraversal = (root) => {
    if (!root) {
        return [];
    }

    const result = [];
    const queue = [];

    queue.push(root);

    while (queue.length > 0) {
        const node = queue.shift();
        result.push(node.data);

        if (node.left) {
            queue.push(node.left);
        }

        if (node.right) {
            queue.push(node.right);
        }
    }

    return result;
};

// Driver program
(() => {
    const array = [1, 2, 3, 4, 5];

    console.log(levelorderTraversal(binaryTree.serialize(array)));
})();
