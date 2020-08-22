var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  // if item does not exist in storage
  //// add item as a key to storage with a value of 1
  // if it does
  //// increment the value at the key by 1
  if (this._storage[item]) {
    this._storage[item] += 1;
  } else {
    this._storage[item] = 1;
  }

};

setPrototype.contains = function(item) {
  return this._storage[item] !== undefined;
};

setPrototype.remove = function(item) {
  let deletedItem = this._storage[item];
  delete this._storage[item];
  return deletedItem;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
