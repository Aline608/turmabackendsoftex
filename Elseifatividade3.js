function classificarNumero(numero) {
    if (numero < 0) {
      console.log("O número é negativo.");
    } else if (numero === 0) {
      console.log("O número é zero.");
    } else {
      console.log("O número é positivo.");
    }
  
    if (numero % 2 === 0) {
      console.log("O número é par.");
    } else {
      console.log("O número é ímpar.");
    }
  }
  
 
  
  classificarNumero(-5);   
  classificarNumero(0);    
  classificarNumero(10);   
  classificarNumero(7);    
  