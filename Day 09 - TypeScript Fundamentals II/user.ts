// type



type StatusT = "active" | "inactive" | "pending" | "banned";



// enums
export enum Role {
    Admin, Editor, Viewer
}


// literals are simple readable and disapper at compile time
// real object at runtime




// interface
// An interface gives an object shape a reusable name. Define it once, use it anywhere:

export interface User {
    name: string;
    age: number;
    readonly email: string; // set it once but u cannot reassign it again
    voter_id?: number; // optional property
    status: StatusT;
    role: Role;
}



// Array of objects

interface Todo {
    id: string;
    title: string;
    status: "to-do" | "in-progress" | "done"; // literal unions
}


const todos: Todo[] = [
    {
        "id": "1",
        "title": "Design the landing page",
        "status": "to-do"
    },
    {
        "id": "1",
        "title": "Design the landing page",
        "status": "to-do"
    }
]


todos.filter((todo) => todo.status === "to-do").map((todo) => todo.title)



function printId(id: number | string) {

    // Type narrowing is a technique used in TypeScript to refine the type of a variable within a specific scope. It allows you to narrow down the possible types of a variable based on certain conditions or checks, enabling more precise type checking and better code safety.
    if (typeof id === "string") {
        console.log(id.toUpperCase());
    } else {
        console.log(id);
    }
}

printId(123); // Output: 123
printId("abc"); // Output: ABC



function firstItem<T>(items: T[]) {
    return items[0];
}



firstItem([1, 2, 3]); // Output: 1

firstItem(["a", "b", "c"]); // Output: "a"


let scores: Array<number> = [10, 20, 30, 40, 50];



const double: (n: number) => number = (n) => n * 2;


const double1 = (n: number): number => {
    return n * 2;
}

function double2(n: number): number {
    return n * 2;
}


double(5); // Output: 10