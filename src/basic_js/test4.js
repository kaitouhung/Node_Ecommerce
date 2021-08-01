//---------------------------
// 01 trả về el chung

// const arr1 = [1, 2, 3, 4, 5, 8, 9], arr2 = [5, 6, 7, 8, 9];
// console.log(arr1.filter(el => arr2.indexOf(el) > -1));

// const arr1 = [{ name: 'name1', id: 1 }, { name: 'name2', id: 2 }, { name: 'name3', id: 3 }, { name: 'name5', id: 5 }];
// const arr2 = [{ name: 'name1', id: 1 }, { name: 'name2', id: 2 }, { name: 'name3', id: 3 }, { name: 'name4', id: 4 }, { name: 'name5', id: 5 }];

// console.log(arr2.filter(val2 => arr1.some(val1 => JSON.stringify(val1) === JSON.stringify(val2))));

// 10 tìm el có trong mảng

// const arr = [1, 2, 3]
// console.log(arr.filter(val => val >=2));
// console.log(arr.some(val => val >=2));
// console.log(arr.every(val => val >=2));

// const arr = [{ age: 3 }, { age: 4 }, { age: 5 }]
// arr.every(item => { return item.age > 2 }) // true

// 09 - check điều kiện phù hợp của arr

// console.log([1, 2, 3].includes(4)) //false
// console.log([1, 2, 3].indexOf(4)) //-1
// console.log([1, 2, 3].find((item) => item === 3)) //3
// console.log([1, 2, 3].findIndex((item) => item === 3)) //2

// const flag = [{age:1},{age:2}].some(v=>JSON.stringify(v)===JSON.stringify({age:2}))
// console.log(flag)

// 08 - Tìm tổng
// console.log([1, 2, 3, 4].reduce((pre, cur) => {
//   return pre + cur
// }, 0));

// const sum = [{age:1},{age:2}].reduce(function (prev, cur) {
//   return prev + cur.age;
// }, 0) //3
// console.log(sum)

// 07 - Tìm max element trong array và array object
// const arr = [1, 2, 3, 4]
// console.log(Math.max(...arr));
// console.log(arr.reduce((pre,cur)=>{
//   return Math.max(pre,cur)
// },0));
// const arr = [{ id: 1, name: 'jack' }, { id: 2, name: 'may' }, { id: 3, name: 'shawn' }, { id: 4, name: 'tony' }]
// const result = arr.sort((a, b) => b.id - a.id)[0].id;
// console.log(result);

// -06 sắp xếp dùng sort
// console.log([1, 2, 3, 4].sort((a, b) => a - b)); // [1, 2,3,4] 升序
// console.log([1, 2, 3, 4].sort((a, b) => b - a)); // [4,3,2,1] 降序

// const arr1 = [{ name: "Rom", age: 12 }, { name: "Bob", age: 22 }].sort((a, b) => { return a.age - b.age })//升序
// const arr2 = [{ name: "Rom", age: 12 }, { name: "Bob", age: 22 }].sort((a, b) => { return -a.age + b.age })//降序
// console.log(arr2) // [{ name: 'Bob', age:22 }, { name: 'Rom', age: 12 }]
// console.log(arr1) // [ { name: 'Rom', age: 12 }, { name: 'Bob', age: 22 } ]

// -05 sao chép arr spred
// const arr = [1, 2, 3, 3, 4, 4];
// const result = [];
// arr.forEach(el =>result.indexOf(el)===-1 && result.push(el))
// console.log(result);

// const arr = [{ name: 'name1', id: 1 }, { name: 'name2', id: 2 }, { name: 'name3', id: 3 }, { name: 'name1', id: 1 }, { name: 'name4', id: 4 }, { name: 'name5', id: 5 }];

// console.log(...arr);
// const result = [];
// arr.forEach(el =>result.every(result =>JSON.stringify(result) !== JSON.stringify(el)) && result.push(el))
// console.log(result);

// -03    Return về một array chứa tất cả những elements của array thứ nhất không trùng với array thứ 2
// const arr1 = [1, 2, 3, 4, 5, 8, 9]
// const arr2 = [5, 6, 7, 8, 9];
// console.log(arr1.filter(val1 => !arr2.includes(val1)));

// let arr1 = [{ name: 'name1', id: 1 }, { name: 'name2', id: 2 }, { name: 'name3', id: 3 }];
// let arr2 = [{ name: 'name1', id: 1 }, { name: 'name4', id: 4 }, { name: 'name5', id: 5 }];
// const result = arr1.filter(val1 =>!arr2.some(val2 =>JSON.stringify(val2)===JSON.stringify(val1)))
// console.log(result);

// -04 Return về một array chứa tất cả những elements không trùng giữa hai Array
// const arr1 = [1, 2, 3, 4, 5, 8, 9]
// const arr2 = [5, 6, 7, 8, 9];
// const arr3 = arr1.concat(arr2);
// const result =arr3.filter(val3 => !(arr1.includes(val3) && arr2.includes(val3)))
// console.log(result);

// const arr1 = [{ name: 'name1', id: 1 }, { name: 'name2', id: 2 }, { name: 'name3', id: 3 }];
// const arr2 = [{ name: 'name1', id: 1 }, { name: 'name4', id: 4 }, { name: 'name5', id: 5 }];
// const arr3 = arr1.concat(arr2);
// const result = arr3.filter(val3 => !(arr1.some(val1 =>JSON.stringify(val1) === JSON.stringify(val3)) && arr2.some(val2 =>JSON.stringify(val2) === JSON.stringify(val3))))
// console.log(result);

