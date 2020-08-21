var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.count = 0;
  this.storage = {};
};

Stack.prototype.push = function(value) {
  this.storage[this.count] = value;
  this.count++;
};

Stack.prototype.pop = function() {
  if (this.count === 0) {
    return undefined;
  }
  let index = this.count;
  let deletedItem = this.storage[index - 1];
  delete this.storage[index];
  this.count--;
  return deletedItem;
};

Stack.prototype.size = function() {
  return this.count;
};


