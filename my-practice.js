// const a = 6;
// console.log(a);

// const courseTopic = "JavaScript essentials";
// // Change code below this line

// const courseTopicLength = courseTopic.length;
// const firstElement = courseTopic[0];
// const lastElement = courseTopic[19];

// console.log(courseTopicLength);
// console.log(firstElement);
// console.log(lastElement);

// Change code above this line

// function formatMessage(message, maxLength) {
//   let result;
//   // Change code below this line
//   if (message.length <= maxLength) {
//     result = message;
//   } else {
//     result = message.slice(0, maxLength) + "...";
//   }
//   /// Change code above this line
//   return result;
// }

//   result =
//     message.length <= maxLength ? message : message.slice(0, maxLength) + "...";

//   return result;
// }

// console.log(formatMessage("Vestibulum facilisis purus nec", 30));

// function checkForName(fullName, name) {
//   const result = fullName.includes(name); // Change this line
//   return result;
// }
// prompt(checkForName("Petrenko Vasya"));

// for (initialization; condition; post - expression) {
//   // statements
// }

// for (let i = 0; i <= 20; i += 5) {
//   console.log(i);
// }

// for (let i = 0; i <= 100; i += 1) {
//   console.log(i);
// }

// for (let i = 50; i <= 100; i += 5) {
//   console.log(i);
// }

// for (let i = 100; i >= 0; i -= 1) {
//   console.log(i);
// }

// for (let i = 50; i <= 100; i += 10) {
//   console.log(i);
// }

// for (let i = 1000; i >= 500; i -= 100) {
//   console.log(i);
// }

// for (let i = 50; i >= 0; i -= 5) {
//   console.log(i);
// }

// for (let i = 2000; i <= 10000; i += 200) {
//   console.log(i);
// }

// Введіть рядок в prompt
// Виведіть кількість голосних букв в цьому рядку

// const string = prompt("Hello World!");

// let total = 0;

// for (let i = 0; i < string.length; i += 1) {
//   console.log(string[i]);

//   const letter = string[i];

//   if (
//     letter === "a" ||
//     letter === "e" ||
//     letter === "o" ||
//     letter === "u" ||
//     letter === "i"
//   ) {
//     total += 1;
//   }
// }

// const str = "aeouiy";

// for (let i = 0; i < string.length; i += 1) {
//   if (-1 != str.indexOf(string[i])) {
//     total++;
//   }
// }

// console.log(total);

// const string = prompt("Hello World!");

// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   // Change code below this line

//   if (password === ADMIN_PASSWORD) {
//     return "Welcome!";
//   }

//   return "Access denied, wrong password!";
//   // Change code above this line
// }

// console.log(checkPassword(string));

// function checkStorage(available, ordered) {
//   // Change code below this line

//   if (ordered === 0) {
//     return "Your order is empty!";
//   }

//   if (ordered > available) {
//     return "Your order is too large, not enough goods in stock!";
//   }
//   return "The order is accepted, our manager will contact you";

//   // Change code above this line
// }

// console.log(checkStorage(100, 0));

// const fruits = ["apple", "plum", "pear", "orange"];
// // const lastElement = fruits.length - 1;
// // console.log(lastElement);
// // console.log(fruits[0]);

// const firstElement = fruits[0];
// const secondElement = fruits[1];
// const lastElement = fruits[fruits.length - 1];

// console.log(secondElement);

// const a = "Mango is orange Multi";
// console.log(a.split("")); // ["M", "a", "n", "g", "o"]

// console.log(a.split("M"));
// console.log(a.split("a"));

// console.log(a.split("Man"));

// function calculateEngravingPrice(message, pricePerWord) {
//   // Change code below this line
//   const array = message.split(" ");

//   const lengthArray = array.length;

//   return lengthArray * pricePerWord;
// }

// console.log(calculateEngravingPrice("Прівет Олег", 10));

// const fruits = ["apple", "plum", "pear", "orange", "banana"];

// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, fruits.length - 1);
// const lastThreeEls = fruits.slice(fruits.length - 3);

// console.log(firstTwoEls);
// console.log(nonExtremeEls);
// console.log(lastThreeEls);

// function makeArray(firstArray, secondArray, maxLength) {
//   const newArray = firstArray.concat(secondArray);
//   console.log(newArray);

//   return newArray.slice(0, maxLength);
// }

// console.log(
//   makeArray(
//     ["Mango", "Poly", "Houston", "Shmoli", "Sveta"],
//     ["Ajax", "Banana", "Chelsea"],
//     5
//   )
// );

