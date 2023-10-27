// Solicitar ao usuário que digite um número inteiro
const numero = (parseInt("Digite um número inteiro:"));

// Verificar se o número digitado é válido
if (isNaN(numero)) {
    console.log("Por favor, digite um número válido.");
} else {
    console.log(`Tabuada do ${numero}:`);

    // Calcular e imprimir a tabuada do 2, 3 e 5
    for (let i = 1; i <= 10; i++) {
        const tabuada2 = numero * 2;
        const tabuada3 = numero * 3;
        const tabuada5 = numero * 5;

        console.log(`${numero} x ${i} = ${tabuada2}`);
        console.log(`${numero} x ${i} = ${tabuada3}`);
        console.log(`${numero} x ${i} = ${tabuada5}`);
    }
}




