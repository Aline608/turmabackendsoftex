const readline = require('readline-sync');


function calcularMedia(notas) {
    const totalNotas = notas.reduce((sum, nota) => sum + nota, 0);
    return totalNotas / notas.length;
}


const nomeAluno = readline.question("Digite o nome do aluno: ");


const notas = [];
for (let i = 1; i <= 3; i++) {
    const nota = parseFloat(readline.question(`Digite a nota ${i}: `));
    notas.push(nota);
}


const media = calcularMedia(notas);


console.log(`Aluno: ${nomeAluno}`);
console.log(`Média: ${media.toFixed(2)}`);
