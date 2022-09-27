function soma(num1, num2) {
    return parseInt(num1) + parseInt(num2);
}

function subtracao(num1, num2) {
    return parseInt(num1) - parseInt(num2);
}

function multiplicacao(num1, num2) {
    return parseInt(num1) * parseInt(num2);
}

function divisao(num1, num2) {
    return parseInt(num1) / parseInt(num2);
}

let num1;
let num2;

do{
    let op = prompt("Escolha umas das seguintes opções: \nSoma \nSubtração \nMultiplicação \nDivisão \nSair");
    while((op !== "Soma") && (op !== "Subtração") && (op !== "Multiplicação") && (op !== "Divisão") && (op !== "Sair")) {
        alert("Operação não reconhecida!");
        op = prompt("Escolha umas das seguintes opções: \nSoma \nSubtração \nMultiplicação \nDivisão \nSair");
    }
    if(op === "Sair") {
        alert("Até logo!");
        break;
    }
    num1 = prompt("Informe o primeiro número:");
    num2 = prompt("Informe o segundo número:");
    switch(op) {
        case "Soma":
            alert(`Conforme a operação escolhida ${op}, o resultado é ${soma(num1, num2)}`);
            break;
        case "Subtração":
            alert(`Conforme a operação escolhida ${op}, o resultado é ${subtracao(num1, num2)}`);
            break;
        case "Multiplicação":
            alert(`Conforme a operação escolhida ${op}, o resultado é ${multiplicacao(num1, num2)}`);
            break;
        case "Divisão":
            alert(`Conforme a operação escolhida ${op}, o resultado é ${divisao(num1, num2)}`);
            break;
    }
} while((op === "Soma") || (op === "Subtração") || (op === "Multiplicação") || (op === "Divisão"))
    alert("Até logo!");