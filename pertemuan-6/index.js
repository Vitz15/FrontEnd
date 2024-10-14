// IIFE & CallBack function
// 1. IIFE 
//A.No parameter, no argument & return value
// Anonymous Function harus di jalankan secara otomatis
// (function(){
//     console.log("Hello World")
// })()

//B. with parameter, argument & return value
// let output = (function(fullName){
//     return "Hello " + fullName;
// })("John Doe");

// console.log(output);

//2. Callback Function
//A.no parameter, arguments & return value
// function sayHello(callback){
//     callback();

// }

// sayHello(function(){
//     console.log("Hello World");
// });

//B. with parameter, argument & return value
// function sayHello(callback){
//     let result = callback("John Doe");
//     return result

// }

// let output = sayHello(function(fullName){
//     return "Hello " + fullName;
// });
// console.log(output)