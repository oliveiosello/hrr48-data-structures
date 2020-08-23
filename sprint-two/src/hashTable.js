

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);

  for (let i = 0; i < this._limit - 1; i++) {
    this._storage[i] = [];
  }
};

HashTable.prototype.insert = function(k, v) {
  //[[health, 100], [armor, 45]]
  var index = getIndexBelowMaxForKey(k, this._limit);

  for (let i = 0; i < this._storage[index].length; i++) {
    let currentTuple = this._storage[index][i];
    if (currentTuple[0] = k) {
      this._storage[index][i][1] = v;
    }
  }

  this._storage[index].push([k, v]);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  let tuple = this._storage[index];
  for (let i = 0; i < tuple.length; i++) {
    if (tuple[i][0] === k) {
      return tuple[i][1];
    }
  }
};
// iterate through this tuples storage[index]
//// if tuple at zero equals k
////// return tuple at one

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


