//  Chiedo due parole
let word1 = prompt("Dimmi una parola");
let word2 = prompt("Dimmi un altra parola");
console.log(word1, word2);


// OUTPUT, quindi stampo entrambe se hanno la stessa lumghezza, altrimenti la più lunga
if (checkLength(word1, word2)) {
    printResult(`${word1} ${word2}`)
} else {
    
}
