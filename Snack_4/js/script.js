//   dati un array e un elemento in input, restituisca la posizione in cui si trova l'elemento all'interno dell'array;
//     se l'elemento non è presente nell'array,
//     allora la funzione deve restituire -1

// RACCOLTA DATI:

let textArea = document.getElementById("text-area");
let resultSearch = document.getElementById("result");
const searchBtn = document.getElementById("search-btn");

//  Array      0  1  2  3   4   5
const array = [4, 7, 8, 10, 13, 15];
console.log(array);

searchBtn.addEventListener("click", function () {

  //  number, altrimenti lo prende come stringa, quindi parseInt.
  let elem = parseInt(textArea.value);

  let position = trovaIndice(array, elem);
  // console.log(position);
  if (position !== -1) {
    resultSearch.innerHTML = `L'elemento da te selezionato ovvero ${elem} si trova nella posizione ${position} dell'array. `;
  } else {
    resultSearch.innerHTML = `L'elemento ${elem} non è presente nell'array.`;
  }
});
