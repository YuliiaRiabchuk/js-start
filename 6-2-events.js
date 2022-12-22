// ? BOX DIV міняє положення на клік
// const box = document.querySelector(".js-box");

// console.log(box);

// box.addEventListener("click", onClick);
// let step = 50;
// function onClick(evt) {
//   console.log(evt.currentTarget);
//   step += 50;
//   evt.currentTarget.style.margin = `${step}px`;
// }

// ? КНОПКА

// const btn = document.querySelector(".js-show");
// const title = document.querySelector(".js-title");
// console.log(btn);
// console.log(title);

// btn.addEventListener("click", getTitle); /* { once: true } */

// function getTitle(evt) {
//   title.textContent = "Hello from JS 🚕";
//   //   evt.currentTarget.disabled = true;

//   btn.removeEventListener("click", getTitle);

//   console.log(evt.currentTarget);
// }

// ? SUBMIT
// const cars = [
//   {
//     id: 1,
//     model: "Honda",
//     type: "Civic",
//     price: 12000,
//     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCOHzdE-dK6WK7ax8NzQolTcCWA_jhJD-CRGWfqKJIJuGs8ML_-OyiDwzsdC8jOi_K10&usqp=CAU",
//   },
//   {
//     id: 2,
//     model: "Audi",
//     type: "Q7",
//     price: 40000,
//     img: "https://upload.wikimedia.org/wikipedia/commons/8/8b/2017_Audi_Q7_S_Line_Quattro_3.0_Front.jpg",
//   },
//   {
//     id: 3,
//     model: "BMW",
//     type: "5 siries",
//     price: 9000,
//     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUH96e58ynLO8SXMsFTNYkJci79eAZ8CyqcZsZ8snvzz2sfLl3Ojd1BQoaWBcrMKWvSYc&usqp=CAU",
//   },
//   {
//     id: 4,
//     model: "Honda",
//     type: "Accord",
//     price: 20000,
//     img: "https://upload.wikimedia.org/wikipedia/commons/7/76/2021_Honda_Accord_Sport_%28facelift%29%2C_front_11.30.21.jpg",
//   },
//   {
//     id: 5,
//     model: "Volvo",
//     type: "XC60",
//     price: 7000,
//     img: "https://www.volvocars.com/media/shared-assets/master/images/pages/my19/xc60-my19/accessories/xc60my19_accessories_exteriorfeature2_1.jpg?w=320",
//   },
// ];

// const form = document.querySelector(".js-search");
// const list = document.querySelector(".js-list");

// form.addEventListener("submit", OnSearch);

// function OnSearch(evt) {
//   evt.preventDefault();
//   console.dir(evt.currentTarget.elements.queryValue);

//   const { queryValue, selectValue } = evt.currentTarget.elements;
//   console.log(queryValue.value);
//   console.log(selectValue.value);

//   const searhResalt = cars.filter(
//     (item) => item[selectValue.value] === queryValue.value
//   );
//   console.log(searhResalt);
//   const markup = searhResalt
//     .map(
//       ({ model, type, price, img }) => ` <li>
//             <img src="${img}" alt="" width = "300"/>
//             <h2>${model}</h2>
//             <h3>${type}</h3>
//             <h4>${price}</h4>
//           </li>`
//     )
//     .join("");

//   list.innerHTML = markup;
// }

// ? ПОДІЯ ІНПУТА/ ПЕРЕВІРКА НА ПУСТИЙ РЯДОК
// const input = document.querySelector(".js-input");
// console.dir(input);
// input.addEventListener("input", onInput);

// function onInput(evt) {
//   const query = evt.currentTarget.value;
// "asd" => !true => false
//query => !false => true
//   if (!query) {
//     console.log("Пустий рядок");
//   }
// }

// ? ПОДІЯ КЛАВІАТУРИ

// document.addEventListener("keydown", onPress);

// function onPress(evt) {
//   const keyName = "KeyA";
//   if (evt.code === keyName) {
//     console.log("YEP");
//   }
//   console.log(evt);
// }

// document.addEventListener("keyup", onPress);

// function onPress(evt) {
//   const keyName = "KeyA";
//   if (evt.code === keyName) {
//     console.log("YEP");
//   }
//   console.log(evt);
// }

// ?не реагує на системні клавіші esc, tab, ctrl, shft
// document.addEventListener("keypress", onPress);

// function onPress(evt) {
//   const keyName = "KeyA";
//   if (evt.code === keyName) {
//     console.log("YEP");
//   }
//   console.log(evt);
// }

// ? КОМБІНАЦІЯ КЛАВІШ

// document.addEventListener("keyup", onPress);

// function onPress(evt) {
//   console.log(evt);
//   if (evt.ctrlKey && evt.code === "KeyV") {
//     alert("cntrl+v");
//   }
// }