// function calculateTotal(number) {
//   // Change code below this line
//   let sum = 0;

//   for (let i = 0; i <= number; i += 1) {
//     sum += i;
//   }
//   return sum;
//   // Change code above this line
// }
// console.log(calculateTotal(3));

// const fruits = ["apple", "plum", "pear", "orange"];

// for (let i = 0; i < fruits.length; i += 1) {
//   // Change this line
//   const fruit = fruits[i]; // Change this line
//   console.log(fruit);
// }

// Напиши функцію findLongestWord(string), яка приймає довільний рядок, що складається тільки зі слів, розділених пробілом (параметр string), і повертає найдовше слово в цьому рядку.

// function findLongestWord(string) {
//   const words = string.split(" ");
//   let maxWord = "";

//   for (let i = 0; i < words.length; i += 1) {
//     const word = words[i].length;
//     console.log(word);

//     maxWord = maxWord.length > word ? maxWord : words[i];
//   }

//   return maxWord;
// }

// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));

// function findLongestWord(string) {
//   // Change code below this line

//   const arrayWords = string.split(" ");
//   console.log(arrayWords);
//   let maxWord = "";

//   for (let i = 0; i < arrayWords.length; i += 1) {
//     const wordLength = arrayWords[i].length;

//     console.log(wordLength);

//     if (maxWord.length < wordLength) {
//       maxWord = arrayWords[i];
//     }
//   }
//   return maxWord;
// }

// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));

// function checkFruit(fruit) {
//   const fruits = ["apple", "plum", "pear", "orange"];
//   return fruits.includes(fruit);
// }

// console.log(checkFruit("Oleg"));

// Напиши функцію getCommonElements(array1, array2), яка отримує два масиви довільної довжини в параметри array1 і array2, і повертає новий масив, що складається з тих елементів, які присутні в обох вихідних масивах.

// function getCommonElements(array1, array2) {
//   const array3 = [];

//   for (let i = 0; i < array1.length; i += 1) {
//     if (array2.includes(array1[i])) {
//       array3.push(array1[i]);
//     }
//   }

//   return array3;
// }
// console.log(getCommonElements([1, 2, 4, 3], [2, 4]));

// for (const variable of iterable) {
// тіло циклу

// function getCommonElements(array1, array2) {
//   const array3 = [];
//   for (const number of array1) {
//     if (array2.includes(number)) {
//       array3.push(number);
//     }
//   }
//   return array3;
// }
// console.log(getCommonElements([1, 2, 4, 3], [2, 4]));

// function includes(array, value) {
//   // Change code below this line

//   for (const word of array) {
//     if (word === value) {
//       return true;
//     }
//   }
//   return false;
//   // Change code above this line
// }
// console.log(includes([1, 2, 6], 2));

// const clients = ["Mango", "Poly", "Ajax"];
// const lastElementIndex = clients.length - 1;
// // console.log(lastElementIndex);
// // console.log(clients[lastElementIndex]);
// console.log(clients.length - 1);
// console.log(clients[clients.length - 1]);

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };
// // const lastitemteg = apartment.tags.length - 1;
// // Change code below this line
// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[apartment.tags.length - 1];

// // Change code above this line

// alert(lastTag);

// OBJECT

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };

// const keys = [];
// const values = [];
// // Change code below this line

// for (const key in apartment) {
//   console.log(key);
//   console.log(apartment[key]);
//   keys.push(key);
//   values.push(apartment[key]);
// }

// console.log(keys);
// console.log(values);

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Change code below this line
// const keys = Object.keys(apartment);
// console.log(values);

// for (const key of keys) {
//   values.push(apartment[key]);
// }

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line

// for (let color of colors) {
//   console.log(color.rgb);
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
// }

// console.log(hexColors);
// console.log(rgbColors);

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// завдання 1.01
// function getProductPrice(productName) {
//   // Change code below this line
//   for (let product of products) {
//     if (product.name === productName) {
//       return product.price;
//     }
//   }
//   return null;
//   // Change code above this line
// }

// console.log(getProductPrice("Radar"));
// console.log(getProductPrice("Droid"));
// console.log(getProductPrice("anDroid"));

// завдання 1.02
// Напиши функцію getAllPropValues(propName), яка приймає один параметр propName - ім'я (ключ) властивості. Функція повинна повернути масив всіх значень властивості з таким ім'ям з кожного об'єкта в масиві products. Якщо в об'єктах відсутні властивості з таким ім'ям, функція повинна повернути порожній масив.

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   let arrayProperties = [];

