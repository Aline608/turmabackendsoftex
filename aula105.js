function mensagemPersonalizada(texto, estilo = "normal") {
    switch (estilo) {
        case "normal":
            console.log(texto);
            break;
        case "negrito":
            console.log(`%c${texto}`, "font-weight: bold;");
            break;
        case "italico":
            console.log(`%c${texto}`, "font-style: italic;");
            break;
        default:
            console.log("Estilo de mensagem inválido.");
            break;
    }
}

mensagemPersonalizada("Esta é uma mensagem normal."); // Mensagem normal
mensagemPersonalizada("Esta é uma mensagem em negrito.", "negrito"); // Mensagem em negrito
mensagemPersonalizada("Esta é uma mensagem em itálico.", "italico"); // Mensagem em itálico
mensagemPersonalizada("Esta é uma mensagem com estilo inválido.", "invalido"); // Estilo de mensagem inválido
