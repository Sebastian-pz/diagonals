const n = 1003;

const array = [];

// Llenar el arreglo inicial con otros arreglos (matriz 2x2)
for (let i = 0; i < n; i++) {
  array.push([]);
  for (let y = 0; y < n; y++) {
    array[i].push([]);
  }
}

let limit = n - 1;
let init = 0;
let current = Math.pow(n, 2);

// Crear espiral
while (current > 0) {
  for (let i = limit; i >= init; i--) {
    array[init][i] = current;
    current--;
  }

  for (let i = init + 1; i <= limit; i++) {
    array[i][init] = current;
    current--;
  }

  for (let i = init + 1; i <= limit; i++) {
    array[limit][i] = current;
    current--;
  }

  for (let i = limit - 1; i >= init + 1; i--) {
    array[i][limit] = current;
    current--;
  }

  init++;
  limit--;
}

// Para imprimir la espiral en forma de tabla
function printSpiral(array) {
  for (let i = 0; i < n; i++) {
    console.log(array[i]);
  }
}

// Para obtener la suma de las diagonales de la matriz
function getSum(array) {
  const max = array.length;
  let firstDiagonal = 0;
  let secondDiagonal = 0;

  let y = max - 1;
  for (let i = 0; i < max; i++) {
    firstDiagonal += array[i][y--];
  }
  y = 0;
  for (let i = 0; i < max; i++) {
    secondDiagonal += array[i][y++];
  }
  // -1 porque la las diagonales tienen su intersección ahí (se suma 2 veces)
  console.log(
    `Primera diagonal: ${firstDiagonal}, Segunda diagonal: ${secondDiagonal}, Suma: ${
      firstDiagonal + secondDiagonal - 1
    }`
  );
}
// printSpiral(array);
getSum(array);

// expected output
// Primera diagonal: 336846015, Segunda diagonal: 336343011, Suma: 673189025
