/*
 *Метод forEach*
 */

// массив.forEach(function callback(element, index, array) {
// Тіло колбек-функції

/* 
-Поелементо перебирає масив.
-Викликає колбек-функцію для кожного елемента масиву.
-Нічого не повертає. */

// ? автоперевірка

/* function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;

  orderedItems.forEach(function (item, index) {
    totalPrice += item;
  });

  return totalPrice;
}

console.log(calculateTotalPrice([12, 85, 37, 4]));
console.log(calculateTotalPrice([164, 48, 291]));
console.log(calculateTotalPrice([412, 371, 94, 63, 176])); */

// ? автоперевірка

/* function filterArray(numbers, value) {
  const filteredNumbers = [];
  // рефакторинг коду

  //   for (let i = 0; i < numbers.length; i += 1) {
  //     if (numbers[i] > value) {
  //       filteredNumbers.push(numbers[i]);
  //     }
  //   }

  numbers.forEach(function (namber, index) {
    if (namber > value) {
      filteredNumbers.push(namber);
    }
  });

  // Change code above this line
  return filteredNumbers;
}

console.log(filterArray([1, 2, 3, 4, 5], 3));
console.log(filterArray([10, 2, 33, 4, 25], 5)); */

/*
 *Метод MAP ()
 */

/* 
 -Поелементо перебирає оригінальний масив.
 -Не змінює оригінальний масив.
 -Результат роботи колбек-функції записується у новий масив.
 -Повертає новий масив однакової довжини.
*/

// масив.map((element, index, array) => {
//   // Тіло колбек-функції
// });

// ? приклад
/* const planets = ["Earth", "Mars", "Venus", "Jupiter"];   

const planetsInUpperCase = planets.map((planet) => planet.toUpperCase());
console.log(planetsInUpperCase); // ["EARTH", "MARS", "VENUS", "JUPITER"]

const planetsInLowerCase = planets.map((planet) => planet.toLowerCase());
console.log(planetsInLowerCase); // ["earth", "mars", "venus", "jupiter"]

// Оригінальний масив не змінився
console.log(planets); // ["Earth", "Mars", "Venus", "Jupiter"]
 */

// ? автоперевірка

/* const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// Change code below this line
const planetsLengths = planets.map((planet) => {
  console.log(planet.length);
  return planet.length;
});

console.log(planetsLengths); */

/*
 *flatMap(callback)
 */

/* Метод flatMap(callback) - аналогічний методу map(),
  але застосовується у випадках, коли результат - це 
  багатовимірний масив, який необхідно «розгладити». */

//  масив.flatMap((element, index, array) => {
// Тіло колбек-функції

// ? приклад

/* const students = [
  { name: "Mango", courses: ["mathematics", "physics"] },
  { name: "Poly", courses: ["science", "mathematics"] },
  { name: "Kiwi", courses: ["physics", "biology"] },
];

const courses1 = students.map((student) => student.courses);
// [["mathematics", "physics"], ["science", "mathematics"], ["physics", "biology"]]

const courses2 = students.flatMap((student) => student.courses);
// ["mathematics", "physics", "science", "mathematics", "physics", "biology"];

console.log(courses1);
console.log(courses2); */

// ? автоперевірка

/* const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    genres: ["adventure", "history"],
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    genres: ["fiction"],
  },
  {
    title: "Redder Than Blood",
    author: "Tanith Lee",
    genres: ["horror", "mysticism"],
  },
];
// ! неявна (прихована функція)

const genres = books.flatMap((book) => book.genres);
const genres1 = books.map((book) => book.genres);

console.log(genres);
console.log(genres1); */

/*
 *filter(callback)
 */

//  масив.filter((element, index, array) => {
// Тіло колбек-функції
// });

/* 
 -Не змінює оригінальний масив.
 -Поелементо перебирає оригінальний масив.
 -Повертає новий масив.
 -Додає у масив, що повертається, елементи, які задовольняють умови колбек-функції.
 -Якщо колбек повернув true, елемент додається у масив, що повертається.
 -Якщо колбек повернув false, елемент не додається у масив, що повертається.
 -Якщо жоден елемент не задовольнив умову, повертає порожній масив.
*/

