console.log('HW 20 JS')



// #1

// let userObj = {
//     firstName: "Vovka",
//     lastName: "Morkovka",
//     age: 24
// };
// console.log(userObj);



// #2

// let userObj = {
//     firstName: "Vovka",
//     lastName: "Morkovka",
//     age: 24,

//     fullName: function() {
//         return this.firstName + " " + this.lastName;
//     }
// };
// console.log(userObj.fullName());



// #3

// function defUpperStr(text) {
//     return (text || 'DEFAULT TEXT').toUpperCase();
// }
// console.log(defUpperStr('My text'));
// console.log(defUpperStr());



// #4

// function evenFn(n) {
//     const result = [];
//     for (let i = 0; i <= n; i++) {
//         if (i % 2 === 0 && i !== 0) {
//             result.push(i);
//         }
//     }
//     return result;
// }
// console.log(evenFn(10)); // [2, 4, 6, 8, 10]
// console.log(evenFn(15)); // [2, 4, 6, 8, 10, 12, 14]
// console.log(evenFn(20)); // [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]




// #5

// function weekFn(n) {

//     if (typeof n !== 'number' || !Number.isInteger(n) || n < 1 || n > 7) {
//         return null;
//     }

//     let dayName;

//     switch (n) {
//         case 1:
//             dayName = 'Понеділок';
//             break;
//         case 2:
//             dayName = 'Вівторок';
//             break;
//         case 3:
//             dayName = 'Середа';
//             break;
//         case 4:
//             dayName = 'Четвер';
//             break;
//         case 5:
//             dayName = 'П’ятниця';
//             break;
//         case 6:
//             dayName = 'Субота';
//             break;
//         case 7:
//             dayName = 'Неділя';
//             break;
//         default:
//             return null;
//     }

//     return dayName;
// }




// #6

// function ageClassification(n) {
//     return n < 0 || n > 122 ? null :
//            n <= 24 ? 'Дитинство' :
//            n <= 44 ? 'Молодість' :
//            n <= 65 ? 'Зрілість' :
//            n <= 75 ? 'Старість' :
//            n <= 90 ? 'Довголіття' :
//            'Рекорд';
// }

// console.log('    -1 :', ageClassification(-1))
// console.log('     0 :', ageClassification(0))
// console.log('     1 :', ageClassification(1))
// console.log('    24 :', ageClassification(24))
// console.log(' 24.01 :', ageClassification(24.01))
// console.log('    44 :', ageClassification(44))
// console.log(' 44.01 :', ageClassification(44.01))
// console.log('    65 :', ageClassification(65))
// console.log('  65.1 :', ageClassification(65.1))
// console.log('    75 :', ageClassification(75))
// console.log(' 75.01 :', ageClassification(75.01))
// console.log('    90 :', ageClassification(90))
// console.log(' 90.01 :', ageClassification(90.01))
// console.log('   122 :', ageClassification(122))
// console.log('122.01 :', ageClassification(122.01))
// console.log('   150 :', ageClassification(150))




// #7

// function oddFn (n) {
//     let result = []
//     let i = 1

//     while (i <= n) {
//         result.push(i);
//         i += 2;
//     }

//     return result;
// }

// console.log(oddFn(10));
// console.log(oddFn(15));
// console.log(oddFn(20));