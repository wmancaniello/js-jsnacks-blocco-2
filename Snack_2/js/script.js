//  Chiedo due parole
const userWord1 = prompt("Dimmi una parola");
const userWord2 = prompt("Dimmi un altra parola");
// console.log(userWord1, userWord2);

let message = "";

if (sameLength(userWord1, userWord2)) {
  message = `Le due parole hanno la stessa lunghezza: ${userWord1} e ${userWord2}`;
} else {
  const longest = getLongestWord(userWord1, userWord2);
  message = `la parola più lunga è: ${longest}`;
}

document.getElementById("result").innerHTML = message;