// ? приклад

/* const values = [51, -3, 27, 21, -68, 42, -37];

const positiveValues = values.filter((value) => value >= 0);
console.log(positiveValues); // [51, 27, 21, 42]

const negativeValues = values.filter((value) => value < 0);
console.log(negativeValues); // [-3, -68, -37]

const bigValues = values.filter((value) => value > 1000);
console.log(bigValues); // []

// Оригінальний масив не змінився
console.log(values); // [51, -3, 27, 21, -68, 42, -37] */

// ? автоперевірка

/* const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// Change code below this line

const evenNumbers = numbers.filter((number) => number % 2 === 0);
const oddNumbers = numbers.filter((number) => number % 2 !== 0);

console.log(evenNumbers);
console.log(oddNumbers); */

// ? автоперевірка фільтрація унікальних об'єктів
// ! не зрозуміло
/* const books = [

  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    genres: ["adventure", "history"],
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    genres: ["fiction", "mysticism"],
  },
  {
    title: "Redder Than Blood",
    author: "Tanith Lee",
    genres: ["horror", "mysticism", "adventure"],
  },
];
// Change code below this line
const allGenres = books.flatMap((book) => book.genres);
const uniqueGenres = allGenres.filter(
  (book, index, books) => books.indexOf(book) === index
);

console.table(allGenres);
console.table(uniqueGenres);
 */

// ? автоперевірка
/* Використовуючи метод filter(), доповни код таким чином, щоб:

У змінній topRatedBooks утворився масив книг, рейтинг яких 
(властивість rating) більший за або дорівнює значенню 
змінної MIN_RATING.

У змінній booksByAuthor утворився масив книг, 
написаних автором з ім'ям (властивість author), яке збігається 
зі значенням у змінній AUTHOR. */

/* const books = [

  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
  { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
];

const MIN_RATING = 8;
const AUTHOR = "Bernard Cornwell";
// Change code below this line

const topRatedBooks = books.filter((book) => book.rating >= MIN_RATING);
const booksByAuthor = books.filter((book) => book.author === AUTHOR);

console.table(topRatedBooks);
console.table(booksByAuthor);
 */

// ? автоперевірка users filter

/*Доповни функцію getUsersWithAge(users, minAge, maxAge) 
таким чином, щоб вона повертала масив користувачів, вік яких 
(властивість age) потрапляє у проміжок від minAge до maxAge.  */

/* const users = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male",
    age: 37,
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female",
    age: 34,
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male",
    age: 24,
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female",
    age: 21,
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    gender: "male",
    age: 27,
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    gender: "male",
    age: 38,
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female",
    age: 39,
  },
]; */

// ? min max age
/* const minAge = 10;
const maxAge = 100;
const getUsersWithAge = (users, minAge, maxAge) => {
  return users.filter((user) => user.age >= minAge && user.age <= maxAge);
};

console.table(getUsersWithAge(users, minAge, maxAge)); */

// ? friends name icludes

/* const getUsersWithFriend = (users, friendName) => {
  return users.filter((user) => user.friends.includes(friendName));
};

console.table(getUsersWithFriend(users, "Briana Decker")); */

// ? friends name icludes унікальне

/* Доповни функцію getFriends(users) таким чином, щоб вона 
повертала масив друзів всіх користувачів (властивість friends). 
У декількох користувачів можуть бути однакові друзі, зроби так,
 щоб масив, що повертається, не містив повторень. */

/* const getFriends = (users) => {
  const allFriends = users.flatMap((user) => user.friends);
  return allFriends.filter(
    (user, index, allFriends) => allFriends.indexOf(user) === index
  );
};

console.log(getFriends(users)); */

// ? filter isActive true/false

/* Доповни функцію getActiveUsers(users) таким чином, щоб вона 
повертала масив активних користувачів, значення властивості 
isActive яких - true. */

/* const getActiveUsers = (users) => {
  return users.filter((user) => user.isActive === true);
};

console.table(getActiveUsers(users)); */

/*
 *find(callback)
 */

/* масив.find((element, index, array) => {


  Тіло колбек-функції
}); */

