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
console.log('%c%s', labelStyle, 'reverse:', reverseArray.reverse());

console.log('%c%s', taskLabelStyle, 'Task 3 PUSH');
const pushArray = new MyArray(1, 2, 3);
console.log('%c%s', labelStyle, 'before:', pushArray);
const tryingToPush = [4, [5], new MyArray(6)];
console.log('%c%s', labelStyle, 'trying to push:', tryingToPush);
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
console.log('%c%s', labelStyle, 'shifted element:', shiftedItem);
console.log('%c%s', labelStyle, 'shifted:', shiftArray);

console.log('%c%s', taskLabelStyle, 'Task 6 POP');
const popArray = new MyArray('js', 'css', 'html');
console.log('%c%s', labelStyle, 'before:', popArray);
const popedItem = popArray.pop();
console.log('%c%s', labelStyle, 'shifted element:', popedItem);
console.log('%c%s', labelStyle, 'shifted:', popArray);

console.log('%c%s', taskLabelStyle, 'Task 7-8 SLICE');
const sliceArray = new MyArray(1, 2, 3, 4, 5);
const slicedArray1 = sliceArray.slice(1, 3);
const slicedArray2 = sliceArray.slice(4, 5);
console.log('%c%s', labelStyle, 'slice array:', sliceArray);
console.log('%c%s', labelStyle, 'sliced array1:', slicedArray1);
console.log('%c%s', labelStyle, 'sliced array2:', slicedArray2);

console.log('%c%s', taskLabelStyle, 'Task 9-12 SPLICE');
const spliceArray1 = new MyArray(1, 2, 3, 4, 5);
console.log('%c%s', labelStyle, 'splice array1:', spliceArray1);
const splecedItems1 = spliceArray1.splice(1, 2);
console.log('%c%s', labelStyle, 'spliced array1:', spliceArray1);
console.log('%c%s', labelStyle, 'spliced items1:', splecedItems1);
const spliceArray2 = new MyArray(1, 2, 3, 4, 5);
console.log('%c%s', labelStyle, 'splice array2:', spliceArray2);
const splecedItems2 = spliceArray2.splice(1, 3);
console.log('%c%s', labelStyle, 'spliced array2:', spliceArray2);
console.log('%c%s', labelStyle, 'spliced items2:', splecedItems2);
const spliceArray3 = new MyArray(1, 2, 3, 4, 5);
console.log('%c%s', labelStyle, 'splice array3:', spliceArray3);
spliceArray3.splice(3, 0, ['a', 'b', 'c']);
console.log('%c%s', labelStyle, 'spliced array3:', spliceArray3);
const spliceArray4 = new MyArray(1, 2, 3, 4, 5);
console.log('%c%s', labelStyle, 'splice array4:', spliceArray4);
spliceArray4.splice(5, 0, 'e');
spliceArray4.splice(4, 0, 'c');
spliceArray4.splice(1, 0, 'a', 'b');
console.log('%c%s', labelStyle, 'spliced array4:', spliceArray4);

console.log('%c%s', taskLabelStyle, 'Task 13 SORT');
const sortArray = new MyArray(3, 4, 1, 2, 7);
console.log('%c%s', labelStyle, 'before:', sortArray);
console.log('%c%s', labelStyle, 'after:', sortArray.sort());

console.log('%c%s', taskLabelStyle, 'Task 14 Object.keys()');
const t14Obj = { js: 'test', jq: 'hello', css: 'world' };
console.log('%c%s', labelStyle, 'object:', t14Obj);
const t14KeysArr = Object.keys(t14Obj);
console.log('%c%s', labelStyle, 'keys array:', t14KeysArr);