// let arr1 = [{ name: 'name1', id: 1 }, { name: 'name2', id: 2 }, { name: 'name3', id: 3 }];
// let arr2 = [{ name: 'name1', id: 1 }, { name: 'name4', id: 4 }, { name: 'name5', id: 5 }];
// let arr3 = arr1.concat(arr2);
// let result = arr3.filter(function (v) {
//   return arr1.every(n => JSON.stringify(n) !== JSON.stringify(v)) || arr2.every(n => JSON.stringify(n) !== JSON.stringify(v))
// })
// console.log(result);

//02 -Return về một array chứa tất cả những elements của hai array không trùng lặp

// const arr1 = [1, 2, 3, 4, 5, 8, 9, 1]
// const result = []
// arr1.forEach(val1 => result.includes(val1) === false && result.push(val1))
// console.log(result);

// const arr1 = [1, 2, 3, 4, 5, 8, 9,1]
// const arr2 = [5, 6, 7, 8, 9];
// const result =arr1.concat(arr2.filter(val2 =>!arr1.includes(val2)))
// console.log(result);

// const arr1 = [{ name: 'name1', id: 1 }, { name: 'name2', id: 2 }, { name: 'name3', id: 3 }];
// const arr2 = [{ name: 'name1', id: 1 }, { name: 'name4', id: 4 }, { name: 'name5', id: 5 }];

// const result = arr1.concat(arr2.filter(val2 =>  ))

// const arr1 = [{ name: 'name1', id: 1 }, { name: 'name2', id: 2 }, { name: 'name3', id: 3 }, { name: 'name1', id: 1 }];
// const arr2 = [{ name: 'name1', id: 1 }, { name: 'name4', id: 4 }, { name: 'name5', id: 5 }];
// const temp = [];
// arr1.forEach(val1 => temp.some(valt => JSON.stringify(valt) === JSON.stringify(val1)) === false && temp.push(val1))

// const result = temp.concat(arr2.filter(val2 => !arr1.some(val1 => JSON.stringify(val1) === JSON.stringify(val2))))
// console.log(result);

//-----Reduce chạy từng đợt kiểm tra, dựa vào id và biến temp
// const arr1 = [{ name: 'name1', id: 1 }, { name: 'name2', id: 2 }, { name: 'name3', id: 3 }];
// const arr2 = [{ name: 'name1', id: 1 }, { name: 'name4', id: 4 }, { name: 'name5', id: 5 }];
// const arr3 = arr1.concat(arr2)
// let result = []
// let obj = []
// result = arr3.reduce((pre, cur) => {
//   console.log(obj);
//   obj[cur.id] == true ? '' : obj[cur.id] = true && pre.push(cur)
//   return pre
// }, [])
// console.log(result);

// let arr = [1, 3, 5, 2, 1]
// arr = arr.sort((a, b) => b - a)
// let result;

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] != arr[0]) {
//     result = arr[i];
//     break;
//   }

// };
// console.log(result);

// let arr = [1,2,3,3,4,4];

// const search = (x)=>{
//   let index
//   for(let i =0;i<arr.length;i++){
//     if(arr[i]===x){
//       index = i;
//       return index
//     }
//   }
// }

// console.log(search(3));

// const Search = (x, arr) => {
//   let result = [];
//   for (let i in arr) {
//     if (arr[i] === x) {
//       result.push(i)
//     }
//   }
//   return result.map(Number);
// }

// console.log(Search(3,[1,2,3,4,3]));

// const arr = [1,2,4,5,]

// console.log(arr.indexOf(1));

//----------------------------------------------------

// const cau30 = (arr1, arr2) => {
//   let result = [];
//   result = arr1.filter(val => arr2.includes(val));
//   result = result.sort((a, b) => a - b);
//   return result;
// }

// console.log(cau30([1,3,2,4],[1,3,2]));

// const a = null;
// if(a)console.log("hihi");
// else console.log("huhu");
// const a =12;
// if(a ==1){
//   console.log('hihii');
// }else{
//   console.log('huhuh');
// }

// let a =1;
// let b =++a;
// console.log("a ",a);
// console.log("b ",b);

// setTimeout(() => {
//   let a = Math.random(0 * 10);
//   if (a % 2 == 0) {
//     console.log("Từ bỏ");
//   } else {
//     console.log("Chấp nhận ");
//   }

// }, 10000)

//------------------------------------reduce-------------------------
// const Accuumulation = (...vals) => {
//   return vals.reduce((pre, val) => {
//     return pre + val;
//   }, 0)
// }

// console.log(Accuumulation(1,2,3,4,5))

// function titleCase(str) {
//     // Đưa về hết chữ thường
//     let lowerCaseString = str.toLowerCase()
//     // "tôi là một lập trình viên javascript"

//     // Đưa về array
//     let splitString = lowerCaseString.split(' ')
//     // ["tôi", 'là', 'một', 'lập', ...]

//     //biển đổi array thành viết hoa với ký tự đầu tiên
//     let titleCaseArray = splitString.map((word) => {
//         return word[0].toUpperCase() + word.slice(1)
//     })
//     //["Tôi", 'Là', 'Một', 'Lập', ...]

//     // Nối lại với nhau
//     let titleCaseSentence = titleCaseArray.join(' ')
//     // "Tôi Là Một Lập Trình Viên Javascript"

//     // return
//     return titleCaseSentence

// }

// const titleCase =(str)=>{
//     return str.toLowerCase().split(" ").map(val =>{
//         return val[0].toUpperCase()+val.slice(1)
//     }).join(" ")
// }

// const result = titleCase("Tôi là một lập trình viên javascript");
// console.log(result)
