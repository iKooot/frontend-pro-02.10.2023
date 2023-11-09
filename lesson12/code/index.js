// let counter = 1;
//
// function increaseCounter(value) {
//     counter += value
// }
//
// increaseCounter(4);
//
// // ***************************
//
// const PI = 3.14;
//
// function calculationArea(radius) {
//     return radius * radius * PI
// }
//
// function calculationArea2(radius, pi) {
//     return radius * radius * pi
// }
//
//
// calculationArea(5)
// calculationArea2(5, PI)
//
// // *****************************
//
// function foo() {
//     if (Math.random() > 0.5) {
//         console.log('hello')
//     }
// }
//
// foo()
//
// // *****************************
//
// function analizeFile(filename) {
//     // const file = fs.readStream(filePath);
//     const file = open(filename);
//     return file
// }
//
// // *******************************
//
// const values = [ 1, 2, 3, 4, 5]
// let sumOfValues = 0
//
// function sum(array, initial) {
//     let sum = initial
//     array.forEach( el => {
//         initial +=el
//     })
//     return initial
// }
//
// sum(values)
//
// // **************************
//
// const sum = (a, b) => a + b;
//
// // *************************
//
// function dubleSum(a, b) {
//     return (a + b) * 2
// }
//
// function sum(a, b) {
//     return a + b;
// }
//
// function dubleSum(f, a, b) {
//     return f(a, b) * 2
// }
//
// function trippleSum(f, a, b) {
//     return f(a, b) * 3
// }
//
// dubleSum(sum, a, b);
// trippleSum(sum, a, b);
//
// // ******************************
//
// {} !== {}
//
// const obj = {
//     name: '',
//     age: 2,
//     showName() {
//         console.log(this.name)
//     }
// }
//
// const obj2 = obj
//
// obj2 === obj

// *******************OOP

// const animal = {
//     type: 'mammals',
//     voice() {
//         console.log('Hello');
//     }
// }
//
// const wolf = {
//     name: 'Kus'
// }
//
// wolf.__proto__ = animal;
//
// console.log(wolf)
// console.log(wolf.type)
// wolf.voice()

// **********************

// const user1 = {}
// const user2 = {
//     __proto__: user1
// }
//
// // user1.__proto__ = user2
// user2.__proto__ = 1
// console.log(user2)
// user2.__proto__ = null
// console.log(user2)
// user2.__proto__ = {}
// console.log(user2)

// **********************

// const animal = {
//     name: undefined,
//     get animalName() {
//         return this.name
//     },
//     set animalName(value) {
//         this.name = value
//     },
//     voice()  {
//         console.log('hello')
//     }
// }
//
// const wolf = {
//     name: 'Kus',
//     __proto__: animal
// }
//
// console.log(wolf)
// console.log(wolf.animalName)
// wolf.animalName = 'KusKus'
// console.log(wolf.animalName)
// wolf.voice()
// animal.animalName = 'Animal'
// console.log(animal)

// **********************

// const animal = {
//     animalKey: ''
// }
//
// const dog = {
//     dogKey: '',
//     __proto__: animal
// }
//
// for ( const key in dog ) {
//     console.log(key)
// }
//
// for ( const key in dog ) {
//     if (dog.hasOwnProperty(key)) {
//         console.log('Dog', key)
//     } else {
//         console.log('prototype', key)
//     }
// }

// **********************
//
// const animal = {
//     name: '',
//     get animalName() {
//         return this.name
//     },
//     set animalNmae(value) {
//         this.name = value
//     }
// }
//
// const wolf1 = Object.create(animal)
// // wolf1.__proto__ = animal => legacy
// console.log(wolf1)
// const wolf2 = Object.create(animal, {
//     age: { value: 2, configurable: false, enumerable: true, writable: true },
//     type: { value: 'mammals', configurable: false, enumerable: true, writable: false }
// })
// wolf2.age = 5
// wolf2.type = 2
// console.log(wolf2)
// const dog = { name: "Dog" }
// Object.setPrototypeOf(dog, animal);
// console.log(dog)
//
// const clone = Object.create(Object.getPrototypeOf(wolf2), Object.getOwnPropertyDescriptors(wolf2));
// console.log(clone)

// **********************

// function User(name, surname) {
//     this.name = name
//     this.surname = surname
// }
//
// const user1 = new User('Serhii', 'Savchuk')
// console.log(user1)

// *************************

// function Animal(name, age) {
//     this.name = name
//     this.age = age
// } // { constructor: Animal }
//
// const infoMethods = {
//     showName() {
//         console.log(this.name)
//     },
//     showAge() {
//         console.log(this.age)
//     },
// }
//
// Animal.prototype = infoMethods;
// const dog = new Animal('Bug', 4);
// console.log(Animal.prototype === infoMethods)
// console.log(dog)
// dog.showName()
// console.log(dog.__proto__ === infoMethods);

// *************************

// function Animal(name, age) {
//     this.name = name
//     this.age = age
// } // { constructor: Animal }
//
// console.log(Animal.prototype)
// console.log(Animal.prototype.constructor === Animal)
//
// Animal.prototype.showAge = function () {
//     console.log(this.age)
// }
//
// const dog = new Animal('Bug', 3);
// const newDog = new dog.constructor('BugBug', 4);
// console.log(dog)
// console.log(newDog)
// newDog.showAge()