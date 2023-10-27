const estudantes = { alice: 18, bob: 20, carol: 19, david: 21 };

for (var nome in estudantes) {
    if (estudantes[nome] === 19) {
        console.log(nome + ": " + estudantes[nome] + " anos");
    }
}
