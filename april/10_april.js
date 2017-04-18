'use strict';

//        4                     level: 0 node: 0
//      /  \                          /   \
//    2     7                     1, 0     1,1
//   / \   / \                    /  \     /  \
// 1    3 6   9               2, 0   2,1  2,3  2,4
//
//

function BinaryTree() {
  // not sure why tutorial capitalizes this
  // makes sense, applies to the array
  this.Nodes = new Array();

  this.level = 0;
  this.node = 0;

  this.root = function(value) {
    this.level = 0;
    this.nodes = 0;

    if (value !== undefined) {
      this.Nodes[this.storageMappingFunction(this.level, this.node)] = value;
    }
    return this.Nodes[this.storageMappingFunction(this.level, this.node)];
  }

  this.parent = (value) => {
    this.level--;
    this.node = this.node >> 2;

    if (value !== undefined) {
      this.Nodes[this.storageMappingFunction(this.level, this.node)] = value;
    }
    return this.Nodes[this.storageMappingFunction(this.level, this.node)];
  }

  this.leftSide = (value) => {
    this.level++;
    this.node = this.node * 2;

    if (value !== undefined) {
      this.Nodes[this.storageMappingFunction(this.level, this.node)] = value;
    }
    return this.Nodes[this.storageMappingFunction(this.level, this.node)];
  }

  this.rightSide = (value) => {
    this.level++;
    this.node = this.node * 2 + 1;

    if (value !== undefined) {
      this.Nodes[this.storageMappingFunction(this.level, this.node)] = value;
    }
    return this.Nodes[this.storageMappingFunction(this.level, this.node)];
  }

  this.setNode = (value, level, node) => {
    if (level === undefined) {
      this.Nodes[this.storageMappingFunction(this.level, this.node)] = value;
    } else {
      this.Nodes[this.storageMappingFunction(level, node)] = value;
    }
  }

  this.getNode = (level, node) => {
    if (level === undefined) {
      return this.Nodes[this.storageMappingFunction(this.level, this.node)]
    } else {
      return this.Nodes[this.storageMappingFunction(level, node)]
    }
  }

  this.storageMappingFunction = function(level, node){
    return node + (1 << level) - 1;
  }
}

var tree = new BinaryTree();

function traverse() {
  console.log(`traversed is: ${tree.getNode()}`);
  if (tree.leftSide() !== undefined)  { traverse(); }
  tree.parent();
  if (tree.rightSide() !== undefined) { traverse(); }
  tree.parent();
}

// value, level, node
tree.setNode(4, 0, 0);
tree.setNode(2, 1, 0);
tree.setNode(7, 1, 1);
tree.setNode(1, 2, 0);
tree.setNode(3, 2, 1);
tree.setNode(6, 2, 2);
tree.setNode(9, 2, 3);

console.log(`----------------------`);
console.log(`Tree from root`);
console.log(`----------------------`);
console.log(tree);
console.log(`\nI should get 4, 7, 9`);
console.log(tree.root());
console.log(tree.rightSide());
console.log(tree.rightSide());

console.log(`----------------------`);
console.log(`Should traverse and print tree but prints 2,0 -- 2,1 -- 2,3`);
tree.root();
traverse();
console.log(`----------------------`);

// this is returning node 0, level 2 why?
console.log(`----------------------`);
console.log(tree.getNode(1, 2));
console.log(`----------------------`);
