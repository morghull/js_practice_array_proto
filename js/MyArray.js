'use strict';
/*logic*/
function MyArrayProto() {
  this.push = function (...args) {
    args.forEach((item) => {
      if (
        item instanceof MyArray ||
        item.constructor === Array
      ) {
        item.forEach((subitem) => {
          this[this.length++] = subitem;
        });
      } else this[this.length++] = item;
    });
    return this.length;
  };
  this.unshift = function (...args) {
    this.reverse();
    args.reverse();
    this.push(...args);
    this.reverse();
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
  this.concat = function (...args) {
    const result = new MyArray();
    result.push(this);
    args.forEach((item) => {
      result.push(item);
    });
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
  this.shift = function () {
    const deletedItem = this[0];
    for (let i = 0; i < this.length - 1; i++) {
      this[i] = this[i + 1];
    }
    delete this[this.length - 1];
    this.length--;
    return deletedItem;
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

const labelStyleBasis = 'color:darkcyan;font-size:16px;';
const taskLabelStyle = labelStyleBasis + 'margin-top:15px;';
const labelStyle = 'color:darkcyan;';

console.log('%c%s', labelStyleBasis, 'Task 1 CONCAT');
const concatArray1 = new MyArray([1, 2, 3]);
const concatArray2 = new MyArray(4, 5, 6);
console.log(
  '%c%s',
  labelStyle,
  'trying to concat array 1:',
  concatArray1
);
console.log(
  '%c%s',
  labelStyle,
  'trying to concat array 2:',
  concatArray2
);
const concatedArray = new MyArray().concat(
  concatArray1,
  concatArray2
);
console.log('%c%s', labelStyle, 'concat:', concatedArray);

console.log('%c%s', taskLabelStyle, 'Task 2 REVERSE');
const reverseArray = new MyArray(1, 2, 3);
console.log('%c%s', labelStyle, 'before:', reverseArray);
console.log(
  '%c%s',
  labelStyle,
  'reverse:',
  reverseArray.reverse()
);

console.log('%c%s', taskLabelStyle, 'Task 3 PUSH');
const pushArray = new MyArray(1, 2, 3);
console.log('%c%s', labelStyle, 'before:', pushArray);
const tryingToPush = [4, [5], new MyArray(6)];
console.log(
  '%c%s',
  labelStyle,
  'trying to push:',
  tryingToPush
);
pushArray.push(...tryingToPush);
console.log('%c%s', labelStyle, 'after push:', pushArray);

console.log('%c%s', taskLabelStyle, 'Task 4 UNSHIFT');
const unshiftArray = new MyArray(1, 2, 3);
console.log('%c%s', labelStyle, 'before:', unshiftArray);
const tryingToUnshift = [4, [5], new MyArray(6)];
console.log(
  '%c%s',
  labelStyle,
  'trying to unshift:',
  tryingToUnshift
);
unshiftArray.unshift(...tryingToUnshift);
console.log('%c%s', labelStyle, 'unshift:', unshiftArray);

console.log('%c%s', taskLabelStyle, 'Task 5 SHIFT');
const shiftArray = new MyArray('js', 'css', 'html');
console.log('%c%s', labelStyle, 'before:', shiftArray);
const shiftedItem = shiftArray.shift();
console.log(
  '%c%s',
  labelStyle,
  'shifted element:',
  shiftedItem
);
console.log('%c%s', labelStyle, 'shifted:', shiftArray);

console.log('%c%s', taskLabelStyle, 'Task 5 POP');
const popArray = new MyArray('js', 'css', 'html');
console.log('%c%s', labelStyle, 'before:', popArray);
const popedItem = popArray.pop();
console.log(
  '%c%s',
  labelStyle,
  'shifted element:',
  popedItem
);
console.log('%c%s', labelStyle, 'shifted:', popArray);

console.log('%c%s', taskLabelStyle, 'Task 5 SLICE');
const sliceArray = new MyArray(1, 2, 3, 4, 5);
const slicedArray1 = sliceArray.slice(1, 3);
const slicedArray2 = sliceArray.slice(4, 5);
console.log('%c%s', labelStyle, 'slice array:', sliceArray);
console.log(
  '%c%s',
  labelStyle,
  'sliced array1:',
  slicedArray1
);
console.log(
  '%c%s',
  labelStyle,
  'sliced array2:',
  slicedArray2
);
