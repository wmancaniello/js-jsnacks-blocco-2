// scrivere una funzione stampa() che
//      dato un array in input
//      restituisca una stringa contenente tutti gli elementi dell'array separati da una virgola.

/**
 * Descrizione: Funzione che restituisce una stringa contenente tutti gli elementi dell'array separati da una virgola.
 * @param {Array} array 
 * @returns {string}
 */
function stampa(array) {

    // Il metodo join() prende tutti gli elementi di un array e li unisce in una stringa,
    // Separando ciascun elemento con un separatore specifico,
    // In questo caso, join(', ') unisce gli elementi dell'array array con una virgola.

    return array.join(',');
}
