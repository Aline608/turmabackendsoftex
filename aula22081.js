var objetoValores = {a: 10, b: 20, c: 30, d: 40};
var soma = 0;

for (var chave in objetoValores) {
    if (objetoValores.hasOwnProperty(chave)) {
        soma += objetoValores[chave];
    }
}

console.log("A soma dos valores é:", soma);
