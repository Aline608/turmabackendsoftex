const pontos = [
    [2, 5, 8],
    [3, 9, 12],
    [4, 6, 10]
  ];
  
  var somaTotal = 0;
  
  for (var i = 0; i < pontos.length; i++) {
    for (var j = 0; j < pontos[i].length; j++) {
      somaTotal += pontos[i][j];
    }
  }
  
  console.log("A soma total dos elementos da matriz é:", somaTotal);
  