'use strict';
{
  const logger = new Logger('darkcyan');

  logger.header('WORKING WITH ARRAY METHODS');

  logger.title('Task 1 CONCAT');
  const concatArray1 = new MyArray([1, 2, 3]);
  const concatArray2 = new MyArray(4, 5, 6);
  logger.log('trying to concat array 1:', concatArray1);
  logger.log('trying to concat array 2:', concatArray2);
  const concatedArray = new MyArray().concat(
    concatArray1,
    concatArray2
  );
  logger.log('concat:', concatedArray);

  logger.title('Task 2 REVERSE');
  const reverseArray = new MyArray(1, 2, 3);
  logger.log('before:', reverseArray);
  logger.log('reverse:', reverseArray.reverse());

  logger.title('Task 3 PUSH');
  const pushArray = new MyArray(1, 2, 3);
  logger.log('before:', pushArray);
  const tryingToPush = [4, [5], new MyArray(6)];
  logger.log('trying to push:', tryingToPush);
  pushArray.push(...tryingToPush);
  logger.log('after push:', pushArray);

  logger.title('Task 4 UNSHIFT');
  const unshiftArray = new MyArray(1, 2, 3);
  logger.log('before:', unshiftArray);
  const tryingToUnshift = [4, [5], new MyArray(6)];
  logger.log('trying to unshift:', tryingToUnshift);
  unshiftArray.unshift(...tryingToUnshift);
  logger.log('unshift:', unshiftArray);

  logger.title('Task 5 SHIFT');
  const shiftArray = new MyArray('js', 'css', 'html');
  logger.log('before:', shiftArray);
  const shiftedItem = shiftArray.shift();
  logger.log('shifted element:', shiftedItem);
  logger.log('shifted:', shiftArray);

  logger.title('Task 6 POP');
  const popArray = new MyArray('js', 'css', 'html');
  logger.log('before:', popArray);
  const popedItem = popArray.pop();
  logger.log('shifted element:', popedItem);
  logger.log('shifted:', popArray);

  logger.title('Task 7-8 SLICE');
  const sliceArray = new MyArray(1, 2, 3, 4, 5);
  const slicedArray1 = sliceArray.slice(1, 3);
  const slicedArray2 = sliceArray.slice(4, 5);
  logger.log('slice array:', sliceArray);
  logger.log('sliced array1:', slicedArray1);
  logger.log('sliced array2:', slicedArray2);

  logger.title('Task 9-12 SPLICE');
  const spliceArray1 = new MyArray(1, 2, 3, 4, 5);
  logger.log('splice array1:', spliceArray1);
  const splecedItems1 = spliceArray1.splice(1, 2);
  logger.log('spliced array1:', spliceArray1);
  logger.log('spliced items1:', splecedItems1);
  const spliceArray2 = new MyArray(1, 2, 3, 4, 5);
  logger.log('splice array2:', spliceArray2);
  const splecedItems2 = spliceArray2.splice(1, 3);
  logger.log('spliced array2:', spliceArray2);
  logger.log('spliced items2:', splecedItems2);
  const spliceArray3 = new MyArray(1, 2, 3, 4, 5);
  logger.log('splice array3:', spliceArray3);
  spliceArray3.splice(3, 0, ['a', 'b', 'c']);
  logger.log('spliced array3:', spliceArray3);
  const spliceArray4 = new MyArray(1, 2, 3, 4, 5);
  logger.log('splice array4:', spliceArray4);
  spliceArray4.splice(5, 0, 'e');
  spliceArray4.splice(4, 0, 'c');
  spliceArray4.splice(1, 0, 'a', 'b');
  logger.log('spliced array4:', spliceArray4);

  logger.title('Task 13 SORT');
  const sortArray = new MyArray(3, 4, 1, 2, 7);
  logger.log('before:', sortArray);
  logger.log('after:', sortArray.sort());

  logger.title('Task 14 Object.keys()');
  const t14Obj = { js: 'test', jq: 'hello', css: 'world' };
  logger.log('object:', t14Obj);
  const t14KeysArr = Object.keys(t14Obj);
  logger.log('keys array:', t14KeysArr);
}
