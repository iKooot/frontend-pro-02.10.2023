// task 1

// const firstNumber = parseInt(prompt('Enter first number'));
// const secondNumber = parseInt(prompt('Enter second number'));
//
// if (firstNumber > secondNumber) {
//     console.log(`Fist number bigger then second`);
// }
//
// if (firstNumber < secondNumber) {
//     console.log(`Fist number less then second`);
// }

// task 2

// const distanceInKm = parseInt(prompt('Enter distance in km'));
// const distanceInnFt = parseInt(prompt('Enter distance in ft'));
//
// const distanceInMet = distanceInKm * 1000;
// const distanceFtToMt = distanceInnFt * 0.305;
//
// if (distanceInMet > distanceFtToMt) {
//     console.log(`Distance ${distanceInKm}km is bigger then distance ${distanceInnFt}ft`);
// }
//
// if (distanceInMet < distanceFtToMt) {
//     console.log(`Distance ${distanceInKm}km is smaller then distance ${distanceInnFt}ft`);
// }

// task 3

// const firstNumber = parseInt(prompt('Enter first number'));
// const secondNumber = parseInt(prompt('Enter second number'));
//
// if (firstNumber % secondNumber === 0) {
//     console.log(`${firstNumber} is divider of ${secondNumber}`);
// }
//
// if (firstNumber % secondNumber !== 0) {
//     console.log(`${firstNumber} is not divider of ${secondNumber}`);
// }
//
// if (secondNumber % firstNumber === 0) {
//     console.log(`${secondNumber} is divider of ${firstNumber}`);
// }
//
// if (secondNumber % firstNumber !== 0) {
//     console.log(`${secondNumber} is not divider of ${firstNumber}`);
// }

// task 4

// const number = parseInt(prompt('Enter two-digit', 12));
//
// const lastDigit = number % 10;
//
// if ( lastDigit % 2 === 0 ) {
//     console.log(`Digit ${lastDigit} is even`);
// }
//
// if ( lastDigit % 2 !== 0 ) {
//     console.log(`Digit ${lastDigit} is odd`);
// }

// task 5

// const number = parseInt(prompt('Enter two-digit', 12));
//
// const firstNumber = parseInt(number / 10);
// const secondNumber = number % 10;
//
// if (firstNumber > secondNumber) {
//     console.log(`First number: ${firstNumber} is bigger then second number: ${secondNumber}`);
// }
//
// if (firstNumber < secondNumber) {
//     console.log(`First number: ${firstNumber} is less then second number: ${secondNumber}`);
// }
//
// if (firstNumber === secondNumber) {
//     console.log(`Numbers are equal`);
// }

// task 6

// const number = parseInt(prompt('Enter third-digit', 123));
//
// const firstNumber = parseInt(number / 100);
// const secondNumber = parseInt((number / 10) % 10);
// const thirdNumber = number % 10;
//
// const sum = firstNumber + secondNumber + thirdNumber;
// const mult = firstNumber * secondNumber * thirdNumber;
//
// if (sum % 2 === 0) {
//     console.log(`Sum of all digits is even`);
// }
//
// if (sum % 5 === 0) {
//     console.log(`Sum of all digits is divider of 5`);
// }
//
// if (mult > 100) {
//     console.log(`Multiplication of all digits is bigger then 100`);
// }
//
// if (firstNumber === secondNumber && secondNumber === thirdNumber) {
//     console.log(`All digits are the same`);
// }
//
// if (firstNumber === secondNumber || secondNumber === thirdNumber || firstNumber === thirdNumber) {
//     console.log(`Digits has the pairs`);
// }

// task 8

// const number = parseInt(prompt('Enter a six digit number', 123321));
//
// const number1 = parseInt(number / 100_000);
// const number2 = parseInt((number / 10_000) % 10);
// const number3 = parseInt((number / 1000) % 10);
// const number4 = parseInt((number / 100) % 10);
// const number5 = parseInt((number / 10) % 10);
// const number6 = number % 10;
//
// const isPalindrome = number1 === number6 && number2 === number5 && number3 === number4;
//
// if (isPalindrome) {
//     console.log(`Number: ${number} is palindrome`);
// }





