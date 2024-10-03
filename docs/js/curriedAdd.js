export function curriedAdd(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

const result = curriedAdd(1)(2)(3);
console.log(result);
