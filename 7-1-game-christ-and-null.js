const content = document.querySelector(".content");

const wins = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];

const stepX = [];
const step0 = [];

let player = "X";

function createMarkup() {
  let markup = "";

  for (let i = 1; i <= 9; i += 1) {
    markup += `<div class='item' data-id = '${i}'></div>`;
  }
  content.innerHTML = markup;
}

createMarkup();

content.addEventListener("click", onClick);

function onClick(evt) {
  //   console.log(evt.target);
  // перевірка на делегування (робити окреемо)
  if (!evt.target.classList.contains("item")) {
    return;
  }
  // перевірка на наявність заповненності
  if (evt.target.textContent) {
    return;
  }

  const currentID = Number(evt.target.dataset.id);

  let result = false;

  if (player === "X") {
    stepX.push(currentID);
    result = isWinner(stepX);
  } else {
    step0.push(currentID);
    result = isWinner(step0);
  }
  evt.target.textContent = player;

  if (result) {
    chempion(player);
    return;
  }

  player = player === "X" ? "0" : "X";
}

//? приклад розгорнутої перевірки
// function isWinner(arr) {
//     console.log("історія ходів", arr);
//     return wins.some(item => {
//         console.log("item", item);
//         const result = item.every(id => {
//             console.log("id", id);
//             return arr.includes(id)
//         })
//         console.log('result',result);
//         return result
//     })
// }

function isWinner(arr) {
  return wins.some((item) => item.every((id) => arr.includes(id)));
}

function chempion(player) {
  setTimeout(() => {
    alert(`WINNER ${player}`);
    createMarkup();
  }, 500);
}
