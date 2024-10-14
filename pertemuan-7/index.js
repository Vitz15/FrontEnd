// Array in JavaScript
// Deklarasi variabel array6

// cara pertama Array literal
// let numbers = [1, 2, 3, 4, 5];
// console.log(numbers);

// // cara kedua menggunakan kata kunci new
// let numbers2 = new Array(6, 7, 8, 9, 10);
// console.log(numbers2);

// tipe data yang bisa disimpan dalam array
// let numbers = [1, 2, 3, 4, 5]; //numbers
// let students = ["John", "Jane", "Bob"]; // string
// let john = ["John", 30, true, [80, 90, 100]]; //Mixed
// console.log(john);

// // array length
// console.log(numbers.length);
// console.log(students.length);
// console.log(john.length);

// // menampilkan output dengan menggunakan index
// console.log(numbers[2]);
// console.log(students[1]);
// console.log(john[2]);
// console.log(john[3][1]);

// mengakses elemen terakhir pada data
let numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numbers2[9]);
console.log(numbers2[numbers2.length - 1]);

// array method
let array = [1, 2, 3, "Hello", false, true];
console.log(array);

//1.toString()
console.log(array.toString());
//2. join()
console.log(array.join(" "));
console.log(array.join("-"));
console.log(array.join("#"));
//3. pop()
console.log(array.pop());
console.log(array);
//4. push()
console.log(array.push("selamat pagi"));
console.log(array);
//5. shift ()
console.log(array.shift());
console.log(array);
//6. unshift()
console.log(array.unshift("Selamat pagi"));
console.log(array);
//7. splice() //tambah,hapus, ganti yang ada di tengah-tengah
console.log(array.splice(2)); //hapus
console.log(array);
console.log(array.splice(1, 1, 1)); //ganti
console.log(array);
console.log(array.splice(2, 0, 2, 3)); //tambah
console.log(array);
//8. concat()
let buah = ["pisang", "apel", "jeruk"];
let sayur = ["tomat", "bayam", "wortel"];
let biji = ["kedelai", "kacang hitam", "kacang polong"];

let makanan = buah.concat(sayur, biji);
console.log(makanan);

//9. slice()
let sayuran = makanan.slice(3, 6);
console.log(sayuran);

let bijian = makanan.slice(6);
console.log(bijian);
