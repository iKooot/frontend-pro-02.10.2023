// 'use strict'

// const sum = (a, b) => {
//     return a + b
// }

// const sum = (a, b) => a + b;
//
// console.log(sum(1, 2));

// const showContext = () => {
//     console.log(this)
// }

// function showContext() {
//     console.log(this)
// }
//
// showContext()

// const group = {
//     title: 'Group 1',
//     students: ['Serhii', 'Ivan'],
//     showStudents() {
//         this.students.forEach( (student) => {
//             console.log(this)
//             console.log(`${this.title} - ${student}`)
//         })
//     },
//     // showStudents() {
//     //     this.students.forEach( function (student){
//     //         console.log(this)
//     //         console.log(`${this.title} - ${student}`)
//     //     }, this)
//     // }
// }
//
// group.showStudents()

// function foo() {
//
// }
//
// const foo = function () {
//
// }
//
// const foo = () => {}

// function foo() {
//     return () => {
//         console.log('Hello')
//     }
// }
//
// const hello = foo()
//
// hello()

// function checkPassword() {
//     const password = '123';
//
//     return (checking) => {
//         return password === checking
//     }
// }
//
// const checking = checkPassword();
//
// console.log(checking('123'))

// function pow(x, n) {
//     let result = 1;
//
//     for (let i = 0; i < n; i++) {
//         result *= x
//     }
//
//     return result
// }

function pow(x, n) {
    if (n === 1) {
        return x
    } else {
        return x * pow(x, n - 1)
    }
}

// const limkedList = {
//     value: '',
//     next: {
//         value: '',
//         next: {
//             value: '',
//             next: {
//                 value: '',
//                 next: {
//                     value: '',
//                     next: {
//                         value: '',
//                         next: {
//                             value: '',
//                             next: {
//                                 value: '',
//                                 next: {
//
//                                 }
//                             }
//                         }
//                     }
//                 }
//             }
//         }
//     }
// }

// const organization: {
//     development: {
//         sales: 0
//         emploise: []
//     },
//     management: {
//         sales: 0
//         emploise: []
//     }
// }

// const pow = (x, n) => (n === 1) ? x : (x * pow(x, n - 1));

console.log(pow(2, 2));
