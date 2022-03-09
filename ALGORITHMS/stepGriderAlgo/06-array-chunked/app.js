// solution 1
// const chunkedArray = (array, size) => {
//   const chunked = [];

//   for (let el of array) {
//     const last = chunked[chunked.length - 1];

//     if (!last || last.length === size) {
//       chunked.push([el]);
//     } else {
//       last.push(el);
//     }
//   }
//   return chunked;
// };

// solution 2
const chunkedArray = (array, size) => {
  const chunked = [];
  let index = 0;

  while (index < array.length) {
    chunked.push(array.slice(index, index + size));
    index += size;
  }

  return chunked;
};

console.log(chunkedArray([2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2], 4));
