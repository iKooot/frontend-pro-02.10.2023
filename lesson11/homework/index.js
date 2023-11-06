// function arraysEqual(arra1, array2) {
//     if (arra1.length !== array2.length) return false
//
//     for (let i = 0; i < arra1.length; i++) {
//         if (Array.isArray(arra1[i]) && Array.isArray(array2[i])) {
//             if (!arraysEqual(arra1[i], array2[i])) {
//                 return false
//             }
//         } else if ( arra1[i] !== array2[i] ) {
//             return false
//         }
//     }
//
//     return true
// }
//
// function removeElement(array, item) {
//     for (let i = 0; i < array.length; i++) {
//         if (Array.isArray(item) && Array.isArray(array[i])) {
//             if (arraysEqual(item, array[i])) {
//                 array.splice(i, 1)
//                 i--
//             }
//         } else if (item === array[i]) {
//             array.splice(i, 1)
//             i--
//         }
//     }
// }
//
// const array = [1, 2, 3, 4, 5, 'string', [1, 2, 3]];
// removeElement(array, [1, 2, 3]);
// console.log(array);

// function createHash(key, secret) {
//     const concat = key + secret;
//     return btoa(concat);
// }
//
// console.log(createHash('key', 'secret'));
// console.log(createHash('key', 'secret'));
// console.log(createHash('key', 'secret'));

// function factorial(n) {
//     if ( n === 1 ) {
//         return 1;
//     } else {
//         return n * factorial(n - 1);
//     }
// }
//
// console.log(factorial(5));