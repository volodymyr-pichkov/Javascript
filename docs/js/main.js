console.log("Javascript HW");

/*
 * #1
 *
 * Створіть змінні зі значеннями.
 */

// ім'я змінної: myNum, значення: 10
// ім'я змінної: myStr, значення: 'some string'
// ім'я змінної: myBool, значення: true
// ім'я змінної: myArr, значення: 1, 2, 3, 4, 5
// ім'я змінної myObj, значення: first: 'First Name', last: 'Last Name'

var myNum = 10;
var myStr = "some string";
var myBool = true;
var myArr = [1, 2, 3, 4, 5];
var myObj = { first: "First Name", last: "Last Name" };

/*
 * #2
 *
 * Відформатуйте ціле число, яке зберігається в змінній myNum, щоб отримати результат з 2 знаками після коми.
 * Результат збережіть у змінній decimal2.
 */

// decimal2

var myNum = 10;
var decimal2 = myNum.toFixed(2);
console.log(decimal2);

/*
 * #3
 *
 * Створіть змінну i, для якої виконайте префіксний та постфіксний інкремент та декремент.
 * Поекспериментуйте з результатами, виводячи їх у консоль.
 */

// i

var i = 1;
console.log(++i); // ДОБАВИТ 1 / РЕЗУЛЬТАТ 2

console.log(i++); // ВЕРНЁТ 1 / ДОБАВИТ 1 (ЗНАЧЕНИЕ СТАНЕТ 2)

console.log(--i); // ОТНИМЕТ 1 / РЕЗУЛЬТАТ 0

console.log(i--); // ВЕРНЁТ 1 / ОТНИМЕТ 1 (ЗНАЧЕНИЕ СТАНЕТ 0)

/*
 * #4
 *
 * Створіть нову змінну myTest та присвойте їй значення 20.
 * Виконайте присвоєння з операцією, використовуючи оператори: +=, –=, *=, /=, %=.
 * Результати присвоюються в myTest, потім виводяться в консоль.
 * У розрахунках можна використовувати раніше оголошену змінну myNum та/або числа.
 */

var myTest = 20;

myTest += myNum;
console.log(myTest);

myTest -= 2;
console.log(myTest);

myTest *= 3;
console.log(myTest);

myTest /= 4;
console.log(myTest);

myTest %= 10;
console.log(myTest);

// myTest
// +=
// –=
// *=
// /=
// %=

/*
 * #5
 *
 * Використовуючи властивості та методи об'єкта Math, присвойте змінним та відобразіть у консолі.
 */

// константа Pi → myPi
// округлене значення числа 89.279 → myRound
// випадкове число між 0..10 → myRandom
// 3 у 5 степені → myPow

const myPi = Math.PI;
console.log(myPi);

const myRound = Math.round(89.279);
console.log(myRound);

const myRandom = Math.random() * 10;
console.log(myRandom);

const myPow = Math.pow(3, 5);
console.log(myPow);

/*
 * #6
 *
 * Створіть об'єкт з ім'ям strObj.
 * Присвойте ключу str рядок тексту "Мама мыла раму, рама мыла маму", ключу length встановіть довжину цього рядка.
 */

// Мама мыла раму, рама мыла маму
// strObj

const strObj = {
  str: "Мама мыла раму, рама мыла маму",
  length: "Мама мыла раму, рама мыла маму".length,
};
console.log(strObj);

/*
 * #7
 *
 * Перевірте наявність тексту 'рама' у полі str об'єкта strObj (див.п.6), результат збережіть у змінній isRamaPos та виведіть її у консоль.
 * Результатом для isRamaPos має бути індекс входження.
 * Результатом для isRama має бути буль true.
 */

const isRamaPos = strObj.str.indexOf("рама");
const isRama = isRamaPos !== -1;
console.log(isRama);
console.log(isRamaPos);

// isRamaPos
// isRama

/*
 * #8
 *
 * Виконайте перейменування підрядка у рядку.
 * Як вихідний рядок використовуйте значення поля str об'єкта strObj (див.п.6), результат збережіть у змінній strReplace та відобразіть у консолі.
 * Вихідний рядок: 'Мама мыла раму, рама мыла маму'
 *      Результат: 'Мама моет раму, Рама держит маму'
 */

const strReplace = strObj.str
  .replace("мыла", "моет")
  .replace("рама", "Рама")
  .replace("мыла", "держит");
console.log(strReplace);

// strReplace

/*
 * #9
 *
 * Преобразуйте текст 'some STRING' у верхній, потім у нижній регістри, результат відобразіть у консолі.
 */

// var someStr = 'some STRING'
// var upperStr
// var lowerStr

var someStr = "some STRING";
var upperStr = someStr.toUpperCase();
var lowerStr = someStr.toLocaleLowerCase();
console.log(upperStr);
console.log(lowerStr);
