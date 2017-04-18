'use strict';

//        4                     level: 0 node: 0
//      /  \                          /   \
//    2     7                     1, 0     1,1
//   / \   / \                    /  \     /  \
// 1    3 6   9               2, 0   2,1  2,3  2,4

function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function BinarySearchTree() {
  this.root = null;
}

BinarySearchTree.prototype.push = (val) => {

  if (!root) {
    this.root = new Node(val);
    return;
  }

  let currentNode = root;
  let newNode = new Node(val);

  while (currentNode) {
    if (val > currentNode.value) {
      if (!currentNode.left){
        currentNode.left = newNode;
        break;
      } else {
        currentNode = currentNode.left;
      }
    } else {
      if (!currentNode.right){
        currentNode.right = newNode;
        break;
      } else {
        currentNode = currentNode.right;
      }
    }
  }
}

function findMin(node) {
  if (!node) {
    return 0;
  }

  if (node.left) {
    return findMin(node.left);
  }
  return node.value;
}

let tree = new BinarySearchTree();
tree.push(4);
tree.push(2);
tree.push(7);
tree.push(1);
tree.push(3);
tree.push(6);
tree.push(9);

// console.log(findMin(tree.root;
console.log(findMin(tree));
console.log(tree);
