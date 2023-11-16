// class User {
//     _salary;
//     _isOwner;
//
//     constructor(name) {
//         this.name = name;
//         this._isOwner = false;
//     }
//
//     get salary() {
//         return this._salery;
//     }
//
//     set salary(value) {
//         this._salery = value;
//     }
//
//     get isOwner() {
//         return this._isOwner;
//     }
// }
//
// const user1 = new User('Serhii')
// user1.salery = 1000000000;
// console.log(user1)
// console.log(user1.salery)
// user1.isOwner = true;
// console.log(user1.isOwner)

// ****************

// class User {
//     #isOwner;
//     constructor(name) {
//         this.name = name;
//     }
//
//     #setOwner() {
//         this.#isOwner = true
//     }
//
//     raseUp() {
//         this.#setOwner()
//     }
// }
//
// class Extend extends User {
//     constructor() {
//         super();
//     }
// }
//
// const user = new User('Serhii')
// console.log(user)
// user.raseUp()
// console.log(user)
//
// const example = new Extend
// console.log(example)

// ****************

// class MyArray extends Array {
//     myMap(callback) {
//         const mappedArray = super.map((element, index, array) => {
//             console.log('%c' + 'logger: ' + element, 'color: green');
//             return callback(element, index, array);
//         })
//         console.log('%c' + 'logger: Map is finished: ' + mappedArray.join(''), 'color: yellow');
//         return new MyArray(...mappedArray)
//     }
//     isEmpty() {
//         return this.length === 0;
//     }
// }
//
// let arr = new MyArray(1, 2, 3, 4) // new Array()
// console.log(arr);
// console.log(arr.isEmpty());
// console.log(arr.myMap(el => {
//     return el + 1
// }))

// ****************

// console.log({}.toString())

// const objToString = Object.prototype.toString;
//
// let arr = [];
//
// console.log(objToString.call(arr));
//
// const user = {
//     [Symbol.toStringTag]: 'User'
// }
//
// console.log(objToString.call(user));

// ****************

// class User {
//     constructor(name) {
//         this.name = name
//     }
// }
//
// const showInfo = {
//     showName() {
//         console.log(this.name)
//     }
// }
//
// Object.assign(User.prototype, showInfo);
//
// const user = new User('Serhii');
// user.showName()

// ************************
class User {
    constructor(username) {
        this.username = username;
    }

    sayHello() {
        console.log(`Hello, I'm ${this.username}`);
    }
}

class Info {
    constructor(age) {
        this.age = age;
    }

    displayAge() {
        console.log(`I am ${this.age} years old`);
    }
}
function mixClasses(...classes) {
    class MixedClass {
        constructor() {
            classes.forEach((Class) => {
                const instance = new Class();
                Object.getOwnPropertyNames(Class.prototype).forEach((name) => {
                    this[name] = instance[name].bind(this);
                });
            });
        }
    }

    return MixedClass;
}

const MixedClass = mixClasses(User, Info);

const mixedInstance = new MixedClass();

mixedInstance.username = "Serhii";
mixedInstance.age = 32;

mixedInstance.sayHello();
mixedInstance.displayAge();