//   for (const productName of products) {
//     const keys = Object.keys(productName);

//     // console.log(productName);

//     if (keys.includes(propName)) {
//       arrayProperties.push(productName[propName]);
//     }
//   }
//   return arrayProperties;
// }

// console.log(getAllPropValues("name"));
// console.log(getAllPropValues("quantity"));
// console.log(getAllPropValues("price"));
// console.log(getAllPropValues("category"));

// завдання 1.03

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   //   let totalPrice = "";
//   const arrayNames = [];

//   for (const product of products) {
//     // console.log(product.name);
//     arrayNames.push(product.name);
//     // console.log(arrayNames);

//     if (arrayNames.includes(productName)) {
//       return product.price * product.quantity;
//     }
//   }
// }

// console.log(calculateTotalPrice("Droid"));
// console.log(calculateTotalPrice("Grip"));
// console.log(calculateTotalPrice("Scanner"));
// console.log(calculateTotalPrice("Blaster"));

// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// Change code below this line

// const highToday = forecast.today.high;
// const lowToday = forecast.today.low;
// const todayIcon = forecast.today.icon;
// const highTomorrow = forecast.tomorrow.high;
// const lowTomorrow = forecast.tomorrow.low;
// const tomorrowIcon = forecast.tomorrow.icon;
// const {
//   today: {
//     low: lowToday,
//     high: highToday,
//     icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
//   },
//   tomorrow: {
//     low: lowTomorrow,
//     high: highTomorrow,
//     icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
//   },
// } = forecast;

// console.log(lowToday, highToday, lowTomorrow, highTomorrow);

// Використовуючи операцію rest, доповни код функції add()
// таким чином, щоб вона приймала будь - яку кількість аргументів,
// рахувала і повертала їх суму.

// function add(...args) {
//   console.log(args);
//   let total = 0;

//   for (let i = 0; i < args.length; i += 1) {
//     total += args[i];

//     // console.log(total);
//   }

//   return total;
// }

// function add(...args) {
//   let total = 0;

//   for (const arg of args) {
//     total += arg;
//   }
//   return total;
// }

// console.log(add(15, 27));
// console.log(add(12, 4, 11, 48));
// console.log(add(32, 6, 13, 19, 8));
// console.log(add(74, 11, 62, 46, 12, 36));

// function makeTask(data) {
//   const completed = false;
//   const category = "General";
//   const priority = "Normal";
//   // Change code below this line
//   const newData = { completed, category, priority, ...data };
//   return newData;
// }

// console.log(
//   makeTask({
//     category: "Homemade",
//     priority: "Low",
//     text: "Take out the trash",
//   })
// );

// console.log(makeTask({ category: "Finance", text: "Take interest" }));

// Функція addOverNum() рахує суму всіх аргументів.
// Зміни параметри і тіло функції addOverNum() таким чином,
// щоб вона рахувала суму тільки тих аргументів,
// які більші за задане число.Це число повинно бути першим параметром
// функції.

// function addOverNum(firstNumber, ...args) {
//   let total = 0;
//   //   console.log(firstNumber);

//   for (const arg of args) {
//     if (arg > firstNumber) {
//       total += arg;
//     }
//   }
//   return total;
//   // Change code above this line
// }

// console.log(addOverNum(50, 15, 27));
// console.log(addOverNum(10, 12, 4, 11, 48, 10, 8));
// console.log(addOverNum(15, 32, 6, 13, 19, 8));
// console.log(addOverNum(20, 74, 11, 62, 46, 12, 36));

// Функція findMatches() приймає довільну кількість аргументів.
// Першим аргументом завжди буде масив чисел, а решта аргументів
// будуть просто числами.

// Доповни код функції таким чином, щоб вона повертала новий масив
// matches, в якому будуть тільки ті аргументи, починаючи з
// другого, які є в масиві першого аргументу.

// Наприклад, findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7) повинна
// повернути масив[1, 2], тому що тільки вони є в масиві першого
// аргументу.

// function findMatches([...arrayArgs], ...numberArgs) {
//   const matches = [];

//   //   console.log(arrayArgs);
//   //   console.log(numberArgs);

//   for (const arg of arrayArgs) {
//     if (numberArgs.includes(arg)) {
//       matches.push(arg);
//     }
//   }
//   return matches;
// }

