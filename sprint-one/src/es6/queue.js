class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.count = 0;
    this.storage = {};
  }

  enqueue(value) {
    this.storage[this.count] = value;
    this.count++;
  }

  dequeue() {
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
  }

  size() {
    return this.count;
  }

}