/* 
 -Не змінює оригінальний масив.
 -Поелементо перебирає оригінальний масив.
 -Повертає перший елемент, що задовольняє умову, тобто коли колбек повертає true.
 -Якщо жоден елемент не задовольнив умову, тобто для всіх елементів колбек повернув false, метод повертає undefined. */

/* const colorPickerOptions = [
  { label: "red", color: "#F44336" },
  { label: "green", color: "#4CAF50" },
  { label: "blue", color: "#2196F3" },
  { label: "pink", color: "#E91E63" },
  { label: "indigo", color: "#3F51B5" },
];

colorPickerOptions.find((option) => option.label === "blue"); // { label: 'blue', color: '#2196F3' }
colorPickerOptions.find((option) => option.label === "pink"); // { label: 'pink', color: '#E91E63' }
colorPickerOptions.find((option) => option.label === "white"); // undefined
 */

/*
 *reduce(callback, initialValue);
 */

//  массив.reduce((previousValue, element, index, array) => {
//    Тіло колбек-функції
//  }, initialValue);

/* 
 -Не змінює оригінальний масив.
 -Поелементо перебирає оригінальний масив.
 -Повертає все, що завгодно.
 -Робить все, що завгодно. */

/* const total = [2, 7, 3, 14, 6].reduce((previousValue, number) => {
  return previousValue + number;
}, 0);

console.log(total); // 32
 */

// ? автоперевірка total sum

/* Ігровому сервісу необхідний функціонал підрахунку 
середнього часу, проведеного в іграх.Доповни код таким чином,
щоб у змінній totalPlayTime вийшло загальний ігровий час з 
масиву playtimes. */

/* const players = {
  mango: 1270,
  poly: 468,
  ajax: 710,
  kiwi: 244,
};
const playtimes = Object.values(players); // [1270, 468, 710, 244]

console.log(playtimes);

const totalPlayTime = playtimes.reduce((acc, player) => {
  return acc + player;
}, 0);
console.log(totalPlayTime);

const averagePlayTime = totalPlayTime / playtimes.length;

console.log(averagePlayTime); */

// ? автоперевірка середній час

/* Нашому сервісу необхідно розрахувати середній час, 
проведений в одній грі для кожного гравця,

 і отримати загальну суму цих значень часу. 
 
 Розрахувати час для кожного з гравців 
можна, розділивши його час (властивість playtime) на кількість 
ігор (властивість gamesPlayed). */

/* const players = [
  { name: "Mango", playtime: 1270, gamesPlayed: 4 },
  { name: "Poly", playtime: 469, gamesPlayed: 2 },
  { name: "Ajax", playtime: 690, gamesPlayed: 3 },
  { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
];

const totalAveragePlaytimePerGame = players.reduce((totalTime, player) => {
  return totalTime + player.playtime / player.gamesPlayed;
}, 0);

console.log(totalAveragePlaytimePerGame); */

// ? автоперевірка total balance

/* const users = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male",
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female",
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male",
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female",
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    gender: "male",
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    gender: "male",
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female",
  },
]; */

/* const calculateTotalBalance = (users) =>
  users.reduce((acc, user) => acc + user.balance, 0);

console.log(calculateTotalBalance(users)); */

/* const getTotalFriendCount = (users) =>
  users.reduce((acc, user) => acc + user.friends.length, 0);

console.log(getTotalFriendCount(users)); */

/*
 *sort()
 */

/* 
 -Сортує і змінює вихідний масив.
 -Повертає змінений масив, тобто посилання на відсортований вихідний.
 -За замовчуванням сортує за зростанням.
 -Сортування відбувається шляхом приведення значень до рядка і порівняння порядкових номерів у таблиці Unicode.
 */

//  const scores = [61, 19, 74, 35, 92, 56];
// scores.sort();
// console.log(scores); // [19, 35, 56, 61, 74, 92]

// ?    автоперевірка

/* const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
const authors = [
  "Tanith Lee",
  "Bernard Cornwell",
  "Robert Sheckley",
  "Fyodor Dostoevsky",
];
// Change code below this line

const ascendingReleaseDates = releaseDates.sort();

const alphabeticalAuthors = authors.sort();

console.log(ascendingReleaseDates);
console.log(alphabeticalAuthors); */

