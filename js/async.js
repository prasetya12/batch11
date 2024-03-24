//Asynchrounus & Synchrounous

//Synchrounous
// console.log("ini baris pertama")
// console.log("ini baris kedua")
// console.log("ini baris ketiga")

//Asynchrounus
// setTimeout(() => console.log("ini baris pertama"), 3000)
// setTimeout(() => console.log("ini baris kedua"), 1000)
// setTimeout(() => console.log("ini baris ketiga"), 2000)


//Login => token 
// function login(username, password, funCall) {
//     let token = "x123456"
//     if (username) {
//         setTimeout(() => {
//             // return token
//             funCall(token)
//         }, 2000)
//     }
// }
// //butuh token
// //Get User =>datauser
// function getUser(token, funCall) {
//     let user = {
//         id: 123,
//         username: "John Doe"
//     }
//     if (token) {
//         setTimeout(() => {
//             // return user
//             funCall(user)
//         }, 1000)
//     }
// }
// //butuh iduser
// //Get User Profile
// function getUserProfile(idUser, funCall) {
//     let picture = "image.com/img.jpg"
//     if (idUser) {
//         setTimeout(() => {
//             // return picture
//             funCall(picture)
//         }, 1000)
//     }
// }

// //case
// // const token = login("john", "123")
// // const userData = getUser(token)
// // const userProfile = getUserProfile(userData.id)

// //Callback
// login("john", "123", function (res) {
//     let token = res
//     getUser(token, function (item) {
//         let userData = item
//         getUserProfile(userData.id, function (user) {
//             console.log(user)
//         })

//     })
// })
// 
//Promise
//async await


//Sync
// console.log("ini baris pertama")
// console.log("ini baris kedua")
// console.log("ini baris ketiga")

//AsSync
// console.log("ini baris pertama")
// setTimeout(() => { console.log("ini baris kedua") }, 0)
// console.log("ini baris ketiga")


// function login(username, funcCall) {
//     console.log("get data token")
//     let token = "x12345"
//     if (username) {
//         setTimeout(() => {
//             console.log("token berhasil")

//             funcCall(token)
//         }, 0)
//     }
// }
function login(username) {
    console.log("get data token")
    let token = "x12345"
    if (username) {
        return new Promise((success, error) => {
            setTimeout(() => {
                console.log("token berhasil")
                if (username == "John Doe") {
                    success(token)
                } else {
                    error("Username Tidak Sesuai")
                }
                // funcCall(token)
            }, 0)
        })
    }
}

// function getDataUser(token, callback) {
//     let user = {
//         id: 123,
//         name: "John Doe"
//     }
//     if (token) {
//         setTimeout(() => {
//             console.log("user berhasil")

//             callback(user)
//         }, 0)
//     }
// }

function getDataUser(token) {
    let user = {
        id: 123,
        name: "John Doe"
    }
    if (token) {
        return new Promise((success, error) => {
            setTimeout(() => {
                console.log("user berhasil")

                success(user)
            }, 0)
        })
    }
}

// function getImageUser(idUser, callback) {
//     let img = "img.com/img.jpg"
//     if (idUser) {
//         callback(img)
//     }
// }

function getImageUser(idUser) {
    let img = "img.com/img.jpg"
    if (idUser) {
        return new Promise((success, error) => {
            setTimeout(() => {
                success(img)
            }, 0)
        })
    }
}

// let token = login("John Doe")
// let dataUser = getDataUser(token)

//callback
// login("John Doe", function (token) {
//     getDataUser(token, function (dataUser) {
//         getImageUser(dataUser.id, function (img) {
//             console.log(img, 'user')
//         })
//     })
// })

//PROMISE 
// - Membuat promise v
// - get promise V

// 3 state
// - pending
// - success
// -  error
// login("John Doe").then((token) => {
//     getDataUser(token).then(({ id, name }) => {
//         getImageUser(id).then((res) => {
//             console.log(res)
//         })
//     })
// }).catch((err) => {
//     console.log(err, 'saya error')
// })

// 3.Aync Await
async function getUser() {
    try {
        let token = await login("John Doe")
        console.log(token, 'token')
        let dataUser = await getDataUser(token)
        let dataProfile = await getImageUser(dataUser.id)
        console.log(dataProfile)
    } catch (error) {
        console.log(error)
    }
}

getUser()

