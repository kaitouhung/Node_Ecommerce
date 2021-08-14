// so sánh toàn bộ obj: JSON.stringify,
// xử lý mảng obj, sắp xếp lại: dùng reduce + dần obj
// dùng reduce để trả về 1 giá trị, rồi lấy nó so sánh lại, reduce nhớ return
// khi dùng && || biểu thức có nghĩa thì sẽ ép kiểu về true
// trong xử mảng obj: thêm temp =[], concat 2 mảng vs nhau,  !(some , some)
// xét trường hợp phần tử trùng nhau trong mảng
// [...new Set([1,2,3,4,4])]
// chuỗi thì đưa lại thàng mảng rồi xử lý xong join lại
// khi làm với obj thì obj trỏ tới obj là xong

// ----------------------------------------01----------------------------
// https://anonystick.com/blog-developer/array-va-array-of-objects-voi-10-tinh-huong-xu-ly-2020072286274033

// const arr1 = [1, 2, 3, 4, 5, 8, 9], arr2 = [5, 6, 7, 8, 9];
// const intersection = arr1.filter(val =>arr2.includes(val))
// console.log(intersection)

// const arr1 = [{ name: 'name1', id: 1 }, { name: 'name2', id: 2 }, { name: 'name3', id: 3 }, { name: 'name5', id: 5 }];
// const arr2 = [{ name: 'name1', id: 1 }, { name: 'name2', id: 2 }, { name: 'name3', id: 3 }, { name: 'name4', id: 4 }, { name: 'name5', id: 5 }];

// const result = arr2.filter(val2 => arr1.some(val1 => {
//     return JSON.stringify(val1) === JSON.stringify(val2)
// }))

// console.log(result)

//-------------------------------------02-------------------------------

// const arr1 = [1, 2, 3, 4, 5, 8, 9];
// const arr2 = [5, 6, 7, 8, 9];
// const result = [...new Set(arr1.concat(arr2.filter(val2 => !arr1.includes(val2))))]

// console.log(result)

// const arr1 = [{ name: 'name1', id: 1 }, { name: 'name1', id: 1 }, { name: 'name2', id: 2 }, { name: 'name3', id: 3 }];
// const arr2 = [{ name: 'name1', id: 1 }, { name: 'name4', id: 4 }, { name: 'name5', id: 5 }];
// const arr3 = arr1.concat(arr2);
// const obj = []
// const result = arr1.reduce((cur, val) => {
//     console.log(obj[val.id] = true)
//     obj[val.id] ? '' : obj[val.id] = true && cur.push(val)
//     return cur
// }, [])
// console.log(result)

//-----------------------------------10-----------------------------

// [1, 2, 3].every(item => { return item > 2 })
// const arr = [{ age: 3 }, { age: 4 }, { age: 5 }]
// arr.every(item => { return item.age > 2 })

//------------------------------------09----------------------------------

// console.log([1, 2, 3].includes(4)) //false
// console.log([1, 2, 3].indexOf(4)) //-1
// console.log([1, 2, 3].find((item) => item === 3)) //3
// console.log([1, 2, 3].findIndex((item) => item === 3)) //2

// const flag = [{ age: 1 }, { age: 2 }].some(v => JSON.stringify(v) === JSON.stringify({ age: 2 }))
// console.log(flag)

//----------------------------------08------------------------------------

// [1, 2, 3, 4].reduce((cur, val) => {
//     return cur + val
// }, 0)

// const sum = [{ age: 1 }, { age: 2 }].reduce(function (prev, cur) {
//     return prev + cur.age;
// }, 0) //3
// console.log(sum)

//---------------------------------07------------------------------------

// const arr = [1, 2, 3, 4,2];
// let max = arr[0];
// for(let i = 1;i<arr.length;i++){
//     if(arr[i] >max) max=arr[i]
// }
// console.log(max)

// Math.max(...[1, 2, 3, 4]) //4
// Math.max.apply(this, [1, 2, 3, 4]) //4
// [1, 2, 3, 4].reduce((prev, cur, curIndex, arr) => {
//     return Math.max(prev, cur);
// }, 0) //4

