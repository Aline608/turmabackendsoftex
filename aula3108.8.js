const readline = require('readline-sync');

const numero1 = parseFloat(readline.question("Digite o primeiro número: "));
const numero2 = parseFloat(readline.question("Digite o segundo número: "));
const numero3 = parseFloat(readline.question("Digite o terceiro número: "));

function ordenarNumerosCrescente(a, b, c) {
    const numeros = [a, b, c];
    numeros.sort((x, y) => x - y);
    return numeros;
}

const numerosOrdenados = ordenarNumerosCrescente(numero1, numero2, numero3);

console.log("Números em ordem crescente:", numerosOrdenados.join(', '));
