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
    // if an empty list, return null
    // create variable to hold current head
    // set head of list to the next item after the head if it exists
    // return the current head stored in the temp variable

    if (list.head === null && list.tail === null) {
      return null;
    }

    let removedHead = list.head;

    if (list.head.next === null) {
      list.head = null;
    } else {
      list.head = list.head.next;
    }

    return removedHead.value;
  };

  list.contains = function(target) {
    // optimization edge case:
    // if head is equal to target or tail is equal to target
    // return true
    // set a temp variable for the current node
    // make the head the current node
    // iterate through list starting at head
    // if value of current node is equal to target
    // return true
    // if the next node is null, we've hit the end of list
    // break out of the loop

    // return false

    if (list.head === target || list.tail === target) {
      return true;
    }
    let tempNode = list.head;
    while (true) {
      if (tempNode.value === target) {
        return true;
      }
      if (tempNode.next === null) {
        break;
      } else {
        tempNode = tempNode.next;
      }
    }
    return false;
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
