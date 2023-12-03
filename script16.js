// alert('Halo');
// alert('Nama');
// alert('Saya');
// alert('Sholahuddin Alfatah');

// var nama = prompt('masukkan nama:');
// alert(nama);

// var tes = confirm('kamu yakin?');
// alert(tes);
// if (tes === true) {
//     alert('user menakan OK!');
// } else {
//     alert('user menakan CANCEL!');
// }

alert('selamat datang..');
var lagi = true;

while( lagi === true ) {
    var nama = prompt('masukkan nama:');
    alert('halo ' + nama);

    lagi = confirm('coba lagi?');
}

alert('terima kasih..');