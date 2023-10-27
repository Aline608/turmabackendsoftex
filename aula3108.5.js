const readline = require('readline-sync');

const taxaPorDia = 30.00;

const diasTrabalhados = parseInt(readline.question("Digite o número de dias trabalhados: "));

const valorBruto = diasTrabalhados * taxaPorDia;

const desconto = valorBruto * 0.08;

const valorLiquido = valorBruto - desconto;

console.log(`O valor líquido a ser pago é R$ ${valorLiquido.toFixed(2)}`);
