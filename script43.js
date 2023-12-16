// this
// var a = 10;
// console.log(window.a);

// membuat object

// cara 1 - function declatation
// function halo() {
//     console.log(this);
//     console.log('halo');
// }
// this.halo();
// this mengembalikan object Global

// cara 2 - object literal
// var obj = {a : 10, nama : 'Sholahuddin'};
// obj.halo = function() {
//     console.log(this);
//     console.log('halo');
// }
// obj.halo();
// this mengembalikan object yang beresangkutan

// cara 3 - constructor
function Halo() {
    console.log(this);
    console.log('halo');
}
var obj1 = new Halo();
var obj2 = new Halo();
// this mengembalikan object yang baru dibuat
