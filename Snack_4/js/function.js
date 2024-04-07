//  scrivere una funzione trovaIndice() che, 
//      dati un array e un elemento in input, restituisca la posizione in cui si trova l'elemento all'interno dell'array;
//          se l'elemento non è presente nell'array, 
//          allora la funzione deve restituire -1

/**
 * Description
 * @param {any} array
 * @param {any} elem
 * @returns {any}
 */
function trovaIndice(array, elem) {
    //  indexOf() 
    //Prende un elemento e lo cerca all'interno dell'array. 
    //  Se trova l'elemento, restituisce l'indice della prima occorrenza di quell'elemento.
    //  Se non lo trova, restituisce -1, indicando che l'elemento non è presente nell'array.
    return array.indexOf(elem);
}