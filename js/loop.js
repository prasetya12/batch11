//LOOPING
//1 Counted Looping // seberapa banyak perulangan
//- Perulangan For
// for (let i = 0; i < 10; i++) {
//     document.write(`Hello World ${i + 1} <br/>`)
// }

// item + 2
// for (let item = 0; item < 10; item += 2) {
//     document.write(`Hello World ${item} <br/>`)
// }

// for (let item = 10; item >= 0; item--) {
//     document.write(`Hello World ${item} <br/>`)
// }

//- Perulangan ForEach membaca perulangan based on data
const bahasa = ["Inggris", "Indonesia", "Jawa", "Prancis"]

const reverse = bahasa.reverse()

for (let a = 0; a < bahasa.length; a++) {
    // document.write(`${bahasa[a]} <br/>`)
}

reverse.forEach(function (item) {
    // document.write(`${item} <br/>`)
})

// document.write(bahasa)

//- Repeat
for (let i = 0; i < 100; i++) {
    // document.write(`Perulangan ${i}`)

}

// console.log("Perulangan".repeat(100))
// document.write()

//2 UnCounted Looping // belum tau perulangannya berapa banyak

//- While
let ask = false //true /false
let counter = 0

//kondisi -> perulangan
while (ask) {
    // let jawab = confirm("Apakah Anda mau mengulang")
    counter++;
    if (jawab == false) {
        ask = false
    }
    // document.write(`Anda melakuakn perulangan yang ke- ${counter}`)
}


//- Do/While
//perulangan -> kondisi
// do {
//     counter++
//     ask = confirm("Apakah Anda mau mengulang?")
// } while (ask)

// document.write(`Perulangan sebanyak ${counter}`)

let c = 5
// let c; //undefined
// console.log(c)
// prompt(`masukkan array ${c}`)
for (let a = 0; a < Number(c); a++) {
    // document.write('ulang dong');
}

// for (let a = 0; a < c; a++) {
//     document.write('ulang dong');
// }

//BONUS
// let lang = [{ id: 0, label: "Javascript" }, { id: 1, label: "Java" }, { id: 2, label: "Python" }, {
//     id: 3, label: "PHP"
// }]

// lang.forEach(function (item) {
//     document.write(item.label)
// })

//Nested loop
// for (let i = 0; i < 10; i++) {
//     for (let j = 0; j < 10; j++) {
//         document.write(`Perulangan ke ${i},${j} <br/>`)
//     }
// }

//Loop Object
const user = {
    firstName: "John",
    lastName: "Doe",
    age: 20
}

for (let key in user) {
    document.write(`${key} - ${user[key]} <br/>`)
}