// console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7));
// console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2));
// console.log(findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41));
// console.log(findMatches([63, 11, 8, 29], 4, 7, 16));

// Додай об'єкту bookShelf ще два методи, які поки що будуть
// повертати просто рядки за аналогією з getBooks() і
// addBook(bookName).

// Метод removeBook(bookName) буде видаляти книгу за назвою.
// Повертає рядок "Deleting book <назва книги>",
// де < назва книги > - це значення параметра bookName.

// Метод updateBook(oldName, newName) буде оновлювати назву книги
// на нову.Повертає рядок "Updating book <стара назва> to <нова назва>",
// де < стара назва > і < нова назва > - це значення
// параметрів oldName і newName відповідно.

// const bookShelf = {

//   books: ["The last kingdom", "The guardian of dreams"],
//   getBooks() {
//     return "Returning all books";
//   },
//   addBook(bookName) {
//     return `Adding book ${bookName}`;
//   },
//   removeBook(bookName) {
//     return `Deleting book ${bookName}`;
//   },
//   updateBook(oldName, newName) {
//     return `Updating book ${oldName} to ${newName}`;
//   },
// };

// console.log(bookShelf.addBook("Haze"));
// console.log(bookShelf.removeBook("Red sunset"));
// console.log(bookShelf.updateBook("Sands of dune", "Dune"));

// Доповни метод updateBook(oldName, newName) таким чином,
//  щоб він змінював назву книги з oldName на newName у властивості
// books.Використовуй indexOf() для того, щоб знайти потрібний елемент
// масиву, і splice() для того, щоб замінити цей елемент.

// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//   updateBook(oldName, newName) {
//     const bookIndex = this.books.indexOf(oldName);
//     this.books.splice(bookIndex, 1, newName);

//     return this.books;
//   },
// };

// // console.log(bookShelf.updateBook("Haze", "Dungeon chronicles"));
// console.log(bookShelf.updateBook("The last kingdom", "Dune"));

//
//
//
//
//! ЦІКАВА ЗАДАЧА!!!!!
//
//
//

// TODO Виконай рефакторинг методів об'єкта
// atTheOldToad таким чином, щоб вони працювали не з масивом рядків,
// а з масивом об'єктів.

// getPotions() - метод для отримання всього зілля.
//  Повертає значення властивості potions.

// addPotion(newPotion) - додає зілля newPotion (вже об'єкт) в
// масив у властивості potions, але тільки, якщо такого зілля ще
// немає в інвентарі.В іншому випадку повертається рядок.

// removePotion(potionName) - видаляє об'єкт зілля з ім'ям
// potionName з масиву у властивості potions.

// updatePotionName(oldName, newName) - оновлює властивість name
// об'єкта-зілля з назвою oldName на newName в масиві potions.

//

// Потрібно написати функцію, яка приймає 1 параметр key і буде перевіряти
// чи має об'єкт  такий ключ - поверне true, інакше false

// ?/* ********************************************************* */

//? посилання на функцію

// function makePizza() {
//   return "Your pizza is being prepared, please wait.";
// }

// const result = makePizza();
// const pointer = makePizza;

// console.log(result);
// console.log(pointer);

// ?   автоперевірка

/* // function changeEven(numbers, value) {
//   const total = [];
//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] % 2 === 0) {
//       numbers[i] += value;
//       total.push(numbers[i]);
//     }
//   }
//   return total;
// }

const changeEven = (numbers, value) => {
  const total = [];

  numbers.forEach((number) => {
    if (number % 2 === 0) {
      total.push(number + value);
    } else {
      total.push(number);
    }
  });
  return total;
};

console.log(changeEven([1, 2, 3, 4, 5], 10));
console.log(changeEven([2, 8, 3, 7, 4, 6], 10));
 */

// import { galleryItems } from "./gallery-items.js";
// // Change code below this line

// console.log(galleryItems);

// const gallery = document.querySelector(".gallery");

// const imgMarkup = createMarkup(galleryItems);

// gallery.insertAdjacentHTML("beforeend", imgMarkup);
// gallery.addEventListener("click", onImgClick);

// function createMarkup(items) {
//   return items
//     .map((item) => {
//       return `<div class="gallery__item">
//         <a class="gallery__link" href="${item.original}">
//           <img class="gallery__image" data-source="${item.original}" data-pictureDesc="${item.description}" src="${item.preview}" alt="${item.description}" />
//         </a>
//       </div>`;
//     })
//     .join("");
// }

