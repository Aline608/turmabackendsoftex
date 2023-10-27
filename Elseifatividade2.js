function classificarVariavel(dado) {
    const tipoDado = typeof dado;
  
    if (tipoDado === "boolean") {
      console.log("A variável é do tipo booleana.");
    } else if (tipoDado === "number") {
      console.log("A variável é do tipo numérica.");
    } else if (tipoDado === "string") {
      console.log("A variável é do tipo string.");
    } else {
      console.log("A variável é indefinida.");
    }
  }
  
  
  
  classificarVariavel(true);       
  classificarVariavel(35);         
  classificarVariavel("Olá");       
  classificarVariavel(undefined);   
  