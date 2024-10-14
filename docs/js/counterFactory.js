export const counterFactory = (function () {
  let count = 0; // сохранение счетчика

  return {
    value: function (n) {
      if (n !== undefined) {
        count = n; // начало с переданого числа
      }
      return count;
    },
    increment: function () {
      count++;
    },
    decrement: function () {
      count--;
    },
  };
})();

console.log(counterFactory.value());
counterFactory.increment();
counterFactory.increment();
counterFactory.increment();
console.log(counterFactory.value());
counterFactory.decrement();
counterFactory.decrement();
console.log(counterFactory.value());
console.log(counterFactory.value(100));
counterFactory.decrement();
console.log(counterFactory.value());
console.log(counterFactory.value(200));
counterFactory.increment();
console.log(counterFactory.value());
