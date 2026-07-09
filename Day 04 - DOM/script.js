
const display = document.getElementById("display")
// display.value = "hello "
const h3 = document.getElementById("h3")
const deletebtn = document.getElementById("delete")


function deleteH3() {
    h3.remove()
    deletebtn.remove()
}



// 3+3-6*9

function appendValue(value) {

    // check for this issue : 8*99/*-+
    display.value += value
}

function calculate() {
    display.value = eval(display.value)

    //  IF ELSE STATEMENT ALSO
}

function deleteLast() {
    try {
        display.value = display.value.slice(0, -1)
    } catch {
        display.value = "EROOR"
    }
}


function clearDisplay() {
    display.value = ""
}