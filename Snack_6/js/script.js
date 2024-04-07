// RACCOLTA DATI:
//             0   1   2   3   4   5
const array = [42, 52, 62, 72, 82, 92];
console.log(`L'array iniziale è ${array}`);

// Applico la funzione:
const newArray = rimuoviDallaCoda(array);
console.log(`Il nuovo array è ${newArray}`);

// Riapplico sul nuovo
const newNewArray = rimuoviDallaCoda(newArray);
console.log(`Ulteriore applicazione: ${newNewArray}`);
