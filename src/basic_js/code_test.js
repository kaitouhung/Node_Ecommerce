//https://anonystick.com/blog-developer/array-va-array-of-objects-voi-10-tinh-huong-xu-ly-2020072286274033#t-7

//----------------------------------------------------------------------01
// const arr1 = [1, 2, 3, 4, 5, 8, 9],
//   arr2 = [5, 6, 7, 8, 9];

// const arr3 = arr1.filter((val) => arr2.includes(val));

// const arr1 = [
//   { name: 'name1', id: 1 },
//   { name: 'name2', id: 2 },
//   { name: 'name3', id: 3 },
//   { name: 'name5', id: 5 },
// ];
// const arr2 = [
//   { name: 'name1', id: 1 },
//   { name: 'name2', id: 2 },
//   { name: 'name3', id: 3 },
//   { name: 'name4', id: 4 },
//   { name: 'name5', id: 5 },
// ];

// const arr3 = arr2.filter((val2) =>
//   arr1.some((val1) => JSON.stringify(val1) === JSON.stringify(val2))
// );

//-------------------------------------------------------------------------03
// const arr1 = [1, 2, 3, 4, 5, 8, 9];
// const arr2 = [5, 6, 7, 8, 9];
// const arr3 = arr1.filter((val) => !arr2.includes(val));

// let arr1 = [
//   { name: 'name1', id: 1 },
//   { name: 'name2', id: 2 },
//   { name: 'name3', id: 3 },
// ];
// let arr2 = [
//   { name: 'name1', id: 1 },
//   { name: 'name4', id: 4 },
//   { name: 'name5', id: 5 },
// ];

// const arr3 = arr1.filter(
//   (val1) => !arr2.some((val2) => JSON.stringify(val2) === JSON.stringify(val1))
// );

// let result = arr1.filter(function (v) {
//   return arr2.every((n) => JSON.stringify(n) !== JSON.stringify(v));
// });

//----------------------------------------------------------04
// const arr1 = [1, 2, 3, 4, 5, 8, 9];
// const arr2 = [5, 6, 7, 8, 9];

// const arr3 = arr1
//   .concat(arr2)
//   .filter((val3) => !(arr1.includes(val3) && arr2.includes(val3)));

// let arr1 = [
//   { name: 'name1', id: 1 },
//   { name: 'name2', id: 2 },
//   { name: 'name3', id: 3 },
// ];
// let arr2 = [
//   { name: 'name1', id: 1 },
//   { name: 'name4', id: 4 },
//   { name: 'name5', id: 5 },
// ];

//ví dụ val3 = { name: 'name2', id: 2 }

// const arr3 = arr1.concat(arr3);
// const result = arr3.filter((val3) =>
//   arr1.every(
//     (val1) =>
//       JSON.stringify(val1) !== JSON.stringify(val3) ||
//       arr2.every((val2) => JSON.stringify(val2) !== val3)
//   )
// );

//----------------------------------------------------------------05
// const arr1 = [1, 2, 3, 1, 4, 5];

// const arr2 = [...arr1];
// const arr3 = JSON.parse(JSON.stringify(arr1));
// const arr4 = [];
// arr1.forEach((val) => !arr4.includes(val) && arr4.push(val));
// console.log(arr4);

// const arr = [
//   { name: 'name1', id: 1 },
//   { name: 'name2', id: 2 },
//   { name: 'name3', id: 3 },
//   { name: 'name1', id: 1 },
//   { name: 'name4', id: 4 },
//   { name: 'name5', id: 5 },
// ];

// const arr3 = [];
// arr.forEach(
//   (val) =>
//     !arr3.some((val3) => JSON.stringify(val3) === JSON.stringify(val)) &&
//     arr3.push(val)
// );

//-------------------------------------------------------06------

// console.log([1, 2, 3, 4].sort((a, b) => a - b));
// console.log([1, 2, 3, 4].sort((a, b) => b - a));

// const arr1 = [
//   { name: 'Rom', age: 12 },
//   { name: 'Bob', age: 22 },
// ].sort((a, b) => {
//   return a.age - b.age;
// });
// const arr2 = [
//   { name: 'Rom', age: 12 },
//   { name: 'Bob', age: 22 },
// ].sort((a, b) => {
//   return -a.age + b.age;
// });

//-----------------------------------------------------07
// Math.max(...[1, 2, 3, 4]) //4
// Math.max.apply(this, [1, 2, 3, 4]) //4
// [1, 2, 3, 4].reduce((prev, cur, curIndex, arr) => {
//    return Math.max(prev, cur);
// }, 0)

// const arr = [{ id: 1, name: 'jack' },{ id: 2, name: 'may' },{ id: 3, name: 'shawn' },{ id: 4, name: 'tony' }]
// const arr1 = Math.max.apply(Math, arr.map(item => { return item.id }))
// const arr2 = arr.sort((a, b) => { return b.id - a.id })[0].id
// console.log(arr1) // 4
// console.log(arr2) // 4

//----------------------------------------------------------08
// [1, 2, 3, 4, 5].reduce((pre, cur) => {
//   return a + b;
// }, 0);

// const sum = [{ age: 1 }, { age: 2 }].reduce(function (prev, cur) {
//   return prev + cur.age;
// }, 0);

//--------------------------------------------------------09

// console.log([1, 2, 3].includes(4));
// console.log([1, 2, 3].indexOf(4));
// console.log([1, 2, 3].find((item) => item === 3));
// console.log([1, 2, 3].findIndex((item) => item === 3));

// const flag = [{ age: 1 }, { age: 2 }].some(
//   (v) => JSON.stringify(v) === JSON.stringify({ age: 2 })
// );

//-----------------------------------------------------------10
// [1, 2, 3].every((item) => {
//   return item > 2;
// });

// const arr = [{ age: 3 }, { age: 4 }, { age: 5 }];
// arr.every((item) => {
//   return item.age > 2;
// });

//--------------------------------------------------------02
