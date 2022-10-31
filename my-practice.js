const a = 6;
console.log(a);

const courseTopic = "JavaScript essentials";
// Change code below this line

const courseTopicLength = courseTopic.length;
const firstElement = courseTopic[0];
const lastElement = courseTopic[19];

console.log(courseTopicLength);
console.log(firstElement);
console.log(lastElement);

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

function checkForName(fullName, name) {
  const result = fullName.includes(name); // Change this line
  return result;
}
prompt(checkForName("Petrenko Vasya"));
