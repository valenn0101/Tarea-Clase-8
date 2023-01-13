function obtenerSalarioMayor(numeros) {
  let numeroMayor = numeros[0];
  for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > numeroMayor) {
      numeroMayor = numeros[i];
    }
  }

  return numeroMayor;
}

function obtenerSalarioMenor(numeros) {
  let menorNumero = numeros[0];
  for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] < menorNumero) {
      menorNumero = numeros[i];
    }
  }

  return menorNumero;
}

function obtenerPromedioAnual(numeros) {
  let acumulador = 0;
  for (let i = 0; i < numeros.length; i++) {
    acumulador += numeros[i];
  }

  return (acumulador / numeros.length).toFixed(2);
}

