// Membuat Object
// Object Literal
var mhs = {
    nama : "Sholahuddin Alfatah",
    nrp : "000001",
    email : 'alfatah1505@gmail.com',
    jurusan : 'Teknik Informatika'
}

var mhs2 = {
    nama : "Rahmad",
    nrp : "000002",
    email : 'rahmad@gmail.com',
    jurusan : 'Teknik Industri'
}


// Function Declaration
function buatObjectMahasiswa(nama, nrp, email, jurusan) {
    var mhs = {};
    mhs.nama = nama;
    mhs.nrp = nrp;
    mhs.email = email;
    mhs.jurusan = jurusan;
    return mhs;
}

var mhs3 = buatObjectMahasiswa('Tia', '000007', 'tia@gmail.com', 'Tekknik Sains') 

// Constructor
function Mahasiswa(nama, nrp, email, jurusan) {
    // var this = {};
    this.nama = nama;
    this.nrp = nrp;
    this.email = email;
    this.jurusan = jurusan;
    // return this;
}

var mhs4 = new Mahasiswa('anisa', '000009', 'anisa@gmail.com', 'Teknik Fisika');
