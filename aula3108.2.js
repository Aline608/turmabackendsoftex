const readline = require('readline-sync');

const impostosPorEstado = {
    MG: 0.07,
    SP: 0.12,
    RJ: 0.15,
    MS: 0.08
};


const valorProduto = parseFloat(readline.question("Digite o valor do produto: "));
const estadoDestino = readline.question("Digite o estado destino (MG, SP, RJ ou MS): ").toUpperCase();

if (impostosPorEstado.hasOwnProperty(estadoDestino)) {
    const imposto = impostosPorEstado[estadoDestino];
    const precoFinal = valorProduto * (1 + imposto);
    console.log(`O preço final do produto no estado ${estadoDestino} é R$ ${precoFinal.toFixed(2)}`);
} else {
    console.log("Estado destino inválido. Por favor, insira um estado válido.");
}
