console.log('HW 22')

import { counter } from '/js/counter.js';
import { list } from '/js/mathMax.js';

/*
 * #2
 *
 * Створіть функцію counterFactory, яка має реалізувати три методи за допомогою замикання:
 * початкове значення лічильника - 0
 * counterFactory.value() - повертає значення лічильника
 * counterFactory.value(n) - встановлює значення лічильника, повертає нове значення
 * counterFactory.increment() - збільшує значення лічильника на 1
 * counterFactory.decrement() - зменшує значення лічильника на 1
 */

// const counterFactory = function () {}

// console.log(counterFactory.value())
// counterFactory.increment()
// counterFactory.increment()
// counterFactory.increment()
// console.log(counterFactory.value())
// counterFactory.decrement()
// counterFactory.decrement()
// console.log(counterFactory.value())
// console.log(counterFactory.value(100))
// counterFactory.decrement()
// console.log(counterFactory.value()) 
// console.log(counterFactory.value(200))
// counterFactory.increment()
// console.log(counterFactory.value())

/*
 * #3
 *
 * Створіть функцію myPow(a, b, myPrint). Всередині реалізуйте рекурсію для підрахунку результату піднесення числа a до ступеня b.
 * - Функція myPrint(a, b, res) - глобальна функція, що має генерувати з параметрів a, b, res рядок вигляду 'a^b=res' і повертати його.
 * - myPrint() має бути передана в myPow() як параметр і викликана всередині як callback-функція.
 * - функція myPow() як значення, що повертається, приймає результат myPrint().
 * Наприклад:
 * console.log(myPow(3, 4, myPrint)); // 3^4=81
 * console.log(myPow(2, 3, myPrint)); // 2^3=8
 * console.log(myPow(2, 0, myPrint))  // 2^0=1
 * console.log(myPow(2, -2, myPrint)) // 2^-2=0.25
 */

// const myPrint = () => {}
// const myPow = () => {}

// console.log(myPow(3, 4, myPrint)) // 3^4=81
// console.log(myPow(2, 3, myPrint)) // 2^3=8
// console.log(myPow(2, 0, myPrint)) // 2^0=1
// console.log(myPow(2, -2, myPrint)) // 2^-2=0.25

/*
 * #5
 *
 * Створіть функцію myMul(a, b), яка буде множити числа а і b, повертаючи результат.
 */

// const myMul = () => {}

/*
 * Створіть функції myDouble(n), яка приймає один параметр і подвоює його.
 * Використовувати множення або інші математичні операції всередині функції - заборонено, тільки bind() і myMul().
 * Функція повертає результат обчислення.
 */

// const myDouble

// console.log(myDouble(3)) // = myMul(2, 3) = 6
// console.log(myDouble(4)) // = myMul(2, 4) = 8
// console.log(myDouble(5)) // = myMul(2, 5) = 10

// Аналогічним чином створюємо функцію myTriple(n), яка потроює параметр, що приймає, повертаючи результат.

// const myTriple

// console.log(myTriple(3)) // = myMul(3, 3) = 9
// console.log(myTriple(4)) // = myMul(3, 4) = 12
// console.log(myTriple(5)) // = myMul(3, 5) = 15

// export { counter, counterFactory, myPow, myMax, myMul, myDouble, myTriple }