// function onImgClick(evt) {
//   if (!evt.target.classList.contains("gallery__image")) {
//     return;
//   }
//   evt.preventDefault();

//   window.addEventListener("keydown", onEscBtnPress);

//   const instance = basicLightbox.create(
//     `<img src="${evt.target.dataset.source}" alt="${evt.target.dataset.picturedesc}" />`
//   );
//   instance.show();

//   function onEscBtnPress(evt) {
//     if (evt.code === "Escape") {
//       instance.close();
//       window.removeEventListener("keydown", onEscBtnPress);
//     }
//   }
// }

// const dogs = {
//   Fido: "Mutt",
//   Hunter: "Doberman",
//   Snoopie: "Beagle",
// };

// const myDog = "Hunter";
// const myBreed = dogs[myDog];
// console.log(myBreed);
// console.log(dogs);

// const article = {
//   title: "How to create objects in JavaScript",
//   link: "https://www.freecodecamp.org/news/a-complete-guide-to-creating-objects-in-javascript-b0e2450655e8/",
//   author: "Kaashan Hussain",
//   language: "JavaScript",
//   tags: "TECHNOLOGY",
//   createdAt: "NOVEMBER 28, 2018",
// };

// const articleAuthor = article["author"];
// const articleLink = article["link"];

// const value = "title";
// const valueLookup = article[value];

// console.log("author");
// ?автоперевірка switch

// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;
//   // Change code below this line

//   switch (password) {
//     case null:
//       message = "Canceled by user!";
//       break;

//     case ADMIN_PASSWORD:
//       message = "Welcome!";
//       break;

//     default:
//       message = "Access denied, wrong password!";
//   }

// if (password === null) {
//   message = "Canceled by user!";
// } else if (password === ADMIN_PASSWORD) {
//   message = "Welcome!";
// } else {
//   message = "Access denied, wrong password!";
// }

// Change code above this line
//   return message;
// }

// console.log(checkPassword("mangohackzor"));
// console.log(checkPassword(null));
// console.log(checkPassword("polyhax"));
// console.log(checkPassword("jqueryismyjam"));

// function getShippingCost(country) {
//   let message;
// Change code below this line
//   switch (country) {
//     case "China":
//       message = 100;
//       break;
//     case "Chile":
//       message = 250;
//       break;
//     case "Australia":
//       message = 170;
//       break;

//     case "Jamaica":
//       message = 120;
//       break;

//     default:
//       message = "Sorry, there is no delivery to your country";
//   }
//   // Change code above this line
//   return message;
// }

// console.log(getShippingCost("Australia"));
// console.log(getShippingCost("China"));
// console.log(getShippingCost("Chile"));
// console.log(getShippingCost("Jamaica"));

// function getSubstring(string, length) {
//   const substring = string.slice(0, length); // Change this line

//   return substring;
// }

// console.log(getSubstring("Hello world", 3));
// console.log(getSubstring("Hello world", 6));
// console.log(getSubstring("Hello world", 8));
// console.log(getSubstring("Hello world", 11));

// const pizzaPalace = {
//   pizzas: ["Supercheese", "Smoked", "Four meats"],
//   // Change code below this line
//   checkPizza(pizzaName) {
//     return this.pizzas.includes(pizzaName);
//   },
//   order(pizzaName) {
//     const isPizzaAvailable = this.checkPizza(pizzaName);

//     if (!isPizzaAvailable) {
//       return `Sorry, there is no pizza named «${pizzaName}»`;
//     }

//     return `Order accepted, preparing «${pizzaName}» pizza`;
//   },
//   // Change code above this line
// };

// console.log(pizzaPalace.order("Smoked"));
// console.log(pizzaPalace.order("Four meats"));
// console.log(pizzaPalace.order("Mike"));

// ?
// const fruits = ["apple", "peach", "pear", "banana"];

// // Change code below this line
// const lastElementIndex = fruits.length - 1;
// const lastElement = fruits[lastElementIndex];

// console.log(lastElementIndex);

// console.log(lastElement);

// function getExtremeElements(array) {
//   // return [array[0], array[array.length - 1]];

//   const newArray = [];
//   const firstEl = newArray.push(array[0]);
//   const lastEl = newArray.push(array[array.length - 1]);
//   return newArray;
// }

// console.log(getExtremeElements([1, 2, 3, 4, 5]));
// console.log(getExtremeElements(["Earth", "Mars", "Venus"]));

