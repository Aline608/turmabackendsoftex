var numeros = [12, 5, 8, 21, 16, 7];
var numerosPares = [];

for (var i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
        numerosPares.push(numeros[i]);
    }
}

console.log("Números pares:", numerosPares);
