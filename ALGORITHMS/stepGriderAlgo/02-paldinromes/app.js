// solution 1
// const paldinromesChecker = (str) => {
//   return str === str.split("").reverse().join("");
// };

// solution 2
// const paldinromesChecker = (str) => {
//   return str.split("").every((char, i) => char === str[str.length - i - 1]);
// };

console.log(paldinromesChecker("refer"));
