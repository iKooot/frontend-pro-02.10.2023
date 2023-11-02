// outer => window => null
// x => uninitialize
// a = function
// Window
// let x; // x => undefined
// x = 5; // x = 5
// x = 10; // x = 10
// function a() { // global
//     // x => 10
//     // y => uninitialize
//     // b = function
//     let y = 5; // y = 5
//     function b() { // b inner a
//         // x = 10
//         // y = 5
//         // z => uninitialize
//         let z = 1
//         console.log(x + y + z) // Window
//     }
//     b()
// }
//
// a() // 16

// function counter() {
//     let count = 0;
//     return function() { // [Enviermant] = count = 0
//         count++
//         console.log(count)
//     }
// }
//
//
// let count = counter(); // лук обл існує доки на функцію є посилання
//
// count();
// count();
// count();
// count = null; // памʼять очищена
// count = counter();
// count();

// let count2 = counter();
// count2()

// function foo() {
//     console.log(this)
// }
//
// foo()
//
// const obj = {
//     name: 'Serhii',
//     foo() {
//         console.log(this)
//     },
//     bar: () => {
//         console.log(this)
//     }
// }
//
// obj.foo()
// obj.bar()

// const sergey = {
//     name: 'Sergey',
//     showName() {
//         console.log(this)
//         console.log(this.name)
//     }
// }
//
// const anna = {
//     name: 'Anna',
//     showName: sergey.showName
// }
//
// const ihor = {
//     name: 'Ihor'
// }
//
// sergey.showName()
// anna.showName()
// sergey.showName.call(ihor)

//
// const newFunction = user2.showName.bind(user2)
// user2.showName.call(user2)
// newFunction()


// let user = {
//     firstName: "Sergey",
//     sayHi() {
//         console.log(`hello, ${this.firstName}!`);
//     }
// };

// setTimeout(user.sayHi, 1000);

// setTimeout(function() {
//     user.sayHi();
// }, 1000);

// const foo = user.sayHi.bind(user);

// setTimeout(foo, 1000);

// function mult(a, b) {
//     console.log(a * b)
// }
//
// const duble = mult.bind(null, 2);
// const triple = mult.bind(null, 3);
//
// duble(4)
// triple(4)