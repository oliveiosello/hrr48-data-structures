var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  //create variable to track start index and end index

  // Implement the methods below

  someInstance.enqueue = function(value) {
    //add value to obj using numeric keys ex: {"0":"1","1":"2",etc... }
    //end plus 1
  };

  someInstance.dequeue = function() {
    //remove values from obj starting at first key
    //start plus 1
  };

  someInstance.size = function() {
    //subtract start from end
  };

  return someInstance;
};
