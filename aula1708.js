const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite um número: ', (numero) => {
  try {
    const resultado = 10 / parseFloat(numero);
    console.log('Resultado:', resultado);
  } catch (error) {
    if (error instanceof TypeError || error instanceof SyntaxError) {
      console.log('Erro: Valor inválido');
    } else if (error instanceof RangeError) {
      console.log('Erro: Divisão por zero');
    } else {
      console.log('Erro inesperado:', error.message);
    }
  }

  rl.close();
});
