// const players = [
//     { name: "huynh duc", job: "programmer", age: "18", hobby: "study" },
//     { name: "van quyen", job: "student", age: "8", hobby: "study" },
//     { name: "cong vinh", job: "teacher", age: "28", hobby: "play" },
//     { name: "anh duc", job: "programmer", age: "19", hobby: "sleep" },
//     { name: "cong phuong", job: "cook", age: "38", hobby: "paintting" }
// ]

// const filters = {
//     age:[8,18],
//     hobby:["play","sleep"]
// }

// const findJob = (arr, filter) => {
//     let key = Object.keys(filter);
//     return arr.filter(val => key.some(k => val[k] === filter[k]))
// }

// console.log(findJob(players, filters))

// function searchKeysValue(lists, filters) {
//     let key = Object.keys(filters);
//     return resArr = lists.filter(item => key.find(k => item[k] == filters[k]))
// }
// let filters = {
//     name: "huynh duc",
//     hobby: "paintting"
// }
// console.log(searchKeysValue(players, filters))

// function searchKeysValues(lists, filters) {
//     let resArr = [];
//     lists.filter((item) => {
//         for (let i in filters) {
//             for (let j of filters[i]) {
//                 if (item[i] == j) {
//                     resArr.push(item)
//                 }
//             }
//         }
//     })
//     return resArr
// }

// const search = (arr, filter) => {
//     let result = [];
//     arr.filter(val =>{
//         for(let i in filter){
//             for(let j of filter[i]){
//                 if(val[i] ==j){
//                     result.push(val)
//                 }
//             }
//         }
//     })
//     return result
// }
// console.log(searchKeysValues(players, filters))
// console.log(search(players, filters));

//--------------------------------------------
// const countries = {
//     China: 1371980000,
//     India: 1276860000,
//     'United States': 321786000,
//     Indonesia: 255461700,
//     Brazil: 204873000,
//     Pakistan: 190860000
// };

// let result =Object.keys(countries).filter(val =>countries[val] <=1000000000)
// console.log(result);

// console.log("Hello");

//----------------------Xử lý bất đồng bộ dùng hàm Map------------------------
// const asyncThing = (value) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(value)
//         }, 10000)
//     })
// }

// const main = async () => {
//     return  Promise.all([1, 2, 3, 4, 5].map(async (value) => {
//         const v = await asyncThing(value)
//         return v * 2;
//     }))
// }

// function main () {
//     return Promise.all([1,2,3,4].map((value) => asyncThing(value)));
//   }

//   main()
//     .then(values => values.map((value) => value * 2))
//     .then(v => console.log(v))
//     .catch(err => console.error(err));

// main()
//     .then(v => console.log(v))
//     .catch(err => console.log(err))

//---------------------Xử lý bất đồng bộ dùng hàm filter---------------------
// const asyncThing = (value) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(value)
//         }, 1000)
//     })
// }

// const main = async () => {
//     return [1,2,3,4].filter(async (value)=>{
//         const v = await asyncThing(value);
//         return v%2 === 0;
//     })
// }

// const main = async () => {
//     const arr = await Promise.all(await asyncThing([1, 2, 3, 4, 5]));
//     return arr.filter(val =>val%2===0)
// }

// main()
//     .then(v => console.log(v))
//     .catch(err => console.log(err))

//----------------------Test-------------
// const asyncThing = (value) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(value)
//         }, 10000)
//     })
// }

// const main = async(value) => {
//     let result = await asyncThing(value);
//     let test = result/2;

//     return test
// }

// main(2)
//     .then(result =>console.log(result))
//     .catch(err =>console.log(err))

//----------async với reduce--------------------
// const asyncThing = (value)=> {
//     return new Promise((resolve) => {
//         setTimeout(() => resolve(value), 100);
//     });
// }

// const main = async () => {
//     return [1, 2, 3, 4, 5].reduce(async(acc, value) => {
//         return await acc+ await asyncThing(value)
//     },Promise.resolve(0))
// }

// main()
//     .then(v => console.log(v))
//     .catch(err => console.error(err));
//-------------------------------------- Sử dụng reduce trong javascript -------------------------

// const reverse = (arr) => {
//     return arr.reduceRight((acc,value)=>{
//         return (acc.push(value),acc)
//     },[])
// }

// console.log(reverse([1, 2, 3, 4, 5])); // [5, 4, 3, 2, 1]

// function Reverse(arr = []) {
//     return arr.reduceRight((t, v) => (t.push(v), t), []);
// }
// console.log(Reverse([1, 2, 3, 4, 5]));

// const players = [
//     { id: 11, name: 'Messi', age: 33 },
//     { id: 12, name: 'Ronaldo', age: 34 },
//     { id: 13, name: 'Young', age: 35 },
//     { id: 14, name: 'Mane', age: 21 },
//     { id: 15, name: 'Salah', age: 24 },
// ]

// const convertArrayToObject = (arr, key) => {
//     return arr.reduce((obj, item) => {
//         return {
//             ...obj,
//             [item[key]]: item,
//         };
//     }, {})
// }

// const convertArrayToObject = (arr, key) => {
//     return arr.reduce((obj, item) => {
//         obj[item[key]] = item;
//         return obj
//     }, {})
// }

// const playersModified = convertArrayToObject(players, 'id');
// console.log(playersModified);

// const playerProfile = [
//     { name: "Ronaldo", team: "Juventus " },
//     { name: "Messi", team: "Barcelona" },
//     { name: "Mane", team: "Liverpool" }
// ];

// const getMapFromArray = data => {
//     return data.reduce((obj, item) => {
//         obj[item.name] ={team: item.team}
//         return obj
//     },{})
// }

// const playerProfileModified = getMapFromArray(playerProfile)
// console.log(playerProfileModified);

// const target = { a: 1, d: 2 };
// const source = { b: 4, c: 5 };
// const result = Object.assign(target,source)
// console.log(result);
