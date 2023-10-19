let a = 6;

// while (a < 5) {
//     console.log(a);
//     a++
//     // виходить з ітерації
// }

// while (true) {
//     console.log('infinity')
// }
//
// console.log('after infinity')

// do {
//     console.log(a)
//     a++
//     // виходить з ітерації
// } while (a < 5)

// let digit;
// const maxValue = 10;
//
// do {
//     digit = parseFloat(prompt('Enter your digit'));
//     console.log(digit);
// } while (digit < maxValue);

// for ( let i = 0, b = 'string'; i < 5; i++ ) {
//     console.log('operation' , i)
//     if (i === 3) console.log(b)
// }

// for ( let i = 0, b = 10; i < 10 && b > 4; i++, b-- ) {
//     console.log('operation' , i, b)
// }
//
// for ( let i = 0; i < 10; i++ ) {
//     console.log('operation' , i)
// }

// for (let i = 0; i < 5; i++) { // використовуємо існуючу змінну
//     if (i % 2) {
//         console.log('inner', i) // 1 => 3
//         continue;
//     }
//     console.log('outer', i) // 0 => 2 => 4
// }
//
// for (let i = 0; i < 5; i++) { // використовуємо існуючу змінну
//     if (i % 2) {
//         console.log('inner', i) // 1
//         break;
//     }
//     console.log('outer', i) // 0
// }

// wrong
// for (let i = 0; i < 100; i++) {
//     console.log('first cycle', i)
//     for (let j = 0; j < 300; j++) {
//         console.log('second cycle', j)
//         for (let k = 0; k < 1000; k++) {
//             console.log('third cycle', k)
//         }
//     }
// }

//correct
// for (let i = 0; i < 5; i++) {
//     console.log('first cycle', i)
//     for (let j = 0; j < 5; j++) {
//         console.log('second cycle', j)
//     }
// }

// firstCycle: for (let i = 0; i < 5; i++) {
//     console.log('first cycle', i)
//     for (let j = 0; j < 5; j++) {
//         console.log('second cycle', j)
//         if (i % 2) continue firstCycle;
//     }
// }

// const arr = [ 1, 2, 3, 4, 5 ];
// const string = '[ 1, 2, 3, 4, 5 ]';
// const obj = {
//     name: 'Sergey',
//     age: 32,
// };
//
// Array.prototype.foo = function () {};
// Object.prototype.foo = function () {};
//
// for (let number of arr) {
//     console.log(number)
// }
//
// for (let number in arr) {
//     console.log(number)
// }

// for (let char of string) {
//     console.log(char)
// }

// for (let key in obj) {
//     console.log(`${key}: ${obj[key]}`)
// }

