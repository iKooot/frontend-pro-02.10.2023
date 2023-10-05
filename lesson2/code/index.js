// ********** Обьява зміних

// let a;
// const b = '';
// var c; // dont do it
// d; // dont do it
//
// let a, b, c;
// let A, B, C;
//
// let $div;
// let _camelCase;
// const ENV_MODE = 'dev' | 'prod';

// *********** області видимості

// (function (){
//     const a = 'test'; // declaration
//     console.log('first', a) // first test
//     return function () {
//         (function b () {
//             //calling
//             console.log('inner', a); // inner test
//         })()
//     }
// })()()
//
// let a = 'example';
// console.log(a); // example
//
// {
//     // console.log(a) // reference error
//     let a;
//     console.log(a); // undefined
//     a = 'example2';
//     console.log(a); // example2
// }
//
// console.log(b) // undefined
// var b = 'test';
// console.log(b) // test
// {
//     console.log(b) // test
//     var b = 'some';
//     console.log(b); // some
// }
//
// console.log(c) // undefined
// var c = 'test';
// console.log(c) // test
// {
//     console.log(c) // test
//     c = 'some';
//     console.log(c); // some
// }


// ************* Var - Let - Const

// console.log(a) // undefined
// var a = 'example';
// console.log(a) // example
//
// console.log(b) // Reference error
// let b = 'example';
// console.log(b) // example
//
// console.log(c) // Reference error
// let c = 'example';
// console.log(c) // example


// ***************

// {
//     // TDZ - start block scope
//     // TDZ - continue
//     console.log(a); // TDZ - continue Reference error
//     let a = 'some';   // TDZ - ends
//     console.log(a); // some
// }

// ********* number

// let number = 1;
// let number2 = 1.1;
// let number3 = NaN;
// let number4 = 'Str' - 1;
// let num5 = 1000000;
// let num6 = 1_000_000;
// let num7 = 1e6;
// let num8 = 0xff; // 255
// let infinity = 1 / 0; // 255
// let bigInt = 11231231n;

// ************ string

// const str1 = 'string';
// const str2 = '';
// const str3 = ' ';
// const str4 = "string";
// const str5 = `result: ${num5} + ${num6} = ${num5 + num6}`;

// ************** boolean

// true || false

// *************** null

// null - пустота фбо нічого

// let result = null;

// *************** undefined

// let t = undefined;


// *************** object

// const obj = {};
// const array = []; // object
// const foo = function () {}; // object

// ****************** typeof

// console.log(typeof undefined);
// console.log(typeof 0);
// console.log(typeof 10n);
// console.log(typeof true);
// console.log(typeof false);
// console.log(typeof 'false');
// console.log(typeof Symbol('id'));
// console.log(typeof Window);
// console.log(typeof String);
// console.log(typeof Math);
// console.log(typeof null);
// console.log(typeof function () {});
// console.log(typeof alert);

// *********** Перетворення ттипів

// string to number
// let number = +'1'
// let number2 = Number('1')
// console.log(number)
// console.log(number2)





