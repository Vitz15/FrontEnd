//Rest Parameter & Spread Operator
// 1. Rest Parameter

//tanpa rest parameter
const func1 = (param1, param2, param3, param4, param5) => {
  console.log(param1, param2, param3, param4, param5);
};
func1("a", "b", "c", "d", "e");

//dengan rest parameter
const func2 = (...params) => {
  console.log(params);
};

func2("a", "b", "c", "d", "e");

//rest parameter itu harus berada di terakhir dalam parameter list
const func3 = (param1, param2, ...params) => {
  console.log(param1, param2);
  console.log(params);
};
func3("a", "b", "c", "d", "e");

//mini exercise
const penjumlahan = (...total) => {
  let hasil = 0;
  total.forEach((item) => (hasil += item));
  return hasil;
};
console.log(penjumlahan(1, 2, 3, 4, 5));

//2. Spread Operator
let numbers = [1, 2, 3, 4, 5];
console.log(numbers);
console.log(...numbers);

//Array
//Duplikasi array
let numbers2 = [...numbers];
numbers.push(6);
console.log(numbers2);

//2.Menggabungkan Array

let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let array3 = [7, 8, 9];
let numbers3 = array1.concat(array2, array3); //ES5
let numbers4 = [...array1, ...array2, ...array3]; //ES6

//Object
//Duplikasi Object
const john = {
  fullName: "John Doe",
  age: 30,
};

const john2 = { ...john, address: "manado" };

//2.menggabungkan object
let obj1 = { a: 1, b: 2 };
let obj2 = { b: 3, d: 4 };

let combinedobj = { ...obj1, ...obj2 };
