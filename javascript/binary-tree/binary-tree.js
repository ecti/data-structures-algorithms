module.exports = exports = {};

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
};
exports.Node = Node;

/**
 * Create a binary tree from array
 */
exports.create = (array) => {
    if (!array || array.length === 0) {
        return null;
    }

    const queue = []; 
    const root = new Node(array[0]);
    queue.push(root);

    for (let i = 1; i < array.length; i += 2) {
        const node = queue.shift();
        const left = (array[i] && new Node(array[i])) || null;
        const right = (array[i + 1] && new Node(array[i + 1])) || null;

        queue.push(left, right);

        node.left = left;
        node.right = right;
    }

    return root;
};

