function promedioResultadosTest(resultadosTest) {
    // "resultadosTest" debe ser una matriz de enteros (int/integers)
    // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
    // Tu código:
    let promedio = 0;
    for (let i = 0; i < resultadosTest.length; i++) {
      promedio += resultadosTest[i];
    }
  return promedio / resultadosTest.length;;
  }
  promedioResultadosTest(); 