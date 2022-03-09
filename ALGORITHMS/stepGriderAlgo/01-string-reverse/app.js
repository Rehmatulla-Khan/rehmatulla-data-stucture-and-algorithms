// solution 1
// const stringRevere = (str) => {
//     return str.split("").reverse().join("")
// }

// solution 2
// const stringReverse = (str) => {
//   let reversedString = "";
//   for (let letter of str) {
//     reversedString = letter + reversedString;
//   }
//   return reversedString;
// };

// solution 3
const stringReverse = (str) =>
  str.split("").reduce((pre, acc) => acc + pre, "");

console.log(stringReverse("hello"));
