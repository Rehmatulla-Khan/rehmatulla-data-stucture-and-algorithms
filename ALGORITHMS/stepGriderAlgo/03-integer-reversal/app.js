const reverseInteger = (int) => {
  const reversed = int.toString().split("").reverse().join("");
  return parseInt(reversed) * Math.sign(int);
};

console.log(reverseInteger(-9998));
