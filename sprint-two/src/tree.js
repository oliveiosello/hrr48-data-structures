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