const formNilaiElm = document.getElementById('form_nilai')
const btnHasilElm = document.getElementById('btn_hasil')
const hasilElm = document.getElementById('hasil')


btnHasilElm.addEventListener('click', function () {
    const getValue = formNilaiElm.value
    const numValue = Number(getValue)


    //ABS
    // const result = Math.abs(numValue)

    //POW
    // const result = Math.pow(numValue, 2)

    //SQRT
    // const result = Math.sqrt(numValue)

    //MAX AND MIN
    // const result = Math.max(100, 1, 5, 8, 9)
    // const result = Math.min(100, 1, 5, 8, 9)

    //FLOOR, CEIL,ROUND

    // const result = Math.floor(numValue)
    // const result = Math.ceil(numValue)
    // const result = Math.round(numValue)


    // const num = Math.random() * 100 // 0 <1

    // const result = Math.floor(num)

    const result = Math.floor(Math.random() * 4) + 20



    hasilElm.textContent = result


})

//STRING MANIPULATION
// let greeting = "Hello"
let negara = "Indonesia"
//H E L L O
//0 1 2 3 4

// console.log(negara[negara.length - 1])

// console.log(greeting[1])
// console.log(greeting.length)

// let firstName = "Rizal"
// let lastName = "Prasetya"

// let variabel = "    Saya Belajar Javascript    "

// console.log(variabel.indexOf('javascript'))
// console.log(variabel.repeat(4))
// console.log(variabel.replace("Javascript", "Java"))

// console.log(variabel.slice(13, 24))
// console.log(variabel.toLowerCase())
// console.log(variabel.toUpperCase())
// console.log(variabel.length)
// console.log(variabel.trim().length)





// const fullName = firstName + " " + lastName +" Nugraha" 
// const fullName = firstName.concat(" ".concat(lastName))
// const fullName = `${firstName} ${lastName} Nugraha`

// const mobil = {
//     merk: "Honda",
//     warna: "Merah",
//     tipe: "Jazz",
//     "tahun buat": 2003
// }

// const hari = [10, 20, 30, 40]
// // console.log(Object.keys(mobil).length)

// hari.forEach(item => {
//     console.log(item)
// })

// for (let item of Object.entries(mobil)) {
//     console.log(item, 'item')
// }


// mobil.merk = "Toyota"
// console.log(mobil.merk)
// console.log(mobil["merk"])
// console.log(mobil["tahun buat"])


const dataMahasiswa = [
    {
        nama: 'John',
        usia: 20,
        nilai: [{
            matkul: "Matematika",
            nilai: 100
        }, {
            matkul: "B Indo",
            nilai: 100,
        }]
    },
    {
        nama: 'Doe',
        usia: 21,
        nilai: [{
            matkul: "Matematika",
            nilai: 90
        }, {
            matkul: "B Indo",
            nilai: 80,
        }]
    },
    {
        nama: 'Sam',
        usia: 30,
        nilai: [{
            matkul: "Matematika",
            nilai: 100
        }, {
            matkul: "B Indo",
            nilai: 80,
        }]
    }
]

const students = [
    { id: 1, name: 'Alice', score: 85, class: 'X' },
    { id: 2, name: 'Bob', score: 72, class: 'XI' },
    { id: 3, name: 'Charlie', score: 91, class: 'XII' },
    { id: 4, name: 'Dava', score: 100, class: 'XI' },
    { id: 5, name: 'Fandi', score: 81, class: 'X' }
];


// console.log(dataMahasiswa[2].nilai[1].nilai)
// console.log(students[1].score)
// console.log(students[4].score)
const angka = [1, 2, 3, 4, 5, 6]
// const angkaKuadrat = angka.map((item) => {
//     return item * 2
// })
const fandi = students.find(item => item.name == "Fandi")
const class11 = students.filter(item => item.class == 'XI')
console.log(class11)











const num = angka.map((item) => {
    return `nilai ${item}`
})



console.log(num)

// console.log(dataMahasiswa[1].nilai[0].nilai)




