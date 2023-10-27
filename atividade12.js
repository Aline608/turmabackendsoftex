function divisao(numero1, numero2) {
    if (numero2 === 0) {
      return "Erro: Não é possível dividir por zero!";
    } else {
      return numero1 / numero2;
    }
  }
  
  
  let resultado = divisao(10, 2);
  
  console.log(resultado); 
  