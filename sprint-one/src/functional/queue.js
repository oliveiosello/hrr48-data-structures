var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  someInstance.count = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[someInstance.count] = value;
    someInstance.count++;
  };

  someInstance.dequeue = function() {
    if (someInstance.count === 0) {
      return undefined;
    }

    //store value at first key in deletedItem
    let deletedItem = storage[0];
    for (var i = 0; i < someInstance.count; i++) {
      console.log(`${i}: ${storage[i]}, ${storage[i + 1]}`);
      storage[i] = storage[i + 1];
    }

    delete someInstance[someInstance.count - 1];
    someInstance.count--;

    //iterate through keys (numerically) 0 to count -2
    //set value at current num +1

    return deletedItem;
  };

  someInstance.size = function() {
    return someInstance.count;
  };

  return someInstance;
};

