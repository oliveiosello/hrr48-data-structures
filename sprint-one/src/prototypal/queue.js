var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = Object.create(queueMethods);
  instance.count = 0;
  instance.storage = {};
  return instance;
};

var queueMethods = {
  //write methods for queue to use
  enqueue: function(value) {
    this.storage[this.count] = value;
    this.count++;
  },
  dequeue: function(value) {
    if (this.count === 0) {
      return undefined;
    }
    let deletedItem = this.storage[0];
    for (var i = 0; i < this.count; i++) {
      this.storage[i] = this.storage[i + 1];
    }

    delete this.storage[this.count - 1];
    this.count--;

    return deletedItem;
  },
  size: function(value) {
    return this.count;
  }
};

//use obj.create
//could make first and last global objects to return using this