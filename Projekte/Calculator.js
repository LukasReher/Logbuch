let currentInput = "";
let result = 0;
let operator = "";

function number1() {
    currentInput += "1";
    document.getElementById("output").value = currentInput;
}

function number2() {
    currentInput += "2";
    document.getElementById("output").value = currentInput;
}

function number3() {
    currentInput += "3";
    document.getElementById("output").value = currentInput;
}

function number4() {
    currentInput += "4";
    document.getElementById("output").value = currentInput;
}

function number5() {
    currentInput += "5";
    document.getElementById("output").value = currentInput;
}

function number6() {
    currentInput += "6";
    document.getElementById("output").value = currentInput;
}

function number7() {
    currentInput += "7"
    document.getElementById("output").value = currentInput;
}

function number8() {
    currentInput += "8"
    document.getElementById("output").value = currentInput;
}

function number9() {
    currentInput += "9"
    document.getElementById("output").value = currentInput;
}

function number0() {
    currentInput += "0"
    document.getElementById("output").value = currentInput;
}

function AC() {
    currentInput = "";
    result = "";
    operator = "";
    document.getElementById("output").value = currentInput;
}

function addDecimal() {
    if (!currentInput.includes(".")){
        currentInput += ".";
        document.getElementById("output").value = currentInput;
    }
}

function DEL() {
    let output = document.getElementById("output");
    output.value = output.value.slice(0, -1);
}

function addOperator(op) {
    if (currentInput === "") return;

    result = parseFloat(currentInput)
    operator = op;
    currentInput = ""
}

function calculate() {
    let secondNumber = parseFloat(currentInput);

    if (operator === "+") {
        result = result + secondNumber;
    } else if (operator === "-") {
        result = result - secondNumber;
    } else if (operator === "*") {
        result = result * secondNumber;
    } else if (operator === "/") {
        if (secondNumber === 0) {
            alert("Nicht durch 0 teilen!");
            return;
        }
        result = result / secondNumber;
    } else if (operator === "%")
        result = (result * secondNumber) / 100;

    document.getElementById("output").value = result;
    currentInput = result.toString();
}