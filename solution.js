const start = performance.now();
// inicializo un contador para saber cuanto tardara en ejecutarse el script, esto es simplemente un agregado, ya que comprendo que no determina la complejidad de un algoritmo por verse afectado por factores externos como el hardware, su complejidad es determinada por la big o notation que en este caso es O(n^2).

function printChessboard(size) {
  try {
    if (typeof size !== "number" || size <= 0) {
      throw new Error("Se debe introducir un número positivo.");
    }

    // Limitando el tamaño máximo del tablero para evitar problemas de rendimiento
    const maxSize = 10000;
    if (size > maxSize) {
      throw new Error(
        "El tamaño del tablero es demasiado grande. Introduzca un tamaño menor."
      );
    }

    let row;
    for (let redCount = 1; redCount <= size; redCount++) {
      row = "";
      row += "R".repeat(redCount);
      row += "B".repeat(size - redCount);
      console.log(`${row}`);
    }
  } catch (error) {
    console.error(`Ha ocurrido un error: ${error.message}`);
  }
}

// Podes cambiar el número para ver distintos tamaños de tableros en consola.
printChessboard(10);

const end = performance.now();
console.log("Tiempo de ejecución:", end - start, "milisegundos");
