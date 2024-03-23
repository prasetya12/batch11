const dataMahasiswa = [
    {
        id: 1,
        nama: "Alice",
        usia: 20,
        jurusan: "Informatika"
    },
    {
        id: 2,
        nama: "Bob",
        usia: 22,
        jurusan: "Teknik Elektro"
    },
    {
        id: 3,
        nama: "Carol",
        usia: 21,
        jurusan: "Desain Grafis"
    },
    {
        id: 4,
        nama: "Balmon",
        usia: 21,
        jurusan: "Informatika"
    }
]

//1. Buatkan data diatas menjadi seperti ini ["Alice","Bob","Carol"]
const namaMahasiswa = dataMahasiswa.map(mahasiswa => mahasiswa.nama);
console.log(namaMahasiswa);


//2. Buatkan array object yang hanya menampilkan nama dan usia saja
// [{
//     nama:'Balmon',
//     usia:20
// },{
//     nama:'Alice',
//     usia:21
// }]
const dataMahasiswaDua = dataMahasiswa.map(({ nama, usia }) => ({
    nama,
    usia
}));
console.log(dataMahasiswaDua);
//3. Tampilkan pada html dengan tampilan seperti ini
// 1. nama: Alice - 20
// 2. nama: Alice - 20
let tampilData = '';

dataMahasiswa.forEach((mahasiswa, index) => {
    tampilData += `${index + 1}. nama: ${mahasiswa.nama} - ${mahasiswa.usia}<br>`;
});

document.getElementById('dataMahasiswa').innerHTML = tampilData;

