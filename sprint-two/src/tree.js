var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];

  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  // create variable tree to push set to empty tree
  // give new tree value of function
  // push a new tree obj to children array
  let treeToPush = Tree(value);
  this.children.push(treeToPush);

};

treeMethods.contains = function(target) {
  // create result boolean set to false by default

  // declare inner helper method called searchChildren
  //// parameters - array of children, target
  //// iterate through array of children
  //// if index is target, set result to t otherwise do nothing
  //// if index has children, recurse

  // check if root is value, if it is return true
  // otherwise check if root has children
  // if so, run helper method on root's children

  // return result boolean

  let result = false;

  const searchChildren = function(children, target) {
    for (let i = 0; i < children.length; i++) {
      let child = children[i];
      if (child.value === target) {
        result = true;
      }

      if (child.children.length > 0) {
        searchChildren(child.children, target);
      }
    }
    return;
  };

  if (this.value === target) {
    result = true;
  }

  if (this.children.length > 0) {
    searchChildren(this.children, target);
  }

  return result;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */

/*

{value: 1,
chilren: [
  {value: 2,
  children: [
    {value: 4,
    children: []},
    {value: 5,
    children: []]},
  {value: 3,
  children: [
    {value: 6,
    children: []},
    {value: 7,
    children: []}
  ]},
  ]
]};

*/