class Mobil {
    constructor(merk, warna) {
        this.merk = merk
        this.warna = warna
    }
}


// const mobil = {
//     merk: "Honda",
//     warna: "Kuning"
// }
const mobil = new Mobil("Honda", "Kuning")
const mobil2 = new Mobil("Toyota", "Merah")


// const mobil2 = {
//     merk: "Toyota",
//     warna: "Merah"
// }

console.log(mobil)
console.log(mobil2)
