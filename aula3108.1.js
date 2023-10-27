const readline = require('readline-sync');

const ano = parseInt(readline.question("Digite um ano: "));

function ehBissexto(ano) {
    return (ano % 400 === 0) || ((ano % 4 === 0) && (ano % 100 !== 0));
}

if (ehBissexto(ano)) {
    console.log(`${ano} é um ano bissexto.`);
} else {
    console.log(`${ano} não é um ano bissexto.`);
}