// const arr = [{ id: 1, name: 'jack' }, { id: 2, name: 'may' }, { id: 3, name: 'shawn' }, { id: 4, name: 'tony' }]

// const result = Math.max(...arr.map(val =>val.id))
// console.log(result)
// const result = arr.sort((a,b)=>b.id - a.id)[0].id
// console.log(result)

// let max = arr[0].id;
// let temp =null;
// for (let i = 1; i < arr.length; i++){
//     if(arr[i].id > max){
//         max =arr[i].id
//         temp = arr[i]
//     }
// }
// console.log(temp)

//-------------------------------------------------------------06---------------

// console.log([1, 2, 3, 4].sort((a, b) => a - b)); // [1, 2,3,4] 升序
// console.log([1, 2, 3, 4].sort((a, b) => b - a)); // [4,3,2,1] 降序

// const arr1 = [{ name: "Rom", age: 12 }, { name: "Bob", age: 22 }].sort((a, b) => { return a.age - b.age })//升序
// const arr2 = [{ name: "Rom", age: 12 }, { name: "Bob", age: 22 }].sort((a, b) => { return -a.age + b.age })//降序
// console.log(arr2) // [{ name: 'Bob', age:22 }, { name: 'Rom', age: 12 }]
// console.log(arr1) // [ { name: 'Rom', age: 12 }, { name: 'Bob', age: 22 } ]

//-----------------------------------------------------------05------------------------

// const arr = [1, 2, 3, 3, 4, 4];
// let temp = [];
// arr.forEach(val =>{
//     if(temp.includes(val) === false){
//         temp.push(val)
//     }
// })
// console.log(temp)

// const arr = [1, 2, 3, 3, 4, 4];
// const temp = [];
// arr.forEach(val => !temp.includes(val) && temp.push(val))
// console.log(temp)

// console.log([...new Set([1,2,3,4,4])])

// const arr = [{ name: 'name1', id: 1 }, { name: 'name2', id: 2 }, { name: 'name3', id: 3 }, { name: 'name1', id: 1 }, { name: 'name4', id: 4 }, { name: 'name5', id: 5 }];
// const result = [];
// arr.forEach(val => !result.some(val1 => JSON.stringify(val1) === JSON.stringify(val)) && result.push(val));
// console.log(result)

//-------------------------------------------04-------------------------------------
// const arr1 = [1,1, 2, 3, 4, 5, 8, 9];
// const arr2 = [5, 6, 7, 8, 9];
// const arr3 = [...new Set(arr1.concat(arr2).filter(val => !(arr1.includes(val) && arr2.includes(val))))]
// console.log(arr3)

// let arr1 = [{ name: 'name1', id: 1 }, { name: 'name2', id: 2 }, { name: 'name2', id: 2 }, { name: 'name3', id: 3 }];
// let arr2 = [{ name: 'name1', id: 1 }, { name: 'name4', id: 4 }, { name: 'name5', id: 5 }];
// let arr3 = arr1.concat(arr2).filter(val => !(arr1.some(val1 => JSON.stringify(val1) === JSON.stringify(val)) && arr2.some(val2 => JSON.stringify(val2) === JSON.stringify(val))))
// console.log(arr3)

//---------------------------------------------03--------------------------------------
// const arr1 = [1, 2, 3, 4, 5, 8, 9]
// const arr2 = [5, 6, 7, 8, 9];
// const result = arr1.filter(val1 => !(arr2.includes(val1)))
// console.log(result)

// let arr1 = [{ name: 'name1', id: 1 }, { name: 'name2', id: 2 }, { name: 'name2', id: 2 }, { name: 'name3', id: 3 }];
// let arr2 = [{ name: 'name1', id: 1 }, { name: 'name4', id: 4 }, { name: 'name5', id: 5 }];
// let result = arr1.filter(val1 => !arr2.some(val2 => JSON.stringify(val2) === JSON.stringify(val1)))
// console.log(result)

//----------------------------------Xử lý chuỗi----cấu trúc lại chuỗi------

// const titleCase = (str) => {
//     return str.toLowerCase().split(' ').map(val => val[0].toUpperCase() + val.slice(1)).join(' ')
// }

