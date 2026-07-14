// import index from "./index.js"
import figlet from "figlet"

// import fs from "fs/promises"

// console.log(figlet.textSync(index.name))
// console.log(index.age)
// console.log(index.sum(20, 10))


// const name = process.argv[2] || "Stranger"
// // const name = process.argv[3] || "Stranger"
// // const name = process.argv[4] || "Stranger"

// console.log(figlet.textSync(`hello ${name}`))


// //  fs






// // fs.writeFileSync("note.txt", "Hello class12332423412332")

// const data = await fs.readFile("note.txt", "utf-8")


// async function main() {

//     try {
//         await fs.appendFile("note.txt", "Written by Abhishek")
//         const text = await fs.readFile("note.txt", "utf-8")
//         console.log("read back", text.trim())
//     } catch (err) {
//         console.log(err)
//     }

// }

// main()


// console.log(data)



// calculator



import readline from "readline"

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const ask = (q) => new Promise((resolve) => rl.question(q, resolve))


function calculator(a, op, b) {
    switch (op) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "/":
            return a / b
        // return b !== 0 ? a / b : "ERROR: CANNOT DIVIDE BY ZERO"
        default: return "ERROR: OPERATION NOT SUPPORTED"
    }
}




async function main() {

    console.log(figlet.textSync("CALCULATOR"))

    while (true) {
        const a = Number(await ask("ENTER THE FIRST NUMBER:  "))
        const op = await ask("Choose operation + -  / *:  ");
        const b = Number(await ask("ENTER THE second NUMBER:  "));

        console.log(`Result: ${a} ${op} ${b} = ${calculator(a, op, b)} \n`)

        console.log("======================================")

    }

}

main()