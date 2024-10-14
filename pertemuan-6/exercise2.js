// Ubah exercise 1 dari function biasa menjadi
// IIFE dan callback

// IIFE
let hasil = (function(berat, tinggi){
  let bmi = berat / (tinggi * tinggi);
  return bmi 
})(60,1.7)
console.log("BMI anda adalah :" + hasil.toFixed(2));



// Call back
function hitungBMI(berat, tinggi, callback){
  let bmi = berat / (tinggi * tinggi);
  callback(bmi)
}

let berat = 60; // dalam kg
let tinggi = 1.7; // dalam meter 
  
hitungBMI(berat, tinggi, function(bmi){
  console.log(`BMI anda adalah: ${bmi.toFixed(2)}`);
});