// For
let soma = 0;
for (let i = 2; i <= 100; i += 2) {
    soma += i;
}
console.log("Soma dos 50 primeiros números pares (usando for):", soma);

//While
let soma = 0;
let i = 2;
while (i <= 100) {
    soma += i;
    i += 2;
}
console.log("Soma dos 50 primeiros números pares (usando while):", soma);

//Do While
let soma = 0;
let i = 2;
do {
    soma += i;
    i += 2;
} while (i <= 100);
console.log("Soma dos 50 primeiros números pares (usando do-while):", soma);


