const myMul = (a, b) => {
  return a * b;
};

const myDouble = (n) => {
  return myMul(2, n);
};

const myTriple = (n) => {
  return myMul(3, n);
};

console.log(myDouble(3));
console.log(myDouble(4));
console.log(myDouble(5));
console.log(myTriple(3));
console.log(myTriple(4));
console.log(myTriple(5));

export { myMul, myDouble, myTriple };