// const result = titleCase("Tôi là một lập trình viên javascript");
// console.log(result)

//--------------------------------xử lý mảng obj với reduce------------------------

// const playerProfile = [
//     { name: "Ronaldo", team: "Juventus " },
//     { name: "Messi", team: "Barcelona" },
//     { name: "Mane", team: "Liverpool" }
// ];

// const getMapFromArray = (data) => {
//     return data.reduce((cur, val) => {
//         cur[val.name] = { team: val.name }
//         return cur
//     }, {})
// }

// const playerProfileModified = getMapFromArray(playerProfile)
// console.log(playerProfileModified);

//--------------------------------xử lý mảng obj vs reduce-----------------------
// const players = [
//     { id: 11, name: 'Messi', age: 33 },
//     { id: 12, name: 'Ronaldo', age: 34 },
//     { id: 13, name: 'Young', age: 35 },
//     { id: 14, name: 'Mane', age: 21 },
//     { id: 15, name: 'Salah', age: 24 },
// ]

// const convertArrayToObject = (array, key) => {
//     return array.reduce((cur, val) => {
//         cur[val[key]] = val;
//         return cur
//     }, {})

// }

// const playersModified = convertArrayToObject(players, 'id');
// console.log(playersModified);

//--------------------------------------------------chuoiDoiXung-------------

// const string = 'aarera'

// const DoiXung = (str) => {
//     let flag = true
//     for (let i = 0; i < str.length / 2; i++) {
//         str[i] !== str[str.length - 1 - i] ? flag = false : ''
//     }
//     return flag
// }

// const DoiXung = (str) => {
//     str = str.toLowerCase();
//     return str === str.split('').reverse().join('')
// }

// console.log(DoiXung(string))

//------------------------------------------Fibonasic------------------------

// const fibonacci = (num) => {
//     const arr = [0, 1];
//     for (let i = 2; i <= num; i++) {
//         const preFirst = arr[i - 1];
//         const preLast = arr[i - 2];
//         arr.push(preFirst + preLast)
//     }
//     return arr[num]
// }

// console.log(fibonacci(7))

//------------------------------------Đếm số nguyên âm ------------------------

// const nguyenAm = (string) => {
//     const arr = ['u', 'e', 'o', 'a', 'i'];
//     let count = 0
//     for (let i = 0; i < string.length; i++) {
//         if (arr.includes(string[i])) {
//             count++
//         }
//     }
//     return count
// }

// console.log(nguyenAm('hello'));

//------------------------------------loại bỏ falsy ra khỏi mảng --------------------

// console.log([1, 2, 3, "hello", undefined, null, false, 0].filter(Boolean))

//-----------------------------Dao Chữ----------------------

// const countString = (str) => {
//     const obj = {}
//     for (let i = 0; i < str.length; i++) {
//         if (obj[str[i]]) {
//             obj[str[i]] += 1;
//         } else {
//             obj[str[i]] = 1
//         }
//     }
//     return obj
// }

// const daoChu = (str1, str2) => {
//     if (str1.length !== str2.length) return false

//     str1 = str1.toLowerCase();
//     str1 = countString(str1);
//     str2 = str2.toLowerCase();
//     str2 = countString(str2);

//     for (let i in str1) {
//         if (str1[i] !== str2[i]) return false
//     }
//     return true
// }

// console.log(daoChu('hello', 'olleh'));

// const daoChu = (string1, string2) => {
//     string1 = string1.toLowerCase();
//     string2 = string2.toLowerCase();
//     return string1 === string2.split('').reverse().join('')
// }

// console.log(daoChu('hello', 'olleh'));

//-------------------------------------------lọc--------------------

//https://anonystick.com/blog-developer/query-trong-javascript-ban-co-roi-vao-truong-hop-nay-2020040959406438

// const players = [
//     { name: "huynh duc", job: "programmer", age: "18", hobby: "study" },
//     { name: "van quyen", job: "student", age: "8", hobby: "study" },
//     { name: "cong vinh", job: "teacher", age: "28", hobby: "play" },
//     { name: "anh duc", job: "programmer", age: "19", hobby: "sleep" },
//     { name: "cong phuong", job: "cook", age: "38", hobby: "paintting" }
// ]

