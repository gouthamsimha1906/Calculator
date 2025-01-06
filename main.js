const operand1 = document.getElementById("num1");
const operand2 = document.getElementById("num2");
const dropdown = document.getElementById("dropdown");
const historyData = document.getElementById("history");
const answer = document.getElementById("output");
answer.textContent = "";

function calculation() {
    const numberA = operand1.value;
    const numberB = operand2.value;
    const operator = dropdown.value;

    const numAerror = document.getElementById("numA-error");
    const numBerror = document.getElementById("numB-error");
    const operatorError = document.getElementById("operator-error");

    numAerror.textContent = "";
    numBerror.textContent = "";
    operatorError.textContent = "";

    let verification = 1;
    const regexp = /^[0-9]+$/;
    if (numberA == "") {
        numAerror.textContent = "*Inputs cannot be blank*"
        verification = 0;
    } else {
        if (!regexp.test(numberA)) {
            numAerror.textContent = "*Please enter valid numbers*"
            verification = 0;
        }
    }
    if (numberB == "") {
        numBerror.textContent = "*Inputs cannot be blank*"
        verification = 0;
    } else {
        if (!regexp.test(numberB)) {
            numBerror.textContent = "*Please enter valid numbers*"
            verification = 0;
        }
    }
    if (operator == "choose") {
        operatorError.textContent = "*Choose an Operation*"
        verification = 0;
    }
    if (operator == "division" && numberB == "0") {
        numBerror.textContent = "*Division by zero is not allowed*"
        verification = 0
    }
    if (verification) {
        const numA = parseInt(numberA)
        const numB = parseInt(numberB)
        let ans;
        switch (operator) {
            case "sum":
                ans = numA + numB
                break
            case "diff":
                ans = numA - numB
                break
            case "multiply":
                ans = numA * numB;
                break
            case "division":
                ans = numA / numB
                break

        }

        answer.textContent = `${numA}${selectOperator(operator)}${numB} =${ans}`;
        const hist = document.createElement("li");
        hist.textContent = `${numA}${selectOperator(operator)}${numB} =${ans}`;
        historyData.appendChild(hist);

    }


    return verification
}
function selectOperator(operator) {
    switch (operator) {
        case "sum":
            return "+"
        case "diff":
            return "-"
        case "multiply":
            return "*"
        case "division":
            return "/"
    }
}

function clearField() {
    operand1.value = "";
    operand2.value = "";
    dropdown.value = "choose";
    historyData.innerHTML = "";
    answer.textContent = "";
    const numAerror = document.getElementById("numA-error").textContent="";
    const numBerror = document.getElementById("numB-error").textContent="";
    const operatorError = document.getElementById("operator-error").textContent="";

}
