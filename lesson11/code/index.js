// const user = {}
// const user2 = new Object()
// console.log(user)
// console.log(user2)

// const user = {
//     name: 'Serhii',
//     0: 'number',
//     'hello world': 'hello',
//     sayHi() {
//         console.log('hi')
//     }
// }
//
// user.sayHi()
// console.log(user)
// delete user["0"]
// console.log(user)
// const key = 'name';
// delete user[key]
// console.log(user)
// delete user.sayHi
// console.log(user)
// console.log(user['hello world'])
//
// const key1 = 'name'
// const key2 = 'full'
//
// user[key1 + key2] = 'Serhii Savchuk';
// console.log(user)
// user[{key: 'value'}] = 1
// console.log(user)

// const user  = {
//     name: 'Serhii',
//     age: 32,
//     sayHi() {
//         console.log('Hello')
//     }
// }

// console.log(user.name)
// console.log('name' in user)
// console.log('name2' in user)

// for ( const key in user ) {
//     console.log(user[key])
// }

// const user2 = user;

// console.log(user === user2)

// const user  = {
//     name: 'Serhii',
//     age: 32,
//     sayHi() {
//         console.log('Hello')
//     }
// }
//
// const hobbies = {
//     hobbies: ['programing'],
//     obj: {
//         newObj: {
//             name: 'hello'
//         }
//     },
//     showHobbies() {
//         this.hobbies.forEach( hobby => console.log(hobby))
//     }
// }
//
// const cloneTarget = Object.assign(user, hobbies, { speed: 1 })
//
// user.obj.newObj = []
// console.log(user)
// console.log(hobbies)

// const user = {
//     name: 'Serhii',
//     age: 32
// }
//
// const clone = structuredClone(user);
//
// console.log(user === clone)

// function User(name, age) {
//     // неявно створено this = {}
//     this.name = name;
//     this.age = age;
//     this.dateOfBirth = new Date().getFullYear() - this.age
//     this.showName = () => console.log(this.name)
//     this.showName = function () {
//         console.log(this.name);
//     }
//     //неявно return this
// }
//
// const user1 = new User( 'Serhii', 32 )
//
// console.log(user1)
// user1.showName()

// const key = undefined
//
// const obj = {
//     obj2: {
//         method() {
//             console.log('hello')
//         }
//     }
// }
//
// // if (data?.users) {
// //     data.users.forEach( ...... )
// // }
//
//
// obj.obj2.method()
// // console.log(obj.obj2.method2?.());
// console.log(obj.obj2[key]);

// const id = Symbol('userId');

// const userId = Symbol.for('userId');
//
// const user = {
//     name: "Sergey",
//     [userId]: 1
// }
//
// // user[id] = 1;
// console.log(user)

// const user = {};
//
// Object.defineProperty(user, "name", {
//   value: "Serhii",
//   configurable: true,
//   enumerable: true,
//   writable: true,
// });
// Object.defineProperty(user, "surname", {
//   value: "Savchuk",
//   configurable: true,
//   enumerable: true,
//   writable: true,
// });
// Object.defineProperty(user, "age", {
//   value: 32,
//   configurable: true,
//   enumerable: true,
//   writable: false,
// });
// Object.defineProperty(user, "showName", {
//   value: () => {
//     console.log(this.name);
//   },
//   configurable: true,
//   enumerable: false,
//   writable: true,
// });
// Object.defineProperty(user, "fullName", {
//   get: function () {
//     return this.name + " " + this.surname;
//   },
//   set: function (value) {
//       const split = value.split(' ')
//       this.name = split[0]
//       this.surname = split[1]
//   },
// });
// // user.name = 'Jhon'
// // user.age = 10
// // console.log(user)
// //
// // for (const key in user) {
// //     console.log(key)
// // }
//
// console.log(user);
// console.log(user.fullName);
// user.fullName = 'Jhon Doe'
// console.log(user.fullName);

// const user = {
//   name: "Serhio",
//   surname: "Savchuk",
//   get fullName() {
//     return this.name + " " + this.surname;
//   },
//   set fullName(value) {
//     const split = value.split(" ");
//     this.name = split[0];
//     this.surname = split[1];
//   },
// };
//
// console.log(user.fullName);
// user.fullName = 'Jhon Doe';
// console.log(user.fullName);

// const user = {};
//
// Object.defineProperties(user, {
//   name: { value: "Serhii"},
//   surname: { value: "Savchuk"},
// });

// console.log(Object.keys(user));
// Object.getOwnPropertyNames(user).forEach( key => console.log(key))

// const descriptors = Object.getOwnPropertyDescriptor(user, 'name');
// console.log(descriptors)
