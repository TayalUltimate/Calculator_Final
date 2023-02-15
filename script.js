const equation = document.getElementById("equation")
const result = document.getElementById("result")

const openBracket = "("
const closeBracket = ")"

function insert(x) {
    console.log("Inserting", x);
    equation.textContent = equation.textContent + x;
    result.style.backgroundColor = "rgb(200, 0, 0)"
    result.textContent = "Invalid Equation"
    result.textContent = eval(equation.textContent)
    result.style.backgroundColor = "rgb(0, 200, 0)"
}

function backspace() {
    equation.textContent = equation.textContent.slice(0, equation.textContent.length - 1)
    result.style.backgroundColor = "rgb(200, 0, 0)"
    result.textContent = "Invalid Euqation"
    result.textContent = eval(equation.textContent)
    result.style.backgroundColor = "rgb(0, 200, 0)"
}

function erase() {
    equation.textContent = "";
    result.textContent = "";
    result.style.backgroundColor = "rgb(51, 51, 51)";
}