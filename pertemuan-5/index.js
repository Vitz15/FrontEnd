//Javascript Function
//cara pertama
// function greetings1(){
//     console.log("Hello World");
// }
// greetings1();

//Function Expression
// let greetings2 = function(){
//     console.log("Hello World");
// }
// greetings2();

//Parameter & Argument (input), return (output)

                    //Parameter
// function greetings1(fullName){
//     return "Hello :" + fullName;
// }
//                         //Argumen
// let output = greetings1("John Doe")
// console.log(output);

//cara dua
// let greetings2 =function(fullName){
//     return "Hello :" + fullName;
// }

// let output2 = greetings2("John Doe");
// console.log(output2);

//Function Housting 

//cara 1 berhasil

// let output = greetings1("John Doe")
// console.log(output);

// function greetings1(fullName){
//     return "Hello :" + fullName;
// }

// //cara 2 Gagal "Error"
// let output2 = greetings2("John Doe");
// console.log(output2);

// let greetings2 =function(fullName){
//     return "Hello :" + fullName;
// }

//Lingkup Global & lingkup Lokal

let x = 10; // variabel global function
function foo(){
    let y = 20;//local function
    console.log(x);//10
    console.log(y);//20
    if (y > 10) {
        let z = 30;
        console.log(x);
        console.log(y);
        console.log(z);
    }
}

console.log(x);

