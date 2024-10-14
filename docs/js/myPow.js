const myPrint = (a, b, res) => {
  return `${a}^${b}=${res}`;
};

const myPow = (a, b, myPrint) => {
  if (b === 0) return myPrint(a, b, 1);

  if (b < 0) return myPrint(a, b, 1 / myPow(a, -b, myPrint));

  if (b === 1) return myPrint(a, b, a);

  const res = a * myPow(a, b - 1, myPrint);
  return myPrint(a, b, res);
};

console.log(myPow(3, 4, myPrint));
console.log(myPow(2, 3, myPrint));
console.log(myPow(2, 0, myPrint));
console.log(myPow(2, -2, myPrint));

export { myPrint, myPow };