// function calculateEngravingPrice(message, pricePerWord) {
//   return alert(message.split(" ").length * pricePerWord);

//   // const a = message.split(" ");
//   // const length = message.split(" ").length;
//   // const totalPrice = length * pricePerWord;

//   // console.log(a);
//   // console.log(length);

//   // return totalPrice;
// }

// console.log(
//   calculateEngravingPrice(
//     "Леся моя любовь ffff sdsdsd d d d нет аааа нічего важнее на свете",
//     30
//   )
// );

// function slugify(title) {
//   // Change code below this line

//   const slug = title.toLowerCase().split(" ").join(" - ");

//   // console.log(slug);

//   return slug;
//   // Change code above this line
// }

// console.log(slugify("Arrays for begginers"));

// function makeArray(firstArray, secondArray, maxLength) {
//   // Change code below this line
//   const newArr = firstArray.concat(secondArray);
//   return newArr.splice(0, maxLength);

//   // Change code above this line
// }

// console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3));
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2));
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4));

// !!!! for
// const arrayFriends = ["Mango", "Banana", "Kiwi", "Apple", "Poli"];

// for (let i = 0; i <= arrayFriends.length - 1; i += 1) {
//   console.log(i);
//   console.log(arrayFriends[i]);
//   arrayFriends[i] += "-1";
// }

// for (const friend of arrayFriends) {
//   console.log(friend);
// }

// console.table(arrayFriends);

// !!! total

// const cart = [123, 44, 55, 67, 34, 90, 10];

// let total = 0;

// for (const value of cart) {
//   total += value;
// }

// console.log(total);

// !!! total

// const numbers = [123, 44, 55, 67, 34, 90, 10, 11, 3];

// let totalEvenNumb = 0;
// let totalOddNumb = 0;

// for (const number of numbers) {
//   if (number % 2 === 0) {
//     console.log(`${number}`, "-парне число");
//     totalEvenNumb += number;
//   } else {
//     console.log(`${number}`, "-непарне число");
//     totalOddNumb += number;
//   }
// }

// console.log("сума парних чесел:", totalEvenNumb);
// console.log("сума непарних чесел:", totalOddNumb);

// !!! includes

// const logins = ["Mango", "Banana", "Kiwi", "Apple", "Poli"];

// const loginToFind = "Banana";
// let message = "";

// for (const login of logins) {
//   console.log(login);
//   if (login.includes(loginToFind)) {
//     message = alert(`Користувач ${loginToFind} знайден!!!`);
//     break;
//   }

//   message = alert(`Користувач ${loginToFind} НЕзнайден!!!`);
// }

// const message = logins.includes(loginToFind)
//   ? `Користувач ${loginToFind} знайден!!!`
//   : `Користувач ${loginToFind} НЕзнайден!!!`;
// !!!

// const tofindLogin = function (allLogins, findLogin) {
//   for (const login of allLogins) {
//     if (allLogins.includes(findLogin)) {
//       return `Found ${findLogin}`;
//     }
//   }
//   return `NOT Found ${findLogin}`;
// };

// !!

// const tofindLogin = function (allLogins, findLogin) {
//   return allLogins.includes(findLogin)
//     ? `Користувач ${findLogin} знайден!!!`
//     : `Користувач ${findLogin} НЕзнайден!!!`;
// };

// console.log(tofindLogin(logins, "Apple"));
// console.log(tofindLogin(logins, "Kiwi"));
// console.log(tofindLogin(logins, "Kiwi222"));

// !! найменше число

// const numbers = [123, 44, 55, 67, 34, 90, 10, 11, 3];

// let smallestNumber = numbers[0];

// for (const number of numbers) {
//   console.log(number);

//   if (number < smallestNumber) {
//     smallestNumber = number;
//   }
// }

// console.log("smallestNumber -", smallestNumber);

// const smallestNumber = function (numbers) {
//   let smallestNumber = numbers[0];
//   for (const number of numbers) {
//     if (number < smallestNumber) {
//       smallestNumber = number;
//     }
//   }
//   return smallestNumber;
// };

// console.log(smallestNumber([122, 33, 4, 56, 7654]));
// console.log(smallestNumber([11, 233, 43, 6, 54, 2]));

// ! найменше число + spred

// const smallestNumber = Math.min(...numbers);
// const biggiestNumber = Math.max(...numbers);
// console.log("smallestNumber -", smallestNumber);
// console.log("biggiestNumber -", biggiestNumber);

//! ? повертає найдовше слово

