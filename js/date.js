//DATE


//CREATE
//timestamp
const dateTimestamp = new Date(1600525320000)

//String
//const dateString = new Date("August 03 2020 13:20")
const dateString = new Date("3 Augst 2020 13:20")

// console.log(dateString, 'date')

const createDate = new Date(2025, 2, 23)
const dateNow = new Date()

const monthList = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agst", "Sept"]
const dayList = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"]

const tahun = dateNow.getFullYear()
const month = dateNow.getMonth()

const date = dateNow.getDate()
const day = dateNow.getDay()

const getCreateDay = createDate.getDay()
const hours = dateNow.getHours()
const minutes = dateNow.getMinutes()
const seconds = dateNow.getSeconds()
//23-03-2024
// console.log(month + 1)
// console.log(dayList[getCreateDay])
// console.log(seconds)

//23-03-2024 11:00 
const dateStringNow = date + "-" + (month + 1) + "-" + tahun + " " + hours + ":" + minutes
//tanggal <10 01 02
//tanggal >=10 12 22

const ds = `${("0" + date).slice(-2)}-${("0" + (month + 1)).slice(-2)}-${tahun} ${("0" + hours).slice(-2)}:${("0" + minutes).slice(-2)}`

const formatIndonesia = new Intl.DateTimeFormat('id-ID', {
    year: "numeric",
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit'
}).format(dateNow)

//relative time 
//2 days ago
//2 hours ago
const getDateElm = document.querySelector('#date_container')

getDateElm.innerHTML = `<h1>${formatIndonesia}</h1>`


// const isSiang = false

//= assignment
//=== == comparsion

// console.log("Mulai")
// if (isSiang = true) {
//     alert("Selamat Siang")
// } else {
//     alert("Selamat Malam")
// }

const getResultElm = document.getElementById("result")

// const paswordText = prompt("Masukan Password Anda ?")


// getResultElm.innerHTML = ""
// if (paswordText == "admin123") {
//     getResultElm.innerHTML = "Selamat Anda Berhasil Login"
// } else if (paswordText == 'user123') {
//     getResultElm.innerHTML = "Selamat Anda Berhasil Login sebagai User"
// } else {
//     getResultElm.innerHTML = "Password Salah"
// }




const nilai = 90


//conditioan 
// alert (grade)
// if (nilai >= 90 && nilai <= 100) {
//     alert('A')
// } else if (nilai >= 80 && nilai < 90) {
//     alert('B')
// } else if (nilai >= 70 && nilai < 80) {
//     alert('C')
// } else if (nilai >= 60 && nilai < 70) {
//     alert('D')
// } else if (nilai < 60) {
//     alert('E')
// }

// if (nilai >= 90 && nilai <= 100) alert('A')
// else if (nilai >= 80 && nilai < 90) alert('B')

const usernameDb = "admin"
const passwordDb = "admin123"

const usernameElm = document.getElementById('username')
const passwordElm = document.getElementById('password')
const btnLoginElm = document.getElementById('btn_login')

btnLoginElm.addEventListener('click', function () {
    const usernameValue = usernameElm.value
    const passwordValue = passwordElm.value

    if (usernameValue == usernameDb) {
        if (passwordValue == passwordDb) {
            alert("Anda Berhasil Login")
        } else {
            alert("Password Anda Salah")
        }
    } else {
        alert("Username Anda Salah")
    }
})

//Switch Case
//admin,user,guest enum
const role = "Admin"

switch (role) {
    case "Admin":
        alert("Anda Sebagai Admin")
        break;
    case "User":
        alert("Anda Sebagai User")
        break;
    case "Guest":
        alert("Anda Sebagai Guest")
        break;
    default:
        alert("Anda Sebagai Guest")
        break;
}

const isSiang = false;

const greetingCard = isSiang == true ? "Selamat Siang" : "Selamat Malam"

console.log(greetingCard, 'greeting')





