

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
    adjacencyArray = adjacencyArray.filter(element => element !== node);
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
};
// run cb on all keys

/*
 * Complexity: What is the time complexity of the above functions?
 */