// function findLongestWord(string) {
//   // Change code below this line
//   const arrayWords = string.split(" ");
//   console.log(arrayWords);
//   let maxWord = "";

//   for (let i = 0; i < arrayWords.length; i += 1) {
//     const wordLength = arrayWords[i].length;

//     console.log(wordLength);

//     if (maxWord.length < wordLength) {
//       maxWord = arrayWords[i];
//     }
//   }
//   return maxWord;
// }

// // console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
// console.log(findLongestWord("Google do a roll"));

// ?
// const arrayToString = ["Mango", "Banana", "Kiwi", "Apple", "Poli"];
// const stringToArray = "Mango, Banana, Kiwi, Apple";

// const toString = arrayToString.join(", ");
// const toArray = stringToArray.split(" ");

// console.log(toString);
// console.log(toArray);

// ?

// const title = "Top 10 benefits of React framework";

// const slug = title.toLowerCase().split(" ").join("-");

// console.log(slug);

// ? сума двох масивів

// const array1 = [10, 23, 45, 22];
// const array2 = [33, 12, 66, 494];

// const numbers = array1.concat(array2);

// let sum = 0;
// for (const number of numbers) {
//   sum += number;
// }

// console.log(sum);

// ? метод slice

// const cards = ["Card - 1", "Card - 2", "Card - 3", "Card - 4"];

// Remove

// const cardRemove = "Card - 3";

// const indexCard = cards.indexOf(cardRemove);

// cards.splice(indexCard, 1);
// console.log(cards);

// add

// const addCard = "Card - 5";

// cards.splice(4, 0, addCard);
// cards.push(addCard);
// cards.unshift(addCard);

// cards.splice(0, 1, addCard);

// console.log(cards);

// ?

// function createArrayOfNumbers(min, max) {
//   const numbArr = [];

//   for (let i = min; i < max; i += 1) {
//     numbArr.push(i);
//   }

//   return numbArr;
// }

// console.log(createArrayOfNumbers(10, 20));

// const myArray = [];

// for (let i = 1; i < 6; i += 1) {
//   console.log(i);
//   myArray.push(i);
// }

// console.log(myArray);

// ? ПСЕВДОЕЛЕМЕНТИ ARGUMENTS

// const fn = function (a, b, ...arg) {
//   console.log(arg);
//   console.log(`${a}, ${b}, ${arg}`);
// };

// fn(123, 555, 8, 87, 436);
// fn("hello", 33, 87, 9, 98);

// ?

// const fnAdd = function (...arg) {
//   // console.log(arg);
//   let total = 0;
//   for (const el of arg) {
//     total += el;
//   }
//   return total;
// };

// console.log(fnAdd(12, 33, 46, 7654, 21, 1));
// console.log(fnAdd(123, 33, 5, 67, 1));

// ? разное

// const fnArray = function (array, ...args) {
//   let equalElem = [];
//   let newArray = [];
//   let total = 0;
//   let oddNumbers = [];
//   let evenNumbers = [];
//   let totalOdd = 0;
//   let totalEven = 0;
//   // вернуть совпаденія
//   for (const elem of array) {
//     if (args.includes(elem)) {
//       equalElem.push(elem);
//     }
//   }
//   console.log(equalElem);
//   // вернуть total
//   newArray = args.concat(array);
//   console.log("NEW ARRAY", newArray);

//   for (const elem of newArray) {
//     total += elem;
//   }
//   console.log(total);

//   // вернуть четное/нечетное
//   // вернуть сумму четн/нечетн
//   for (const elem of newArray) {
//     if (elem % 2 !== 0) {
//       oddNumbers.push(elem);
//       totalOdd += elem;
//     } else {
//       evenNumbers.push(elem);
//       totalEven += elem;
//     }
//   }
//   console.log("Нечетное число", oddNumbers);
//   console.log("четное число", evenNumbers);

//   console.log("TOTAL Нечетное число", totalOdd);
//   console.log("TOTAL четное число", totalEven);

//   // вернуть max/min

//   const maxNumber = Math.max(...newArray);
//   const minNumber = Math.min(...newArray);

//   console.log("maxNumber", maxNumber);
//   console.log("minNumber", minNumber);
// };

// console.log(fnArray([1, 2, 3, 4, 5, 22], 1999, 22, 2, 12, 5));
// console.log(fnArray([14, 55, 44, 12], 2, 3, 10, 12, 44, 55, 212));

// ?
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// // Change code below this line

