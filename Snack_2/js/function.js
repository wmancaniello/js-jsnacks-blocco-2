/**
 * Descrizione: Funzione per controllare se le parole sono lunghe uguali.
 * @param {string} word1
 * @param {string} word2
 * @returns {boolean}
 */
function checkLength(word1, word2) {
  if (word1.length === word2.length) {
    return true;
  } else {
    return false;
  }
}

/**
 * Descrizione:  Stampare in pagina
 * @param {string} check
 */
function printResult(check) {
  const resultElem = document.getElementById("result");
  console.log(resultElem);

  resultElem.innerHTML += `${check}`;
}
