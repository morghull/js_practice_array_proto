class MyArrayIterator {
  constructor(myArr) {
    this.arr = myArr;
    this.currentIndex = 0;
  }
  next() {
    return {
      value: this.arr[this.currentIndex++],
      done: this.currentIndex > this.arr.length,
    };
  }
}

class MyArray {
  constructor() {}
  concat() {
    const result = new MyArray();
    result.push(this);
    for (let i = 0; i < arguments.length; i++) {
      result.push(arguments[i]);
    }
    return result;
  }
  forEach(func) {
    for (let i = 0; i < this.length; i++) {
      func(this[i]);
    }
  }
  flat(depth = 1) {
    let result = new MyArray();
    this.forEach((item) => {
      if (MyArray.isMyArray(item) && depth) {
        result = result.concat(item.flat(depth - 1));
      } else if (item !== undefined) result.push(item);
    });
    return result;
  }
  static isMyArray(obj) {
    return obj instanceof MyArray;
  }

  [Symbol.iterator]() {
    return new MyArrayIterator(this);
  }
}
