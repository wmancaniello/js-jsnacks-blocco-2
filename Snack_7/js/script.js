//  RACCOLTA DATI
//             0   1   2   3   4   5   6   7
const array = [13, 23, 33, 43, 53, 63, 73, 83];
console.log(`L'array iniziale è ${array}`);

//  Applico la funzione
const newArray = rimuoviDallaTesta(array);
console.log(`Il nuovo array è: ${newArray}`);

//  Riapplico la funzione
const newNewArray = rimuoviDallaTesta(newArray);
console.log(`Il nuovo array sarà: ${newNewArray}`);
