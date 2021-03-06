var BinarySearchTree = function(value) {
  var bst = {};
  bst.value = value;
  bst.left = null;
  bst.right = null;
  _.extend(bst, bstMethods);
  return bst;
};

var bstMethods = {};

bstMethods.insert = function(val) {
  var insertHelper = function(node) {
    if (node.value === val) {
      return;
    }
    if (val < node.value) {
      if (node.left === null) {
        node.left = {value: val, left: null, right: null};
        return;
      } else {
        insertHelper(node.left);
      }
    } else if (val > node.value) {
      if (node.right === null) {
        node.right = {value: val, left: null, right: null};
        return;
      } else {
        insertHelper(node.right);
      }
    }
  };

  insertHelper(this);
  return;
};

bstMethods.contains = function(val) {
  let result = false;

  var containsHelper = function(node, val) {
    if (node.value === val) {
      result = true;
      return;
    } else if (val < node.value) {
      if (node.left === null) {
        return;
      } else {
        containsHelper(node.left, val);
      }
    } else if (val > node.value) {
      if (node.right === null) {
        return;
      } else {
        containsHelper(node.right, val);
      }
    }
  };

  containsHelper(this, val);
  return result;
};

bstMethods.depthFirstLog = function(cb) {
  var dflHelper = function(node, cb) {
    cb(node.value);
    if (node.left !== null) {
      dflHelper(node.left, cb);
    }
    if (node.right !== null) {
      dflHelper(node.right, cb);
    }
    return;
  };
  dflHelper(this, cb);
};

// dept first
// create helper func dflHelper
//// pass cb and node to dflHelper as params
// run cb on node's val
// check to see if node has children
//// if none, return
//// if left child
////// recurse dfl on L child
//// if right child
////// recurse dfl on R child
// run dfl helper with cb and this as params


// depth first keeps track of seen nodes? to ensure no doubles?
//// for every node we check, push value to array of seen values?


// insert
// is value current node
//// stop
// is value less than or greater curent node
//// is relevant node null?
////// if so insert and return
////// if not recurse on relevant node 8-12

// contains
// set result to false
// is value current node
//// return true
//// if not, is value less than or greater than?
//// continue to relevant node
//// recurse 17-20
// return result

/*
 * Complexity: What is the time complexity of the above functions?
 */


/*
  {
    value: 8,
    left: {value: 3
                left: {value: 1, left: null, right: null}
                right: {value: 6,
                             left: {value: 4, left: null, right: null},
                             right: {value: 7, left: null, right: null}
                }
    right: {value: 10,
                 left: null,
                 right: {value: 14,
                              left: {value: 13, left: null, right: null},
                              right: null}}
  }
*/