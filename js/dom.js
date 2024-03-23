//getElementby*

// let titleElm = document.getElementById('title') //get by id
let itemElm = document.getElementsByClassName('item_menu')
let itemTag = document.getElementsByTagName('ul')

//querySelector
let titleElmNew = document.querySelector("#title")
let itemElmNew = document.querySelectorAll(".item_menu")
let itemTagNew = document.querySelectorAll("ul")


// console.log(itemTagNew, 'halo')
// titleElmNew.textContent = "<h1>Menu Restaurant</h1>"
// titleElm.innerHTML = "<h1>Menu Restaurant</h1>"
let btnElm = document.getElementById('btn_title')
btnElm.addEventListener('mouseenter', function () {
    let titleElm = document.getElementById('title')
    titleElm.innerHTML = "<h1>Menu Restaurant</h1>"
})

btnElm.addEventListener('', function () {
    let titleElm = document.getElementById('title')
    titleElm.innerHTML = "Menu Makanan"
})

// btnElm.addEventListener('click', function () {
//     let titleElm = document.getElementById('title')
//     titleElm.innerHTML = "<h1>Menu Restaurant</h1>"
// })

// function onBtnClick() {
//     let titleElm = document.getElementById('title')
//     titleElm.innerHTML = "<h1>Menu Restaurant</h1>"
// }

let btnChangePos = document.getElementById('btn_change_posisi')
let daftarMenuElm = document.getElementsByClassName('daftar_menu')


btnChangePos.addEventListener('click', function () {
    daftarMenuElm[0].innerHTML = ' <li class="item_menu">Mie Ayam</li><li class="item_menu">Bakso</li><li class="item_menu">Soto</li>'
})

let btnSubmitCon = document.getElementById('btn_submit')
let inputNilaiElm = document.getElementById('input_nilai')
// let inputNilaiValue = inputNilaiElm.value

var n = 0;
function onBtnClick() {
    if (n == 0) {
        let titleElm = document.getElementById("title");
        titleElm.innerHTML = "<h1>Menu Restaurant</h1>";
        console.log(n, "pertama kali tombol diclick");
    } else {

        console.log(n, "jumlah tombol diklik");
    }

    n = n + 1;

}


// // let buah = ["Apple",]

// let user = {
//     firstName: "Rizal",
//     lastName: "Prasetya",
//     age: 20
// }

// let firstNameElm = document.getElementById('firstName')
// let lastNameElm = document.getElementById('lastName')
// let ageElm = document.getElementById('age')

// firstNameElm.value = user.firstName
// lastNameElm.value = user.lastName
// ageElm.value = user.age
const dataOlahraga = ['Sepak Bola', 'Voli', 'Badminton']
const elmListOlahraga = document.getElementById('container_list_olahraga')

dataOlahraga.forEach(item => {
    const elmLi = document.createElement('li')
    elmLi.textContent = item
    elmListOlahraga.append(elmLi)
})

// const elmLi = document.createElement('li') //<li></li>
// elmLi.textContent = "Sepak Bola" //<li>Sepak Bola </li>



// elmListOlahraga.append(elmLi)

// const elmLi2 = document.createElement('li') //<li></li>
// elmLi2.textContent = "Voli" //<li>Sepak Bola </li>

// elmListOlahraga.append(elmLi2)

const titleOlahragaElm = document.getElementById('title_olahraga')

// titleOlahragaElm.style.backgroundColor = 'red'
// titleOlahragaElm.style.color = 'green'

// titleOlahragaElm.style = "background-color:'red';color:'yellow'"


const menu = ['Home', 'About', 'Profile']
const listMenuElm = document.getElementById('list_menu')

menu.forEach(item => {
    const divElm = document.createElement('div')
    divElm.textContent = item
    // divElm.classList.add('menu-item')

    // divElm.addEventListener('click', function () {
    //     //remove semua class di menu item yang punya class active
    //     const menuAllClassItem = document.querySelectorAll('.menu-item')
    //     console.log(menuAllClassItem)
    //     menuAllClassItem.forEach((item) => item.classList.remove('active'))

    //     divElm.classList.add('active')
    // })
    listMenuElm.append(divElm)
})

let listMenudiv = ""
menu.forEach(item => {
    listMenudiv += "<div>" + item + "</div>"
})

listMenuElm.innerHTML = listMenudiv



// const divElm = document.createElement('div')
// divElm.textContent = "Menu3"
// listMenuElm.appendChild(divElm)

// listMenuElm.append("Hello", document.createElement('span'), "World")






