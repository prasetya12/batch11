const bilPertama = document.getElementById('bilangan_pertama')
const bilKedua = document.getElementById('bilangan_kedua')
const btnPlus = document.getElementById('btn_plus')
const btnMin = document.getElementById('btn_min')
const btnLuas = document.getElementById('btn_luas')
const hasil = document.getElementById('hasil')

//
// function penjumalahan(param1, param2) {
//     const result = Number(param1) + Number(param2)
//     return result
// }

const penjumalahan = (param1, param2) => {
    const result = Number(param1) + Number(param2)
    return result
}

function pengurangan(param1, param2) {
    const result = Number(param1) - Number(param2)
    return result
}

function luasPersegi(param1, param2) {
    console.log(param1, 'params')
    const result = Number(param1) * Number(param2)
    return result
}

function onClickBtnPlus() {
    // const result = Number(bilPertama.value) + Number(bilKedua.value)

    const result = penjumalahan(bilPertama.value, bilKedua.value)

    hasil.textContent = result
}

function onClickBtnMin() {
    const result = pengurangan(bilPertama.value, bilKedua.value)
    hasil.textContent = result
}

function onClickLuasPersegi() {
    const result = luasPersegi(bilPertama.value, bilKedua.value)
    hasil.textContent = result
}

let bil1 = prompt("Masukan Bilangan Pertama")
let bil2 = prompt("Masukan Bilangan Kedua")

let result = penjumalahan(bil1, Numberbil2)

alert(result)


// btnPlus.addEventListener('click', function () {
//     onClickBtnPlus()
// })

// function namaFunction() {
//     alert("Hello World")
// }

// namaFunction()
