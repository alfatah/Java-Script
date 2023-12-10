// Manipulasi Array

// 1. Menambah isi array
// var arr = ["a", 1, true];
// console.log(arr[1]);

// var arr = [];
// arr[0] = "Sholahuddin";
// arr[1] = "Alfatah";
// arr[2] = "Alfa";
// arr[6] = "Sholah";

// console.log(arr);

// 2. Menghapus isi array
// var arr = ["Sholahuddin", "Alfatah", "Alfa"]; 
// arr[1] = undefined;
// console.log(arr);

// 3. Menampilkan isi array
// var arr = ["Sholahuddin", "Alfatah", "Alfa", "Sholah"]; 

// for( var i = 0; i < arr.length; i++ ) {
//     console.log('Mahasiswa ke-' + (i+1) + ' : ' + arr[i]);
// }

// Method pada array
// 1. join
var arr = ['Sholahuddin', 'Alfatah', 'Alfa'];
// console.log(arr.join(' - '));

// 2. push & pop
// arr.push('Sholah', 'Rahmad');
// arr.pop();
// arr.pop();


// 3. unshift & shift
// arr.unshift('Tia');
arr.shift();
console.log(arr.join(' - '));