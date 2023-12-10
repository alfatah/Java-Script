// function tambah(a,b) {
//     return a + b;
// }

// function kali(a,b) {
//     return a * b;
// }

// var a = parseInt(prompt('Masukan nilai 1 :'));
// var b = parseInt(prompt('Masukan nilai 2 :'));
// var hasil = tambah(a*2,b*2);

// var hasil = kali(tambah(1,2), tambah(3,4));
// console.log(hasil);

 ////////////////////////////////////////////////////////

// function tambah(a,b,c,d) {
//     return a + b + c + d;
// }

// var hasil = tambah(3,4,5,6);
// console.log(hasil);

 ////////////////////////////////////////////////////////

function tambah() {
   var hasil = 0;
    for( var i = 0; i < arguments.length; i++ ) {
        hasil += arguments[i];
    }
    return hasil;
}

var coba = tambah(5,5);
console.log(coba);