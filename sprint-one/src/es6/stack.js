class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.count = 0;
    this.storage = {};
  }

  push(value) {
    this.storage[this.count] = value;
    this.count++;
  }

  pop() {
    if (this.count === 0) {
      return undefined;
    }
    let index = this.count;
    let deletedItem = this.storage[index - 1];
    delete this.storage[index];
    this.count--;
    return deletedItem;
  }
  //properties:
  //count
  //storage

  //methods:
  //adding
  //removing

}

// let coolStack = new Stack;
// coolStack.push(4);