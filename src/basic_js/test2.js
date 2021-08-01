// const string = 'arera'

// const chuoiDoiXung = (string) => {
//     let flag = true;
//     for (let i = 0; i < string.length; i++) {
//         if (string[i] !== string[string.length - i - 1]) {
//             flag = false;
//         }
//     }
//     if (flag === true) return true;
//     return false;
// }

// const chuoiDoiXung = (string) =>{
//     string =string.toLowerCase();
//     return string === string.split('').reverse().join('');
// }
// console.log(chuoiDoiXung(string));

// const FizzBuzz = (number) => {
//     for (let i = 1; i <= number; i++) {
//         if (i % 3 === 0) {
//             console.log("Fizz")
//         } else if (i % 5 === 0) {
//             console.log("Buzz")
//         } else if (i % 3 == 0 & i % 5 == 0) {
//             console.log("FizzBuzz")
//         } else {
//             console.log(i)
//         }
//     }
// }

// FizzBuzz(5)

// const fibonacci = num => {
// 	const result = [0, 1]

// 	for (let i = 2; i <= num; i++) {
// 		const prevNum1 = result[i - 1]
// 		const prevNum2 = result[i - 2]
//                 result.push(prevNum1 + prevNum2)
//             }

// 	return result[num]
// }

// console.log(fibonacci(7));

// const fibonaci = (number) => {
// 	let arr = [0, 1];

// 	for (let i = 2; i <= number; i++) {
// 		const preNum1 = arr[i - 1];
// 		const preNum2 = arr[i - 2];
// 		arr.push(preNum1 + preNum2)
// 	}

// 	return arr[number]

// }

// console.log(fibonaci(7));

// const nguyenAm = (string) => {

// 	const arr = ['u', 'e', 'o', 'a', 'i'];
// 	let count = 0
// 	for (let i = 0; i <= string.length; i++) {
// 		if (arr.includes(string[i])) {
// 			count++;
// 		}
// 	}
// 	return count

// }
// console.log(nguyenAm('hello'));

//hello

// const addObj = (string) => {
// 	let obj = {}
// 	for (let i = 0; i < string.length; i++) {
// 		if (obj[string[i]]) {
// 			obj[string[i]] = obj[string[i]] + 1;
// 		} else {
// 			obj[string[i]] = 1;
// 		}
// 	}
// 	return obj
// }
// const daoChu = (string1, string2) => {
// 	string1 = string1.toLowerCase();
// 	string2 = string2.toLowerCase();
// 	if (string1.length !== string2.length) return false;
// 	string1 = addObj(string1);
// 	string2 = addObj(string2);
// 	for (let i in string1) {
// 		if(string1[i] !==string2[i])
// 		return false
// 	}
// 	return true
// }

// console.log(daoChu('hello','bye'));

// const NumberToString = [1,2,3].map(String);
// console.log(NumberToString);
// const StringToNumber =["1","2","3"].map(Number)
// console.log(StringToNumber);

// const JsonToObj = JSON.stringify({name:'Hung',age:12})
// const ObjToJson = JSON.parse('{ "name":"John", "age":30, "city":"New York"}')
// console.log(ObjToJson);

// const objectToQueryString = (obj) => Object.keys(obj).map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`).join('&');
// console.log(objectToQueryString({ name: 'Anonystick', age: 18, address: 'VietNam' }))

// const arr1 = [1, 2, 3];
// const arr2 = [1, 2, 4];
// const result = arr1.filter(val1 => arr2.includes(val1))
// console.log(result);

// const detectDeviceType = () =>/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|OperaMini/i.test(navigator.userAgent) ? 'Mobile' : 'Desktop';

// const toDecimalMark = num =>num.toLocaleString('en-US');
// console.log(toDecimalMark(12305030388.9087));

// class Course {
//     constructor(name, price) {
//         this.name = name;
//         this.price = price
//     }
//     getName() {
//         return this.name
//     }
//     getPrice() {
//         return this.price
//     }
// }

// class CourseCha extends Course {
//     constructor(name, price, SL) {
//         super(name, price);
//         this.SL = SL;
//     }
// }

// const js = new CourseCha('PHP',1000,2);
// const name =js.getName();
// console.log(name);

// const obj={
//     api: 'lếu lều',
//     version: 'v1'
// }

// const obj2 ={
//     ...obj,
//     orther:1
// }
// console.log(obj2);

