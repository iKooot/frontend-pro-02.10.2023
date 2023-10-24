// const arr = [
//     "string",
//     4,
//     undefined,
//     null,
//     10n,
//     true,
//     {},
// ];

// arr[0] = 'String';
//
// console.log(arr[1])
// console.log(arr.at(-1))

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }
//
// for (const value of arr) {
//     console.log(value);
// }

// const el = arr.shift();
// console.log(arr)
// console.log(el)
// arr.unshift(el, 'Hello', false);
// console.log(arr)

// const example = 'hello world';
// const index = arr.push(example);
// console.log(index)
//
// const popReturns = arr.pop();
// console.log(popReturns);
// console.log(arr)

// const arr = ['Sergey', 'Andrey', 'Iliya', 'Anna']

// console.log(arr)
// const some = arr.splice(1, 1, 'Dima', 'Example');
// console.log(some)
// console.log(arr)
// console.log(arr.slice(3))
// console.log(arr)

// const names = ['Sergey', 'Andrey', 'Iliya', 'Anna', { name: 'Vanya' }, { name: 'Jhon' }];
// const numbers = [1, 5, 2, 8, 4];
// const obj = {
//     0: 'value',
//     length: 1,
//     [Symbol.isConcatSpreadable]: true
// }
//
// const union = names.concat(obj, numbers);

// let name;
// union.forEach( (element, index, array) => {
//     if (element === 'Sergey') name = element
//     // console.log(`el = ${element}, i = ${index}, array = ${array}`)
//     // return = undefined
// })
// console.log(name)

// console.log(union.indexOf('Anna', 4)) // -1
// console.log(union.indexOf('Anna')) // 3
// console.log(union.includes('Anna')) // true
// console.log(union.includes('Anna2')) // false
//
// const user = union.find((element, index, array) => {
//     console.log(`el = ${element}, i = ${index}, array = ${array}`)
//     return element.name === 'Jhon';
// })
//
// console.log(user)

// const numbers = [1, 5, 2, 8, 4];
//
// numbers.sort((a, b) => {
//     // console.log(`a = ${a}, b = ${b} diff = ${a - b}`)
//     if (a > b) return -1
//     if (b > a) return 1
//     return 0
// })
//
// console.log(numbers)

// const names = ['Serhii', 'Hanna', 'Jhon', 'Inna', 'Example'];
//
// names.sort( (a, b) => {
//     // return a.localeCompare(b);
//     return ~a.localeCompare(b);
// })
//
// console.log(names)

// const names = ['Serhii', 'Hanna', 'Jhon', 'Inna', 'Example'];
//
// const newNames = names.map( (element, index, array) => {
//     return { name: element, index }
// })
//
// console.log(names)
// console.log(newNames)

const numbers = [1, 5, 2, 8, 4]
//
// const newNumbers = numbers.map(function (el) {
//     return el + 2
// })
//
// const names = ['Serhii', 'Hanna', 'Jhon', 'Inna', 'Example'];
//
// console.log(newNumbers)
// console.log(newNumbers.reverse())
// console.log('Hello, world'.split(''))
// console.log('Hello, world'.split(', '))
// console.log('Hello, world'.split(', dsfasd'))
// console.log(names.join('%..%'))
// console.log(Array.isArray(numbers))
// console.log(Array.isArray('numbers'))

const result = numbers.reduce(( acc, el, i, array ) => {
    return acc += el
}, 0)

const result2 = numbers.reduce(( acc, el, i, array ) => {
    if(el % 2) {
        acc.even += 1
    } else {
        acc.odd += 1
    }

    return acc
}, { odd: 0, even: 0 })

console.log(result)
console.log(result2)
