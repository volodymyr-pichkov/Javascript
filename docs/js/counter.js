export const counter = (function () {
  let count = 0; // сохранение счетчика

  return function (n) {
    if (n !== undefined) {
      count = n; // начало с переданого числа
    }
    return count++;
  };
})();

console.log(counter());
console.log(counter());
console.log(counter(100));
console.log(counter());
console.log(counter());
console.log(counter(500));
console.log(counter());
console.log(counter());
console.log(counter(0));
console.log(counter());
console.log(counter());
