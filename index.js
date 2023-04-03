class SortedList {
  constructor() {
    this.items = [],
      this.length = 0;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length++;
  }


  get(pos) {

    if (!this.items[pos]) {
      throw new Error('OutOfBounds');
    }
    return this.items[pos]
  }

  max() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    }
    const maxValue = Math.max(...this.items);
    return maxValue;
  }



  min() {
    if (this.items.length === 0) {
      throw new Error('OutOfBounds');
    }
    const minValue = Math.min(...this.items);
    return minValue;
  }


  sum() {
    let total = 0;
    for (let i = 0; i < this.items.length; i++) {
      total += this.items[i];
    }
    return total
  }

  avg() {
    if (!this.items.length) {
      throw new Error('EmptySortedList');
    }
    return this.sum() / this.items.length;
  }
}

module.exports = SortedList;