// for (key in apartment) {
//   console.log(key);
//   keys.push(key);
//   values.push(apartment[key]);
// }
// console.log(keys);
// console.log(values);
// ?
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Change code below this line
// const keys = Object.keys(apartment);

// for (let key of keys) {
//   values.push(apartment[key]);
// }

// console.log(keys);
// console.log(values);
// ?
// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line

// for (let color of colors) {
//   console.log(color);
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
// }

// console.log(hexColors);
// console.log(rgbColors);

// ?

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   let array = [];

//   for (const product of products) {
//     const keys = Object.keys(product);

//     console.log(product[propName]);

//     if (keys.includes(propName)) {
//       array.push(product[propName]);
//     }
//   }
//   return array;
// }

// console.log(getAllPropValues("name"));
// getAllPropValues("price");
// getAllPropValues("category");

// ! метод обьекта

// const playlist = {
//   name: "Мой плейліст",
//   rating: 5,
//   tracks: ["track-1", "track-2", "track-3"],

//   changeName(newName) {
//     this.name = newName;
//   },

//   addTrack(track) {
//     this.tracks.push(track);
//   },

//   updateRating(newRating) {
//     this.rating = newRating;
//   },

//   getTrackCount() {
//     return this.tracks.length;
//   },
// };

// playlist.changeName("new name");
// playlist.addTrack("new track-1");
// playlist.addTrack("new track-2");
// playlist.addTrack("new track-3");
// playlist.updateRating(4);
// console.log(playlist.getTrackCount());

// console.log(playlist);

// ?

// const feedback = {
//   good: 5,
//   neutral: 10,
//   bad: 3,
// };

// const keys = Object.keys(feedback);

// let totalFeedback = 0;

// for (const key of keys) {
//   console.log(key);
//   console.log(feedback[key]);
//   totalFeedback += feedback[key];
// }

// console.log(keys);

// ?

// const friends = [
//   { name: "Mango", online: false },
//   { name: "Kiwi", online: true },
//   { name: "Poly", online: true },
//   { name: "Ajex", online: false },
// ];

// console.table(friends);

// шукаєм по імені

const findFriendBeName = function (allFriends, name) {
  for (const friend of allFriends) {
    // console.log(friend.name);

    if (friend.name === name) {
      return `Знайшли ${name}`;
    }
  }
  return `НЕМАє ${name}`;
};

// console.log(findFriendBeName(friends, "Poly"));
// console.log(findFriendBeName(friends, "Chelsy"));

// получаем все імена

const getAllNames = function (allFriends) {
  const names = [];
  for (const friend of allFriends) {
    // console.log(friend.name);
    names.push(friend.name);
  }
  return names;
};

// console.log(getAllNames(friends));

// Друзья онлайн

const getOnline = function (allFriends) {
  const onlineFriends = [];

  for (const friend of allFriends) {
    // console.log(friend.online);
    if (friend.online) {
      onlineFriends.push(friend);
    }
  }
  return onlineFriends;
};

// console.log(getOnline(friends));

// Друзья оффлайн

// const getOffline = function (allFriends) {
//   const offlineFriends = [];

//   for (const friend of allFriends) {
//     // console.log(friend.online);
//     if (!friend.online) {
//       offlineFriends.push(friend);
//     }
//   }
//   return offlineFriends;
// };

// console.log(getOffline(friends));

// Call back

// const doMath = function (a, b, callback) {
//   const result = callback(a, b);

//   console.log(result);
// };
// const add = function (x, y) {
//   return x + y;
// };

// const sub = function (x, y) {
//   return x - y;
// };

// doMath(2, 3, add);
// doMath(20, 3, sub);

// ?фільтр масива

// const filter = function (array, test) {
//   const filteredArray = [];

//   for (const el of array) {
//     // console.log(el);
//     const passed = test(el);

//     if (passed) {
//       filteredArray.push(el);
//     }
//   }
//   return filteredArray;
// };

// const callback1 = function (value) {
//   return value >= 3;
// };

// const result1 = filter([1, 2, 3, 4, 5], callback1);

// console.log(result1);

// const fruits = [
//   { name: "apples", quantity: 200, isFresh: true },
//   { name: "bananas", quantity: 300, isFresh: false },
//   { name: "kiwi", quantity: 100, isFresh: true },
// ];

// const getFruits = function (fruit) {
//   // console.log(fruit.name);
//   return fruit.quantity >= 200;
// };

// const result2 = filter(fruits, getFruits);

// console.log(result2);