// ?    автоперевірка

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];

// const ascendingReleaseDates = [...releaseDates].sort((a, b) => a - b);

// const descendingReleaseDates = [...releaseDates].sort((a, b) => b - a);

// console.log(ascendingReleaseDates);
// console.log(descendingReleaseDates);

// ?    автоперевірка

/* const authors = [
  "Tanith Lee",
  "Bernard Cornwell",
  "Robert Sheckley",
  "Fyodor Dostoevsky",
  "Howard Lovecraft",
];
// Change code below this line

const authorsInAlphabetOrder = [...authors].sort((a, b) => a.localeCompare(b));

const authorsInReversedOrder = [...authors].sort((a, b) => b.localeCompare(a));

console.log(authorsInAlphabetOrder);
console.log(authorsInReversedOrder); */

// ?    автоперевірка

/* const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
  { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
];
// Change code below this line

const sortedByAuthorName = [...books].sort((firstBook, secondBook) =>
  firstBook.author.localeCompare(secondBook.author)
);

const sortedByReversedAuthorName = [...books].sort((firstBook, secondBook) =>
  secondBook.author.localeCompare(firstBook.author)
);

const sortedByAscendingRating = [...books].sort(
  (firstBook, secondBook) => firstBook.rating - secondBook.rating
);

const sortedByDescentingRating = books;

console.log(sortedByAuthorName);
console.log(sortedByReversedAuthorName);
console.log(sortedByAscendingRating); */

// ?    автоперевірка
/* Доповни код таким чином, щоб у змінній names вийшов масив імен авторів 
в алфавітному порядку, рейтинг книг яких більший за значення 
змінної MIN_BOOK_RATING. */

/* const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
  {
    title: "The Dreams in the Witch House",
    author: "Howard Lovecraft",
    rating: 8.67,
  },
]; */
// const MIN_BOOK_RATING = 8;
// Change code below this line

// const names1 = [...books]
//   .filter((book) => book.rating > MIN_BOOK_RATING)
//   .map((book) => book.author)
//   .sort((firstBook, secondBook) => firstBook.author - secondBook.author);

// const names2 = books
//   .filter((book) => book.rating > MIN_BOOK_RATING)
//   .map((book) => book.author)
//   .sort();

// console.log(names2);

// ? автоперевірка

/* const users = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male",
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female",
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male",
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female",
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
    isActive: true,
    balance: 3951,
    gender: "male",
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: [
      "Jacklyn Lucas",
      "Linda Chapman",
      "Adrian Cross",
      "Solomon Fokes",
    ],
    isActive: false,
    balance: 1498,
    gender: "male",
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female",
  },
]; */

/* Доповни функцію getNamesSortedByFriendCount(users) таким чином,
 щоб вона повертала масив імен користувачів, відсортований за 
 зростанням кількості їхніх друзів (властивість friends). */

/* const getNamesSortedByFriendCount = (users) => {
  return [...users]
    .sort((a, b) => a.friends.length - b.friends.length)
    .map((user) => user.name);
};
console.log(getNamesSortedByFriendCount(users)); */

// ? автоперевірка

/* Доповни функцію getSortedFriends(users) таким чином, щоб 
вона повертала масив унікальних імен друзів 
(властивість friends), відсортований за алфавітом. */

/* const getSortedFriends = (users) => {
  return users
    .flatMap((user) => user.friends)
    .filter((user, index, users) => users.indexOf(user) === index)
    .sort();
};

console.log(getSortedFriends(users)); */

// ? автоперевірка

/* Доповни функцію getTotalBalanceByGender(users, gender) таким чином,
 щоб вона повертала загальний баланс користувачів (властивість balance),
  стать яких (властивість gender) збігається зі значенням параметра
   gender. */

// const getTotalBalanceByGender = (users, gender) => {
//   return users
//     .filter((user) => user.gender === gender)
//     .map((user) => user.balance)
//     .reduce((acc, user) => acc + user, 0);
// };

// console.log(getTotalBalanceByGender(users, "male"));
// console.log(getTotalBalanceByGender(users, "female"));

// users.reduce((acc, user) => acc + user.balance, 0);
