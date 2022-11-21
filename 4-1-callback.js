// !/*  ***** CALLBACK ***** */

// const fnA = function (message, callback) {
//   // console.log(message);
//   // console.log(callback);
//   callback(100);
// };

// const fnB = function (number) {
//   console.log("лог при виклику fnB", number);
// };

// fnA("hello", fnB);

//! Колбек-функція

// function greet(name) {
//   console.log(`Ласкаво просимо ${name}.`);
// }

// /Функція вищого порядку

// function registerGuest(name, callback) {
//   console.log(`Реєструємо гостя ${name}.`);
//   callback(name);
// }

// registerGuest("Mango", greet);

// ! Прихована фукція
// const genres = books.flatMap((book) => book.genres);
// const genres1 = books.map((book) => book.genres);

//!   функція doMath(a,b, callback)

/* const doMath = function (a, b, callback) {
  const result = callback(a, b);

  console.log(result);
};

const add = function (x, y) {
  return x + y;
};

const sub = function (x, y) {
  return x - y;
};

doMath(10, 4, function (c, d) {
  return c + d;
});

doMath(3, 5, add);
doMath(30, 15, sub); */

// ? автопроверка

/* function makeMessage(pizzaName, callback) {
  return callback(pizzaName);
}

function deliverPizza(pizzaName) {
  return `Delivering ${pizzaName} pizza.`;
}

function makePizza(pizzaName) {
  return `Pizza ${pizzaName} is being prepared, please wait...`;
}

console.log(makeMessage("Royal Grand", makePizza));
console.log(makeMessage("Ultracheese", deliverPizza)); */

// ? автопроверка

//todo  Виконай рефакторинг методу order таким чином,
/* щоб він приймав другим і третім параметром два колбеки 
onSuccess і onError.

Якщо у властивості pizzas відсутня піца з назвою з параметра 
pizzaName, метод order повинен повертати результат виклику 
колбека onError, передаючи йому аргументом рядок 
"There is no pizza with a name <имя пиццы> in the assortment."

Якщо у властивості pizzas присутня піца з назвою з параметра 
pizzaName, метод order повинен повертати результат виклику 
колбека onSuccess, передаючи йому аргументом назву замовленої 
піци.

*/

/* const pizzaPalace = {
  pizzas: ["Ultracheese", "Smoked", "Four meats"],
  order(pizzaName, onSuccess, onError) {
    if (!pizzas.includes(pizzaName)) {
      return onError(
        "There is no pizza with a name ${pizzaName} in the assortment."
      );
    } else {
      return onSuccess(pizzaName);
    }
  },
};

const { pizzas } = pizzaPalace;

console.log(pizzaPalace.pizzas);
// Change code above this line

// Callback for onSuccess
function makePizza(pizzaName) {
  return `Your order is accepted. Cooking pizza ${pizzaName}.`;
}

// Callback for onError
function onOrderError(error) {
  return `Error! ${error}`;
}

// Method calls with callbacks
pizzaPalace.order("Smoked", makePizza, onOrderError);
pizzaPalace.order("Four meats", makePizza, onOrderError);
pizzaPalace.order("Big Mike", makePizza, onOrderError);
pizzaPalace.order("Vienna", makePizza, onOrderError);
// виклик функції
console.log(pizzaPalace.order("Smoked", makePizza, onOrderError));
console.log(pizzaPalace.order("Four meats", makePizza, onOrderError));
console.log(pizzaPalace.order("Big Mike", makePizza, onOrderError));
console.log(pizzaPalace.order("Vienna", makePizza, onOrderError));
 */
