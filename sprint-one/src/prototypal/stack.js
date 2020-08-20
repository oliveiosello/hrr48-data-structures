var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = Object.create(stackMethods);
  instance.count = 0;
  instance.storage = {};
  return instance;
};

var stackMethods = {
  push: function(value) {
    this.storage[this.count] = value;
    this.count++;
  },
  pop: function() {
    if (this.count === 0) {
      return undefined;
    }
    let index = this.count;
    let deletedItem = this.storage[index - 1];
    delete this.storage[index];
    this.count--;
    return deletedItem;
  },
  size: function() {
    return this.count;
  }
};


//use obj.create
//could make first and last global objects to return using this
