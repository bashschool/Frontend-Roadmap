

const API_URL = "http://localhost:3000/Todo";


async function loadTodos() {
    const res = await fetch(API_URL);
    const todos = await res.json()
    console.log(todos)
    renderTodos(todos)
}

function renderTodos(todos) {
    document.querySelectorAll(".task-list").forEach(col => col.innerHTML = "")

    todos.forEach(todo => {
        const card = createCard(todo);
        document.getElementById(todo.status).appendChild(card)
    })
}



function createCard(todo) {
    const card = document.createElement("div");
    card.className = `bg-white rounded-lg shadow cursor-move p-2 ${todo.status === "done" ? "line-through" : ""}`
    card.textContent = todo.title;
    card.draggable = true;
    card.dataset.id = todo.id;


    card.addEventListener("dragstart", (e) => {
        e.dataTransfer.setData("text/plain", todo.id)
    })
    return card
}




document.querySelectorAll(".task-list").forEach(column => {
    column.addEventListener("dragover", (e) => e.preventDefault())

    column.addEventListener("drop", async (e) => {
        e.preventDefault();

        const id = e.dataTransfer.getData("text/plain");
        const newStatus = column.id;

        await fetch(`${API_URL}/${id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ status: newStatus })
        })

        loadTodos()
    })


})


loadTodos()