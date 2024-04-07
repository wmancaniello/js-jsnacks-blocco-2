//  Scrivere una funzione rimuoviDallaCoda() che
//      dato un array A in input,
//      restituisca un nuovo array B,
//      con tutti gli elementi dell'array A, tranne l'ultimo

/**
 * Descrizione: Funzione che crea un nuovo array con tutti gli elementi dell'array iniziale, tranne l'ultimo elemento.
 * @param {Array} array - array iniziale
 * @returns {Array} - nuovo array, uguale a quello iniziale, escluso ultimo elemento
 */
function rimuoviDallaCoda(array) {
    // slice(), copia l'array originale escludendo l'ultimo elemento, 0 è la partenza dall'inizio, array.length - 1 è la fine con l'esclusione.
    return array.slice(0, array.length - 1);
}
