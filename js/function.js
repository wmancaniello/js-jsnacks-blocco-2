/**
 * Descrizione:  La funzione genera un array di 10 elementi random.
 * @returns {array}
 */
function generateArray(param) {
  let nArray = [];

  for (let i = 0; i < 10; i++) {
    let numberInArray = getRndInteger(1, 100);

    nArray.push(numberInArray);
  }
  return nArray;
}

/**
 * Descrizione:  La funzione genera un numero random
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

/**
 * Descrizione:  stampare l'array in pagina
 * @param {array} arrayToPrint
 */
function printArray(arrayToPrint) {
  const resultElem = document.getElementById("result");
  console.log(resultElem);

  resultElem.innerHTML += `<li> ${arrayToPrint}</li>`;
}
