const readline = require('readline-sync');

const taxaHoraNormal = 10.00;
const taxaHoraExtra = 15.00;

const horasNormais = parseFloat(readline.question("Digite o total de horas normais trabalhadas em um ano: "));
const horasExtras = parseFloat(readline.question("Digite o total de horas extras trabalhadas em um ano: "));


const salarioNormal = horasNormais * taxaHoraNormal;
const salarioExtra = horasExtras * taxaHoraExtra;
const salarioAnual = salarioNormal + salarioExtra;

console.log(`O salário anual do trabalhador é R$ ${salarioAnual.toFixed(2)}`);
