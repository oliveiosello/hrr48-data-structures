

// Instantiate a new graph
var Graph = function() {
  // adjacencyList: object of arrays
  // {A: [B, C],
  //  B: [A],
  //  C: [A],
  //  D: [A, C]}
  this.adjacencyList = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  // add a k-v pair to adjacencyList
  this.adjacencyList[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this.adjacencyList[node] !== undefined;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  if (!this.contains(node)) {
    return;
  }

  // remove the node (meaning the key from the a list)
  // go through all of the rest of the keys and filter that value out of all the arrays
  delete this.adjacencyList[node];

  for (let adjacencyArray in this.adjacencyList) {
    this.adjacencyList[adjacencyArray] = this.adjacencyList[adjacencyArray].filter(element => element !== node);
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return this.adjacencyList[fromNode].includes(toNode) && this.adjacencyList[toNode].includes(fromNode);
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  if (!this.adjacencyList[fromNode] || !this.adjacencyList[toNode]) {
    return undefined;
  }
  this.adjacencyList[fromNode].push(toNode);
  this.adjacencyList[toNode].push(fromNode);
};

// check if both nodes exist
// if either doesn't exist
//// return undefined
// add from node to tonode adj list by pushing to arr
// same in reverse

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  this.adjacencyList[fromNode] = this.adjacencyList[fromNode].filter(element => element !== toNode);
  this.adjacencyList[toNode] = this.adjacencyList[toNode].filter(element => element !== fromNode);
};

// run filter for fromNode on toNode adj list
// same in reverse

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var key in this.adjacencyList) {
    cb(Number(key));
  }
};
// run cb on all keys

/*
 * Complexity: What is the time complexity of the above functions?
 */

// var graph = new Graph();
// var connectToFive = function(item) {
//   graph.addEdge(item, 5);
// };
// graph.addNode(5);
// graph.addNode(2);
// graph.addNode(1);
// graph.addNode(3);
// graph.forEachNode(connectToFive);
// console.log(graph.hasEdge(2, 5));
// console.log(graph.hasEdge(1, 5));
// console.log(graph.hasEdge(3, 5));
// console.log(graph.hasEdge(5, 5));
