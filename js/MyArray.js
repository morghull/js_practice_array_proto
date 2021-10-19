'use strict';
/*logic*/
function MyArrayProto() {
  // this.push = function (...args) {
  //   args.forEach((item) => {
  //     if (
  //       item instanceof MyArray ||
  //       item instanceof Array
  //     ) {
  //       item.forEach((subitem) => {
  //         this[this.length++] = subitem;
  //       });
  //     } else this[this.length++] = item;
  //   });
  //   return this.length;
  // };
  this.push = function () {
    for (let i = 0; i < arguments.length; i++) {
      if (
        arguments[i] instanceof MyArray ||
        arguments[i] instanceof Array
      ) {
        for (let j = 0; j < arguments[i].length; j++) {
          this[this.length++] = arguments[i][j];
        }
      } else this[this.length++] = arguments[i];
    }
    return this.length;
  };
  // this.unshift = function (...args) {
  //   this.reverse();
  //   args.reverse();
  //   this.push(...args);
  //   this.reverse();
  //   return this.length;
  // };
  this.unshift = function () {
    for (let i = arguments.length - 1; i >= 0; i--) {
      if (
        arguments[i] instanceof MyArray ||
        arguments[i] instanceof Array
      ) {
        for (let j = arguments[i].length - 1; j >= 0; j--) {
          let value = arguments[i][j];
          for (let k = 0; k <= this.length; k++) {
            const buffer = this[k];
            this[k] = value;
            value = buffer;
          }
          this.length++;
        }
      } else {
        let value = arguments[i];
        for (let j = 0; j <= this.length; j++) {
          const buffer = this[j];
          this[j] = value;
          value = buffer;
        }
        this.length++;
      }
    }
    return this.length;
  };
  this.reverse = function () {
    let i = 0;
    let j = this.length - 1;
    while (i < j) {
      const buffer = this[i];
      this[i] = this[j];
      this[j] = buffer;
      i++;
      j--;
    }
    return this;
  };
  this.pop = function () {
    if (this.length === 0) return;
    const item = this[--this.length];
    delete this[this.length];
    return item;
  };
  // this.concat = function (...args) {
  //   const result = new MyArray();
  //   result.push(this);
  //   args.forEach((item) => {
  //     result.push(item);
  //   });
  //   return result;
  // };
  this.concat = function () {
    const result = new MyArray();
    result.push(this);
    for (let i = 0; i < arguments.length; i++) {
      result.push(arguments[i]);
    }
    return result;
  };
  this.slice = function (begin, end = this.length) {
    const result = new MyArray();
    for (let i = begin - 1; i < end; i++) {
      result.push(this[i]);
    }
    return result;
  };
  this.includes = function (searchElement, fromIndex = 0) {
    for (let i = fromIndex; i < this.length; i++) {
      if (this[i] === searchElement) return true;
    }
    return false;
  };
  this.forEach = function (func) {
    for (let i = 0; i < this.length; i++) {
      func(this[i]);
    }
  };
  this.some = function (func) {
    for (let i = 0; i < this.length; i++) {
      if (func(this[i])) return true;
      return false;
    }
  };
  this.every = function (func) {
    for (let i = 0; i < this.length; i++) {
      if (!func(this[i])) return false;
    }
    return true;
  };
  this.filter = function (func) {
    const result = new MyArray();
    for (let i = 0; i < this.length; i++) {
      if (func(this[i])) result.push(this[i]);
    }
    return result;
  };
  this.map = function (func) {
    const result = new MyArray();
    this.forEach((item) => {
      result.push(func(item));
    });
    return result;
  };
  this.shift = function () {
    const deletedItem = this[0];
    for (let i = 0; i < this.length - 1; i++) {
      this[i] = this[i + 1];
    }
    delete this[this.length - 1];
    this.length--;
    return deletedItem;
  };
  this.splice = function (start, delCount, ...insertItems) {
    delCount = Number.isNaN(Number(delCount))
      ? this.length - start
      : delCount;
    const deletedPartOfArray = new MyArray();
    for (let i = start; i < start + delCount; i++) {
      deletedPartOfArray.push(this[i]);
    }
    const endPartOfArray = new MyArray();
    for (let i = start + delCount; i < this.length; i++) {
      endPartOfArray.push(this[i]);
    }
    for (let i = start; i < this.length; i++) {
      delete this[i];
    }
    this.length = start;
    this.push(...insertItems, endPartOfArray);
    return deletedPartOfArray;
  };
  this.sort = function () {
    let prev = this[0];
    for (let i = 0; i < this.length; i++) {
      if (i === 0) {
        continue;
      }
      if (this[i] < prev) {
        this[i - 1] = this[i];
        this[i] = prev;
        i = 0;
      }
      prev = this[i];
    }
    return this;
  };
}
/*data*/
function MyArray() {
  this.length = 0;
  for (let i = 0; i < arguments.length; i++) {
    this.push(arguments[i]);
  }
}
/*prototype*/
MyArray.prototype = new MyArrayProto();

MyArray.prototype.newMethod = function () {
  return 'new method';
};
Array.prototype.newMethod = function () {
  return 'new method';
};
