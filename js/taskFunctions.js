'use strict';

const hasElem = (arr, str) => arr.includes(str);

const hasTwins = (arr) =>
  arr.filter((item, index) => item === arr[index + 1]).length > 0;

const randomArray = (size, min, max) =>
  Array(size)
    .fill(0)
    .map((e) => Math.round(Math.random() * (max - min) + min));

const extremum = (arr, mode) => {
  let buffer = arr[0];
  arr.forEach((item) => {
    if (mode === 'max' ? item > buffer : item < buffer) buffer = item;
  });
  return buffer;
};
const minValue = (arr) => extremum(arr, 'min');

const maxValue = (arr) => extremum(arr, 'max');

const averageValue = (arr) =>
  arr.reduce((prev, curr) => prev + curr) / arr.length;
