'use strict';

function BinaryTree() {
  // not sure why tutorial capitalizes this
  this.Nodes = new Array();

  this.setNode = function(value, level, node) {
    this.Nodes[this.storageMappingFunction(level, node)] = value;
  }

  this.getNode = function(level, node) {
    return this.Nodes[this.storageMappingFunction(level, node)]
  }

  this.storageMappingFunction = function(level, node){
    return node + (1 << level) - 1;
  }
}

var tree = new BinaryTree();

tree.setNode(4, 0, 0);
tree.setNode(2, 1, 0);
tree.setNode(7, 1, 1);
tree.setNode(1, 2, 0);
tree.setNode(3, 2, 1);
tree.setNode(6, 2, 2);
tree.setNode(9, 2, 3);

console.log(tree.getNode(0, 0));
console.log(tree.getNode(1, 0));
console.log(tree.getNode(1, 1));
console.log(tree.getNode(2, 0));
console.log(tree.getNode(2, 1));
console.log(tree.getNode(2, 2));
console.log(tree.getNode(2, 3));


// this is returning node 0, level 2 why?
console.log(`----------------------`);
console.log(tree.getNode(1, 2));
console.log(`----------------------`);
