// const id = setTimeout(() => {
//   for (let i = 0; i < 3; i += 1) {
//     console.log("for setTimeout", i);
//   }
// }, 1000);

// console.log(id);

// const id2 = setInterval(() => {
//   for (let i = 0; i < 3; i += 1) {
//     console.log("for setInterval", i);
//   }
// }, 1000);

// clearInterval(id2);

// console.log(id2);

// ? приклад спам текст ІНТЕРВАЛ

// const spam = document.querySelector(".js-spam");
// const clock = document.querySelector(".js-clock");
// const testButton = document.querySelector(".js-test");
// const timeEnd = 7000;

// testButton.addEventListener("click", onclick);

// clock.textContent = `Реклама зникне через 7`;
// let count = 7;

// const id2 = setInterval(() => {
//   count -= 1;
//   clock.textContent = `Реклама зникне через ${count}`;
// }, 1000);

// const id = setTimeout(() => {
//   spam.textContent = "";
//   clock.textContent = "";
//   clearInterval(id2);
// }, timeEnd);

// function onclick() {
//   console.log("I`m click on button");
//   spam.textContent = "";
//   clock.textContent = "";
//   clearInterval(id2);
// }
