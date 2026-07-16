import { Role, type User } from "./user.js";

// Typing objects


const typeduser: {
    name: string;
    age: number;
    email: string;
    voterid: number;
} = {
    name: "John Doe",
    age: 30,
    email: "abhishek",
    voterid: 1234567890,
}


// Interface use

const user: User = {
    name: "John Doe",
    age: 30,
    email: "abhishek",
    // voter_id: 1234567890, // This property is not defined in the type and will cause an error
    status: "banned",
    role: Role.Admin,
}

user.name = "Kunal"
// user.email = "kunal"

// type