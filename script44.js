// membuat Object Angkot
function Angkot(sopir, trayek, penumpang, kas) {
    this.sopir = sopir;
    this.trayek = trayek;
    this.penumpang = penumpang;
    this.kas = kas;
    
    this.penumpangNaik = function(namaPenumpang) {
        this.penumpang.push(namaPenumpang);
        return this.penumpang;
    }

    this.penumpangTurun = function(namaPenumpang, bayar) {
        if( this.penumpang.length === 0 ) {
            alert('angkot masih kosong!');
            return false;
        }

        for( var i = 0; i < this.penumpang.length; i++ ) 
            {
            if( this.penumpang[i] == namaPenumpang ) {
                this.penumpang[i] = undefined;
                this.kas += bayar;
                return this.penumpang;
            }
        }

    }
}

var angkot1 = new Angkot('Sholahuddin Alfatah', ['Cicaheum', 'Cibiru'], [], 0);
var angkot2 = new Angkot('Tom Cruise', ['Antapani', 'Citoyom'], [], 0);



// angkot1.penumpangNaik('doddy');
// ['doddy']0: undefined1: undefinedlength: 2[[Prototype]]: Array(0)
// angkot1.penumpangNaik('erik');
// (2) ['doddy', 'erik']0: "doddy"1: "erik"length: 2[[Prototype]]: Array(0)
// angkot1.penumpangTurun('erik', 2500);
// (2) ['doddy', undefined]0: undefined1: undefinedlength: 2[[Prototype]]: Array(0)
// angkot1.kas
// 2500
// angkot1.penumpangTurun('doddy', 4500);
// (2) [undefined, undefined]0: undefined1: undefinedlength: 2[[Prototype]]: Array(0)
// angkot1.kas
// 7000
// angkot2.kas
// 0