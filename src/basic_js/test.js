// trong javascript function, arr, string đều là object
// không có gì thì thừa kế tới Object mặc định của javascript
// instance

// so sánh toàn bộ obj: JSON.stringify,
// xử lý mảng obj, sắp xếp lại: dùng reduce + dần obj
// dùng reduce để trả về 1 giá trị, rồi lấy nó so sánh lại
// khi dùng && || biểu thức có nghĩa thì sẽ ép kiểu về true

// Truthy, Falsy : ép kiểu về Boolean trả về true hoặc false, falsy: !value

// &&: tất cả là Truthy thì return toán hạng cuối cùng, 1 trong các toán trạng falsy return toán hạng đó

// || :  tất cả là Falsy thì return toán hạng cuối cùng, 1 trong các toán trạng Truthy return toán hạng đó

//---------------------------object -------------------------------------------------------------------

//khi tạo obj: trong reducer: const obj = { [val["name"]]: 1}

// Object.keys, Object.assign

// const obj = {
//   name: "Hung",
//   age: 12,
//   language: "English"
// }

// for (let i in obj) {
//   console.log(obj[i])   => i: "name", "age", "language"
// }

// class Point{
//     constructor(x,y){
//         this.x = x,
//         this.y =y
//     }
// }
// class Line{
//     constructor(pointA, pointB){
//         this.pointA = pointA,
//         this.pointB = pointB
//     }

//     getDistance(){
//         let dx= this.pointA.x - this.pointB.x;
//         let dy= this.pointA.y - this.pointB.y;
//         return  Math.sqrt(Math.pow(dx,2)+Math.pow(dy,2));
//     }
// }
// let point1 = new Point(0,0);
// let point2 = new Point(0,1);
// let line1 = new Line(point1, point2);
// let test = line1.getDistance();
// console.log(test);

//------------------------ES6-----------------------------------------------------------------

//rest params
// const print = (...numbers) => {
//   numbers.forEach((x) => console.log(x));
// };

// print(233, 222, 333, 11);

//destructoring
// let [a,b]=[1,2]
// console.log(a+" and "+b);
// const myProfile = {
//     name: "Hackagon",
//     age: 23
// }
// let {name,age}=myProfile
// let name = myProfile.name;
// let age = myProfile.age;
// console.log(name+" and "+age);

//------------------------Arr---------------------------------------------------------------
let students = [
  { fullName: 'A', age: 12 },
  { fullName: 'B', age: 11 },
  { fullName: 'C', age: 15 },
  { fullName: 'A', age: 15 },
];

//Hàm find: trả về phần tử , findIndex: trả về chỉ mục, push, pop, shift, unshift

// let infoUserFind = students.find((student) => {
//   return student.fullName === 'A';
// });
// console.log(infoUserFind);

// let infoUserFindIndex = students.findIndex((student) => {
//   return student.fullName === 'A';
// });
// console.log({ infoUserFindIndex });

// students.push({fullName:'D',age:20})
// console.log(students);

//không làm ảnh hưởng tới mảng cũ: JSON.parse(JSON.stringify())
// cạm bẫy object lồng nhau phải dùng JSON.parse
// const map = JSON.parse(JSON.stringify(students)).map((student)=>{
//     student.age = 2019 - student.age;
//     return student
// })

// const map = students.map((student) => {
//   student.age = 2019 - student.age;
//   return student;
// });
// console.log(map);
// console.log(students);
// console.log(map === students);

// let map = [...students]
// let map1 = map.map((student)=>{
//         student.age = 2019 - student.age;
//         return student
//     })
// console.log({students,map1});

//spred operator
// let myThings = ['laptop', 'phone']
// myThings.push('mouse')
// let myStuffs = [...myThings,'destop']
// console.log("Mythings",myThings);
// console.log("MyStuffs",myStuffs);

// let myProfile ={
//     name: "Hackagon",
//     job: "lectures"
// }

// let newProfile = {...myProfile,age: 20}
// myProfile.age = 21;
// console.log(myProfile);
// console.log(newProfile);

