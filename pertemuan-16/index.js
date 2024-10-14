//Asynchronous JS

//Synchronous => single thread => satu proses yang berjalan => Blocking
// console.log("proses 1");
// console.log("proses 2");
// console.log("proses 3");
// console.log("proses 4");

//Asynchronous => multi Thread => proses yang berjalan secara bersama-sama => Non-Blocking
//1. Parallel => memulai secara bersamaan
// setTimeout(() => {
//   console.log("Proses 1");
// }, 3000);
// console.log("Proses 2");
// setTimeout(() => {
//   console.log("Proses 3");
// }, 5000);
// console.log("Proses 4");

//2. Concurent => tidak memulai secara bersamaan (menunggu 1 proses selesai baru berjalan) ES5
// stTeimeout(() => {
//   console.log("Proses 1");
//   setTimeout(() => {
//     console.log("Proses 2");
//     setTimeout(() => {
//       console.log("Proses 3");
//       setTimeout(() => {
//         console.log("Proses 4");
//       }, 3000);
//     }, 3000);
//   }, 3000);
// }, 3000);

//Promise
let condition = true;
const newPromise = new Promise((resolve, reject) => {
  if (condition) {
    resolve("Berhasil");
  } else {
    reject("Gagal");
  }
});

// Cara menggunakan promise
// 1. then - catch
// newPromise
//   .then((result) => result)
//   .then((result2) => console.log(result2))
//   .catch((error) => console.log(error));

// 2. Async - Await
// Harus di buat dalam fungsi
// const consumePromise = async () => {
//   try {
//     let result = await newPromise;
//     console.log(result);
//   } catch (error) {
//     console.log(error);
//   }
// };
// consumePromise();

// then - catch
// fetch("https://jsonplaceholder.typicode.com/users/1")
//   .then((response) => response.json())
//   .then((json) => console.log(json));

// Async - Await

// (async () => {
//   let response = await fetch("https://jsonplaceholder.typicode.com/users");
//   let json = await response.json();
//   console.log(json);
// })();

//2. Axios
// axios
//   .get("https://jsonplaceholder.typicode.com/users")
//   .then((result) => console.log(result.data))

(async () => {
  let result = await axios.get("https://jsonplaceholder.typicode.com/users");
  result.data.forEach(({ name }) => console.log(name));
})();
