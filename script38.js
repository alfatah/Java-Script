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

// console.log(arr.join(' - '));

// 2. push & pop
// arr.push('Sholah', 'Rahmad');
// arr.pop();
// arr.pop();


// 3. unshift & shift
// arr.unshift('Tia');
// arr.shift();
// console.log(arr.join(' - '));

// 4. splice
// splice(indexAwal, mauDihapusBerapa, elemenBaru1, elemenBaru2, ...)
// arr.splice(1, 2, 'Rahmad', 'Tia');
// console.log(arr.join(' - '));

// 5. slice
// slice(awal,akhir);
// var arr = ['Sholahuddin', 'Alfatah', 'Alfa', 'Rahmad', 'Tia'];
// var arr2 = arr.slice(1,4);
// console.log(arr.join(' - '));
// console.log(arr2.join(' - '));

// 6. foreach
// var angka = [1,2,3,4,5,6,7,8];
// var nama = ['Sholahuddin', 'Alfatah', 'Alfa'];
// fo ( var i = 0; i < angka.length; i++ ) {
//     console.log(angka[i]);
// }

// var cetak = function(e) {
//     console.log(e);
// }

// angka.forEach(function(e) {
//     console.log(e);
// });

// nama.forEach(function(e, i) {
//     console.log('Mahasiswa ke-' + (i+1) + ' adalah : ' + e);
// })

// 7. map
// var angka = [1,2,5,3,6,8,4];
// var angka2 = angka.map(function(e) {
//     return e * 2;
// });
// console.log(angka2.join(' - '));

// 8. sort
// var angka = [1,2,10,5,3,20,6,8,4];
// angka.sort(function(a,b) {
//     return a-b;
// });
// console.log(angka.join(' - '));

// 9. filter & find
// var angka = [1,2,10,5,3,20,6,8,4];
// var angka2 = angka.filter(function(x) {
//     return x > 5;
// });
// console.log(angka2.join(' - '));

var angka = [1,2,10,5,3,20,6,8,4];
var angka2 = angka.find(function(x) {
    return x > 5;
});
console.log(angka2);

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

