// class User {
//     constructor(name) {
//         this.name = name
//     }
//     seyHi() {
//         console.log(`Hello, my name is ${this.name}`)
//     }
// }
//
// const user = new User('Serhii');
// user.seyHi();
// console.log(typeof User);
// console.log(User);
// console.log(User.prototype);
//
// function User2(name) {
//     this.name = name
// }
//
// User2.prototype.sayHi = function () {
//     console.log(`Hello, my name is ${this.name}`)
// }
//
// const user2 = new User2('Jhon');
// user2.sayHi()
// console.log(typeof User2);
// console.log(User2);
// console.log(User2.prototype);

// *********************

// const myClass = class User {
//     showLog() {
//         console.log('Log!')
//     }
// }
//
// const logger = new myClass
// logger.showLog()
//
// function myClass2() {
//     return class {
//         showLog() {
//             console.log('Log!')
//         }
//     }
// }
//
// const FClass = myClass2()
// new FClass().showLog()

// *********************

// class User {
//     [ 'my' + 'Example' ] = 'example';
//
//     constructor(name) {
//         this.name = name;
//     }
//
//     get userName() {
//         return this.name
//     }
//
//     set userName(value) {
//         this.name = value
//     }
// }
//
// const user = new User('Jhon');
//
// console.log(user.userName);
// user.userName = 'Serhii'
// console.log(user.userName);
// console.log(user)

// *********************

// class Button {
//     constructor(value) {
//         this.value = value
//     }
//
//     click() {
//         console.log(this.value)
//     }
//
//     // click = () => {
//     //     console.log(this.value)
//     // }
// }
//
// const button = new Button('email');
// const myClick = button.click.bind(button);
//
// setTimeout(myClick, 1000);

// *********************

// class Animal {
//     constructor(name) {
//         this.name = name
//     }
//
//     get animalName() {
//         return this.name
//     }
//
//     set animalName(value) {
//         this.name = value
//     }
// }
//
// class Wolf extends Animal {
//     type = 'mammals';
//     showType() {
//         console.log(this.type)
//     }
// }
//
// const wolf = new Wolf('Kus');
// console.log(wolf);
// console.log(wolf.__proto__);
// console.log(Wolf.prototype);

// *********************

// class Animal {
//     constructor(name) {
//         this.name = name
//     }
//
//     showName() {
//         console.log(this.name)
//     }
// }
//
// class Wolf extends Animal {
//     constructor(speed = 0, name = '') {
//         super(name)
//         this.speed = speed
//     }
//     showName() {
//         super.showName();
//         console.log('Hello wolf');
//     }
// }
//
// class GrayWolf extends Wolf {
//     constructor(color, speed, name) {
//         super(speed, name)
//         this.color = color
//     }
// }
//
// const wolf = new Wolf(5, 'Kus');
// console.log(wolf);
// console.log(wolf.__proto__);
// wolf.showName()

// *********************

// let animal = {
//     name: 'Animal',
//     run() {
//         console.log(`${this.name} run!`)
//     }
// }
//
// let wolf = {
//     __proto__: animal,
//     run() {
//         super.run()
//     }
// }
//
// let grayWolf = {
//     __proto__: wolf,
//     run() {
//         super.run()
//     }
// }
//
// wolf.run()
// grayWolf.run()

// example

// let animal = {
//     greeting() {
//         console.log(`hello i m animal`)
//     }
// }
//
// let wolf = {
//     __proto__: animal,
//     greeting() {
//         super.greeting()
//     }
// }
//
// let fish = {
//     greeting() {
//         console.log(`hello i m fish`)
//     }
// }
//
// let tuna = {
//     __proto__: fish,
//     greeting: wolf.greeting
// }
//
// tuna.greeting()

// *********************

// class Users {
//     static sortUsers(data) {
//         ////
//         return data
//     }
//     constructor(url) {
//         this.url = url
//     }
//
//     getUsers() {
//         // ..... fetch some users
//     }
// }
//
// const users = new Users('http://........');
// console.log(users)
// const sorting = Users.sortUsers(users)

// class API {
//     static url = 'htpp://.......'
//
//     getUsers(prefix) {
//         fetch(API.url + prefix)
//     }
//
//     getUser(prefix, id) {
//         fetch(API.url + prefix + '/' + id, )
//     }
// }
//
// const caller = new API()
// const users = caller.getUsers('/users') // htpp://......./users

// class UsersApi {
//     static prefix = '/users'
// }
//
// const usersCaller = new UsersApi
//
// console.log(UsersApi.prototype)

// ******************

// class User {
//     constructor(name) {
//         this.name = name
//     }
// }
//
// const user = new User('Serhii')
//
// console.log(user instanceof User)

