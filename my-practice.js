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

function includes(array, value) {
  // Change code below this line

  for (const word of array) {
    if (word === value) {
      return true;
    }
  }
  return false;
  // Change code above this line
}
console.log(includes([1, 2, 6], 2));