// const a = {
//     languages: {
//       vi: 'Xin chào'
//     }
//   }
//   let b = {...a}
//   b.languages.vi = 'Chao xìn'
//   console.log(b.languages.vi) // Chao xìn
//   console.log(a.languages.vi) // Chao xìn

//filter, some, every: some trả về 1 đối tượng là true, every: nhiều đối tượng, find trả về đối tượng đầu tiên, filter trả về mảng và chạy hết
// let filter = students.filter((student) => {
//     return student.age >11
// })
// console.log({filter});

//hàm slice: không thay đổi mảng , lấy từ vị trí bắt đầu tới vị trí kết thúc ,slice(3,5) thì vị trí thứ 3 và thứ 4,
// nếu có 1 phần từ thì từ vị trí đó tới cuối

// hàm splice thay đổi mảng cũ": lấy vị trí bắt đầu và từ vị trí đó cộng thêm bao nhiêu phần tử

//hàm forEach: không hỗ trợ async await , for in , for of

// let forEach = students.forEach((student,index)=>{
//     console.log(index);
//     console.log("Đối tượng là: ",student);
// })
// console.log(forEach);

// for (let index in students) {
//   console.log(students[index]);
// }

//reduce
// let total = students.reduce((a,b)=>{
//     return a+b.age;
// },0)

// console.log(total);

// const arr = [1, 2, 3, 4, 5];
// let B = arr.join(' ');

// console.log(B === '12345');
// console.log(B);
// console.log(arr);

// const json ={
//     fullName: "Hung",
//     age: 20
// }

// console.log(JSON.stringify(json));

// const arr = [1, 2, 3, 5, 6, 7];
// const arr1 = [8, 9];
// console.log([...arr, ...arr1]);

// console.log(arr.concat(arr1))

// const a = {
//   name: 'Hung',
// };

// const b = {
//   name: 'Hieu',
// };

// console.log(a === b);

// const arr = [1, 3, 5, 0, 1, 9, 15, 11];

// const b = arr.map((x) => x * 2);

// const b = arr.map((x) => x * 2);

// const b = arr.sort((a, b) => {
//   return a - b;
// });

// console.log(arr === b);

// console.log(arr.includes(1));

//-----------------------------STRING------------------------------------------

// let temp = undefined;

// if(temp){
//     console.log("A");
// }else{
//     console.log("B");
// }

//Indexof vs last indexof
let str = ' mern stack 2410 ';

//cộng chuỗi và chiều dài: str.concat(), str: + , str.length

//phần tử thứ 2 của chuỗi: str[0]
// let indexStr = str.indexOf('stack');
// console.log(indexStr);

// includes: trả về true or false
// let includes = str.includes('stacks');
// console.log(includes);

//trim: xóa khoảng trắng ở đầu hay cuối chuổi , replace
// let trim = str.trim();
// let replace = str.replace('mern', 'MERN');
// console.log(replace);

//toUpperCase, tolowerCase
// let Up= str.toUpperCase();
// let Down = str.toLowerCase();

//split: cắt các ký tự của chuỗi thành mảng
// let Split = str.split(' ');
// console.log(Split);

//slice: cắt chuỗi: vị trí bắt đầu, vị trí kết thúc
// let Slice = str.slice(5, 11);
// console.log(Slice);

// let temp = 'mern stack mern 2410';
// let replaceAll = (str, oldKey, newKey) => {

//     while(str.includes(oldKey)){
//         str= str.replace(oldKey,newKey)
//     }
//     return str;
// }

// let Result = replaceAll(temp,'mern','FULL')
// console.log("Temp la:",temp);
// console.log("Result la:",Result);

//-----------JSON-------------------
// Là định dạng dữ liệu (chuỗi ): thể hiện bằng các kiểu string, number, boolean, null, obj,
// let a = {
//   name: 'Hung',
//   age: 12,
// };
// console.log(typeof JSON.stringify(a));
