// type
// enums
export var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["Editor"] = 1] = "Editor";
    Role[Role["Viewer"] = 2] = "Viewer";
})(Role || (Role = {}));
const todos = [
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
];
todos.filter((todo) => todo.status === "to-do").map((todo) => todo.title);
function printId(id) {
    // Type narrowing is a technique used in TypeScript to refine the type of a variable within a specific scope. It allows you to narrow down the possible types of a variable based on certain conditions or checks, enabling more precise type checking and better code safety.
    if (typeof id === "string") {
        console.log(id.toUpperCase());
    }
    else {
        console.log(id);
    }
}
printId(123); // Output: 123
printId("abc"); // Output: ABC
