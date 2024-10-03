export function modifyFunction(originalFunction, multiplier) {
  return function (num) {
    const result = originalFunction(num);
    return result * multiplier;
  };
}

export function originalFunction(x) {
  return x * 2;
}

const modifiedFunction = modifyFunction(originalFunction, 3);
console.log(modifiedFunction(5));
