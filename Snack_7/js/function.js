//  Scrivere una funzione rimuoviDallaTesta() che
//      dato un array A in input, restituisca un nuovo array B,
//          con tutti gli elementi dell'array A, 
//              tranne quello in prima posizione





/**
 * @param {array} array - Array iniziale
 * @returns {array} - Nuovo array, escludendo l'element in prima posizione.
 */
function rimuoviDallaTesta(array) {
    // Utilizzo l'array originale, escludendo il primo elemento con slice(), 1 il valore della posizione dell'elemento da escludere.
    return array.slice(1);
}
