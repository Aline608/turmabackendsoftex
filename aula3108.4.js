const readline = require('readline-sync');

const N = parseInt(readline.question("Digite um número N: "));


let contador = 1;
let numerosImpares = [];

while (numerosImpares.length < N) {
    if (contador % 2 !== 0) {
        numerosImpares.push(contador);
    }
    contador++;
}

console.log(`Os ${N} primeiros números naturais ímpares são: ${numerosImpares.join(', ')}`);
