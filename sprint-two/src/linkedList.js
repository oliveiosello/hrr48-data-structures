var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    // create a new node to push to the list with addToTail's value param as the input value,
    // temporarily assigned to a variable
    // if list is empty (list.head is null and list.tail is null)
    //set list.head and list.tail to the new node
    // add new node
    // point tail.next to new node
    let nodeToPush = Node(value);

    if (list.head === null && list.tail === null) {
      list.head = nodeToPush;
      list.tail = nodeToPush;
    }

    list.tail.next = nodeToPush; // list.tail refers to the previous tail here
    list.tail = nodeToPush; // we set list.tail to the new tail

  };

  list.removeHead = function() {
  };

  list.contains = function(target) {
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