//------------------------------------------- xóa trùng lặp trong mảng
// const arr = [1, 1, 2, 3, 4];
// let result = [];
// arr.forEach(val => {
//     result.includes(val) === false && result.push(val)
// });
// console.log(result);

// const arr =[1,1,2,3,4,5];
// console.log([...new Set(arr)]);

//----------------------------------------- loại bỏ falsy ra khỏi mảng
// const arr =[1,2,3,"hello",undefined,null,false,0];
// console.log(arr.filter(Boolean));
//---------------------------còn chuyển mảng number - string .filter(String, Number)

//---------------------------merge dùng spred operator
// const person = { name: 'David Walsh', gender: 'Male' };
// const tools = { computer: 'Mac', editor: 'Atom' };
// const attributes = { handsomeness: 'Extreme', hair: 'Brown', eyes: 'Blue' };
// const result = {...person,...tools,...attributes}
// console.log(result);

//----------------------------- tạo obj không chứa hasOwnProperty của Obj
// let obj = {}
// console.log(obj.__proto__);
// console.log(obj.hasOwnProperty);

// let obj1 =Object.create({})
// console.log(obj1.__proto__);
// console.log(obj1.hasOwnProperty);

// let obj2 = Object.create(null)
// console.log(obj2.__proto__);
// console.log(obj2.hasOwnProperty);

//---------------------------Require Function Parameters

// const isRequired = () =>{throw new Error('param is required');};
// const hello = (name = isRequired()) =>console.log(`hello ${name}`);
// hello('David')

//---------------Get Query String Parameters
// Assuming "?post=1234&amp;action=edit"

// var urlParams = new URLSearchParams(window.location.search);

// console.log(urlParams.has('post')); // true
// console.log(urlParams.get('action')); // "edit"
// console.log(urlParams.getAll('action')); // ["edit"]
// console.log(urlParams.toString()); // "?post=1234&amp;action=edit"
// console.log(urlParams.append('active', '1')); // "?post=1234&amp;action=edit&amp;active=1"

//----------Khái niệm Closures cho phép truy cập các biến prive ở cha, trả về 1 hàm và cộng dồn khi gọi liên tiếp
// function newCounter(){
//     var count = 0

//     return function(){
//       count += 1
//       return count
//     }
//   }

//   var counter = newCounter()

//   console.log(counter())
//   // Output: 1

//   console.log(counter())
//   // Output: 2

//   console.log(counter())

// const arr = [1, 2, 2, 3, 4, 5, 6]

// const Search = (x, arr) => {
//     const n = arr.length;
//     let left = 0;
//     let right = n - 1;
//     while (left <= right) {
//         let mid = parseInt((left + right) / 2);
//         if (arr[mid] === x) {
//             return mid
//         } else if (x < arr[mid]) {
//             right = mid - 1;
//         } else if (x > arr[mid]) {
//             left = mid + 1
//         }
//     }
//     return false;
// }

// console.log(Search(2, [1, 2, 3, 4, 5]));

// const arr = [1, 2, 2, 3, 4, 5, 6]
// const Search = (x,arr) =>{s
//     for(let i =0;i<arr.length;i++){
//         if(arr[i] === x){
//             return i
//         }
//     }
//     return false
// }
// console.log(Search(5,arr));

// let arr = [1, 4, 5, 3, 2, 4, 1];

// const SelectionSort = (arr) => {
//     for (let i = 0; i < arr.length - 1; i++) {
//         for (j = i + 1; j < arr.length; j++) {
//             if (arr[i] > arr[j]) {
//                 let temp = arr[i];
//                 arr[i] = arr[j];
//                 arr[j] = temp
//             }
//         }
//     }
//     return arr;
// }

// console.log(SelectionSort(arr));

// let arr = [1, 5, 3, 4, 7, 7, 8];

// const filterDupplicate = (arr) => {
//     let result = [];
//     arr.filter(val => result.includes(val) === false && result.push(val))
//     return result
// }

// // console.log(filterDupplicate([1, 5, 3, 4, 7, 7, 8]));

// const SearchN = (arr, x) => {
//     arr = filterDupplicate(arr);
//     arr = arr.sort((a, b) => b - a);
//     return arr[x - 1];
// }

// const SearchIndex = (arr, x) => {
//     let resultNew = SearchN(arr,x);
//     let result =[];
//     for(let i = 0; i <arr.length;i++){
//         if(arr[i] === resultNew){
//             result.push(i)
//         }
//     }
//     return result;
// }

// console.log(SearchIndex([1, 5, 3, 4, 7, 7, 8],3));
