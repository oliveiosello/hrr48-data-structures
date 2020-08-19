var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {

  };

  someInstance.count = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    //add value to obj using numeric keys ex: {"0":"1","1":"2",etc... }
    storage[someInstance.count] = value;
    someInstance.count++;
    // return storage.count;
  };

  someInstance.pop = function() {
    //remove values from obj starting at last key
    if (someInstance.count === 0) {
      return undefined;
    }
    let index = someInstance.count;
    let deletedItem = storage[index];
    delete storage[index];
    someInstance.count--;
    return deletedItem;
  };

  someInstance.size = function() {
    //get total number of keys in obj
    return someInstance.count;
  };

  return someInstance;
};