// let filters = {
//     age: ["8", "18"],
//     hobby: ["play", "sleep"]
// }

// const searchKeysValues = (arr, filters) => {
//     const temp = [];
//     arr.forEach(val => {
//         for (let i in filters) {
//             for (let j of filters[i]) {
//                 if (j === val[i]) {
//                     temp.push(val)
//                 }
//             }
//         }
//     })
//     return temp
// }

// console.log(searchKeysValues(players, filters))

// let filters = {
//     name: "huynh duc",
//     hobby: "paintting"
// }

// // dùng some vs every
// const searchKeysValue = (arr, filter) => {
//     const field = Object.keys(filter);
//     return arr.filter(val => field.every(val1 =>filter[val1] === val[val1] ))
// }

// console.log(searchKeysValue(players, filters))

// const searchKeyValues = (arr, key, valueArr) => {
//     return arr.filter(val =>valueArr.includes(val[key]))
// }
// console.log(searchKeyValues(players, "job", ['programmer', 'student']))

// const searchKeyValue = (arr, key, value) => {
//     return arr.filter(val =>val[key] === value)
// }

// console.log(searchKeyValue(players, "job", "programmer"))

//-----------------------------------Countries---------------------------------------------

// const countries = {
//     China: 1371980000,
//     India: 1276860000,
//     'United States': 321786000,
//     Indonesia: 255461700,
//     Brazil: 204873000,
//     Pakistan: 190860000
// };

// let result = Object.keys(countries).filter(val => countries[val] <= 1000000000)
// console.log(result);

//  --------------------------- Xử lý bất đồng bộ vs map, filter, reduce,test3------------------

//https://anonystick.com/blog-developer/map-filter-and-reduce-voi-asyncawait-2020042532834108

//----------------------------------------Cấu trúc dữ liệu và giải thuật---------------------

//--------------------------------------- code basic -------------------------------------------------------

// const ktNguyenTo = (number) => {
//     if (number < 2) return false;
//     for (let i = 2; i <= Math.sqrt(number); i++) {
//         if (number % i === 0) return false
//     }
//     return true
// }

// const ktNguyenTo = (number) => {
//     if (number < 2) return false;
//     for (let i = 2; i < number; i++) {
//         if(i % 2===0)
//     }
// }

// // số nguyên tố lớn nhất nhỏ hơn n
// const SNNLN = (number) => {
//     for (let i = number - 1; i > 1; i--) {
//         if (ktNguyenTo(i) === true) return i
//     }
//     return 0
// }

// console.log(SNNLN(80))

// đảo mảng

// const arr = [1, 2, 3, 4, 5, 6, 3, 5]

// const DaoMang = (arr) => {
//     const temp = [];
//     for (let i = arr.length - 1; i >= 0; i--) {
//         temp.push(arr[i])
//     }
//     return temp
// }

// console.log(DaoMang(arr))

// const SoChinhPhuong = (number) => {
//     if (Math.sqrt(number) % 1 === 0){
//         return true
//     }else{
//         return false
//     }
// }

// console.log(SoChinhPhuong(3))

// const SoDaoNguoc = (number1, number2) => {
//     return String(number1) === String(number2).split('').reverse().join('');
// }

// console.log(SoDaoNguoc(12345,54321))

// test ----------------------------------
function asyncThing(value) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(value), 5000);
  });
}

function main() {
  return Promise.all([1, 2, 3, 4].map((value) => asyncThing(value)));
}

main()
  .then((values) => {
    const result = values.map((value) => value * 2);
    console.log(result);
  })
  .catch((err) => console.error(err));

// async function main() {
//   return [1, 2, 3, 4].map(async (value) => {
//     const v = await asyncThing(value);
//     return v * 2;
//   });
// }

// function main() {
//   return Promise.all(
//     [1, 2, 3, 4].map((val) => {
//       return asyncThing(val);
//     })
//   );
// }

// main()
//   .then((v) => console.log(v))
//   .catch((err) => console.error(err));
