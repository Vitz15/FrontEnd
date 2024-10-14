// JavaScript Object
// Deklarasi Object
// Cara 1. Object Literal

// let jhon = {
//   firstName: "Jhon",
//   age: 30,
//   isMarried: true,
//   grade: [80, 90, 100],
//   sayGreetings: function () {
//     console.log("Hello my name is " + this.firstName);
//   },
//   address: {
//     street: "Jl. Arnold Mononutu",
//     city: "Minahasa Utara",
//     province: "Sulawesi Utara",
//     postalCode: 95371,
//   },
// };
// console.log(jhon);

// // Cara 2. Kata kunci new
// let jane = new Object();
// jane.firstName = "Jane",
// jane.age = 25,
// jane.isMarried = false

// console.log(jane);

// // Cara mengkases properti dalam object
// // 1. Dot notion
// console.log(jhon.firstName); // Jhon
// console.log(jhon.age); // 30
// jhon.age = 31;
// console.log(jhon.age); // 31
// jhon.job = "Teacher"; // Tambah properti baru
// console.log(jhon);

// // 2. Bracket nitation
// console.log(jhon["isMarried"]); //true
// jhon["nationality"] = "Indonesia"; // Menambah Properti baru
// console.log(jhon);

// // Object method
// jhon.sayGreetings(); // Hello my name is Jhon

// // Object inside object
// console.log(jhon.address.city); // Minahasa Utara

// // Delete properti dalam object
// delete jhon.grade;
// console.log(jhon);

// JavaScript Conditional
// 1. if - else
// let numbers = 5;
// if (numbers % 2 === 0) {
//   console.log("bilangan genap");
// } else {
//   console.log("bilangan ganjil");
// }
// let suhu = 38;
// if (suhu >= 37) {
//   console.log("suhu hari ini panas");
// } else {
//   console.log("suhu hari ini dingin");
// }

// 2. if - else if

// 100 - 80 nilai A
// 70 - 79 nilai B
// 50 - 69 nilai C
// < 50 nilai D

// let nilai = 80;
// if (nilai >= 80 && nilai <= 100) {
//   console.log("Grade A");
// } else if (nilai >= 70 && nilai <= 79) {
//   console.log("Grade B");
// } else if (nilai >= 50 && nilai <= 69) console.log("Grade C");
// else {
//   console.log("Grade D");
// }

// 3. Switch - Case
// let month = 1;
// switch (month){
//     case 1 :
//         console.log("January");
//         break;
//     case 2 :
//         console.log("February");
//         break;
//     case 3 :
//         console.log("March");
//         break;
//     default:
//         console.log("Not Found")
//         break;
// }
