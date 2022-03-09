const cleanStr = (str) => {
  return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
};

const isAnagram = (str1, str2) => {
  return cleanStr(str1) === cleanStr(str2);
};

console.log(isAnagram("hello! here", "here, hello"));
