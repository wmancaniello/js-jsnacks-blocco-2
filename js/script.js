// Chiedo numero all'utente
// Finchè non raggiungi il numero N, devi creare un Array e stamparlo a schermo

let N = parseInt(prompt("Dimmi un numero"));
console.log(N);

for (let i = 0; i < N; i++) {
    let newArray = generateArray()
    printArray(newArray)
    console.log(newArray);    
}
