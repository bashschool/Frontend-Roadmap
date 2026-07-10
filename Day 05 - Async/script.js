

// console.log("Start")

// setTimeout(() => {
//     // this will run after below number in ms
//     console.log("Inside TimeOut")
//     console.log(1)
//     console.log(2)
//     console.log(4)
//     console.log(3)
//     console.log(5)

// }, 5000)


// console.log(6)

// setTimeout(() => {
//     console.log("2 second timeout")
// }, 2000)
// console.log("End")


function getuser() {
    console.log("get user")
    const user = new Promise((resolve, reject) => {
        console.log("inside user promise")
        setTimeout(() => {
            console.log("resolving the user data from database")
            resolve({
                id: 1
            })
        }, 4000)
    }).then((data) => {
        console.log("got user", data)
        return data
    })


    return user
}

async function getTodos() {

    const todos = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json))
}



async function getProducts() {
    const loggedinuser = await getuser();
    console.log("this will run after we get the user data as we have await keyword", loggedinuser)
    const wishlist = await getTodos()
}

getProducts()