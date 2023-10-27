function calcularIMC(peso, altura) {
    const imc = peso / (altura * altura);
    return imc;
}

const peso = 67;    
const altura = 1.70; 

const imc = calcularIMC(peso, altura);
console.log(`O IMC é: ${imc.toFixed(2)}`); 

