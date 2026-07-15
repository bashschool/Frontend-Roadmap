// const person = require("./main.js")
let Name = "abhishek";
// name typeof -> string
// Name = 23;
// dynamically typed language
const person = {
    name: "Abhishek",
    email: "abhishek@gmail.com",
    age: 23
};
console.log(person.name);
function calculator({ a, b, op = "+" }) {
    switch (op) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "/":
            return a / b;
        // return b !== 0 ? a / b : "ERROR: CANNOT DIVIDE BY ZERO"
        default: return "ERROR: OPERATION NOT SUPPORTED";
    }
}
calculator({
    a: 2,
    b: 3
});
// calculator({}) // => throw error 
// Basic Types in TypeScript
let title = "Frontend Roadmap"; // string
let count = 10; // number
let isPublished = true; // boolean
let scores = [1, 2, 3, 4, 5]; // number[]
let names = ["1", "2"]; // number[]
let pair = ["abhishek", 23]; // tuple
// string key
// number value
title = 23;
if (typeof title === "string") {
    title.toUpperCase();
}
export {};
