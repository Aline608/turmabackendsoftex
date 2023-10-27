function divisao(numero1, numero2) {
  if (numero2 === 0) {
    return "Erro: Não é possível dividir por zero!";
  } else {
    return numero1 / numero2;
  }
}

console.log(divisao(20, 5));
console.log(divisao(4, 0));
console.log(divisao(16, 4));