function calculadora(num1, num2, operacao = "+") {
    let resultado;

    switch (operacao) {
        case "+":
            resultado = num1 + num2;
            break;
        case "-":
            resultado = num1 - num2;
            break;
        case "*":
            resultado = num1 * num2;
            break;
        case "/":
            resultado = num1 / num2;
            break;
        default:
            console.log("Operação inválida.");
            return;
    }

    console.log(`Resultado da operação ${num1} ${operacao} ${num2} = ${resultado}`);
}

calculadora(5, 3);          
calculadora(10, 2, "-");     
calculadora(4, 6, "*");      
calculadora(12, 3, "/");    
calculadora(8, 2, "%");      
