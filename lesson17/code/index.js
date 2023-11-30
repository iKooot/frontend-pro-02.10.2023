/****************************************
 *                 Spread               *
 ****************************************/
//
// function foo( a, b, c ) {
//     // console.log(arguments);
//     return a + b + c
// }
//
// const arr = [1, 2, 3]
// const arr2 = [1, 2, 3, 4, 5, 6, 7, 8]
// console.log(foo(arr[0], arr[1], arr[2]));
// console.log(foo.apply(null, arr));
// console.log(foo(...arr));
// console.log(foo(...arr2));

// const arr = [1, 2, 3, 4];
// const arr2 = [5, 6, 7, 8];
// console.log([].concat(arr, arr2))
// console.log([...arr, ...arr2])
// console.log([0, ...arr, ...arr2, 9])
// console.log([...arr] === arr)
// console.log([...arr])

// const obj3 = {
//     age: 32
// }
//
// const obj = {
//     name: 'Serhii'
// }
//
// const obj2 = {
//     surname: 'Serhii',
//     ...obj3
// }

// console.log(Object.assign({}, obj, obj2))
// console.log({ ...obj, ...obj2 })
// const obj = { 'key': 'value' };
//
// obj[Symbol.iterator] = function () {
//     const keys = Object.keys(this);
//     let index = 0;
//
//     return {
//         next: () => {
//             if (index < keys.length) {
//                 const key = keys[index++]
//                 return { value: this[key], done: false }
//             } else {
//                 return { done: true }
//             }
//         }
//     }
// }
//
// console.log(obj)
//
// const arr = [...obj];
//
// console.log(arr);

// const arr = ['first', 'second', 'third'];
// function foo(a, ...rest) {
//     console.log('arguments =>', arguments)
//     console.log('a => ', a)
//     console.log('rest => ', rest)
// }
//
// // foo(1, 2, 3, 4);
// foo(...arr);

// const arr = [1, 2, 3, 4, 5, 6];
// const [first, second, ...rest] = arr;
// console.log(first)
// console.log(second)
// console.log(rest)

// const str = 'str';
// const [first, second, third, some] = str;
// console.log(first)
// console.log(second)
// console.log(third)
// console.log(some) // null || undefined

// const [first, second, third] = new Set([1, 1, 1, 2, 3, 4, 5]) // [1, 2 ......]
// console.log(first)
// console.log(second)
// console.log(third)

// const str = 'str';
// const [first, second, third, some = 'default'] = str;
// console.log(first)
// console.log(second)
// console.log(third)
// console.log(some) // default

// const [name = prompt('Enter your name'), surname = prompt('Enter your surname')] = ['Serhii']

// console.log(name)
// console.log(surname)
const obj = {
  key: "value",
};

const options = {
  title: "Menu",
  width: 100,
  height: 100,
  obj,
};

// const { title, width, height } = options;
// console.log(title)
// console.log(width)
// console.log(height)
// console.log(height === options.height)
// const { title, ...rest} = options;
// console.log(title)
// console.log(rest.obj === obj)

/*
Error

let title, width;
{ title, width } = options;

*/

// const { obj: myObj, ...preparedPotions} = options;
// const { title: optionTitle = prompt('Enter title'), ...rest} = preparedPotions;
// console.log(optionTitle)
// console.log(rest)

// const user = {
//   name: "Serhii",
//   surname: "Savchuk",
//   hobbies: ["shooting", "coding"],
//   access: {
//     lms: true,
//     cart: true,
//   },
// };
//
// const {
//   hobbies: [firstHobby],
//   access: { cart: accessToCart, lms = false },
// } = user;
//
// console.log(firstHobby);
// console.log(accessToCart);
// console.log(lms);

// function foo(a, s, d, f, g) {
//     console.log(param)
// }
//
// foo(11111111, undefined, 3333, undefined, 3333333)

// function foo({ param, extra= 1}) {
//     console.log(param + extra)
// }
//
// foo({ param: 'Hello' });

/****************************************
 *                  window              *
 ****************************************/
// console.log(window)
// console.log(window.closed)
// console.log(window.innerWidth)
// console.log(window.innerHeight)
// console.log(window.location)
/****************************************
 *                  window              *
 ****************************************/
// console.log(document)
// console.log(document.body)
// console.log(document.head)
// document.body.style.background = '#333'
// document.body.style.color = '#fff'
// const button1 = document.getElementById('button1');
// button1.onclick = () => {
//     location.reload()
// }
// const button2 = document.getElementById('button2');
// button2.onclick = () => {
//     location.href = 'http://google.com'
// }
/****************************************
 *             navigatiopn              *
 ****************************************/
// console.log(document.documentElement);
// const body = document.body;
// console.log('parentNode', body.parentNode);
// console.log('firstChild', body.firstChild);
// console.log('lastChild', body.lastChild);
// console.log('previousSibling', body.previousSibling);
// console.log('nextSibling', body.nextSibling);
// console.log('childNodes', body.childNodes);
// console.log('childNodes[0] === firstChild', body.childNodes[0] === body.firstChild);

// for (const node of document.body.childNodes) {
//   console.log(node)
// }

// const body = document.body;
// console.log('parentElement', body.parentElement);
// console.log('firstElementChild', body.firstElementChild);
// console.log('lastElementChild', body.lastElementChild);
// console.log('previousElementSibling', body.previousElementSibling);
// console.log('nextElementSibling', body.nextElementSibling);
// console.log('children', body.children);
// console.log('children[0] === firstChild', body.children[0] === body.firstElementChild);

/****************************************
 *             search                   *
 ****************************************/

// const button1 = document.getElementById('button1');
// console.log(button1)
// const buttons = document.querySelectorAll('button')
// console.log(buttons)
// const lis = document.querySelectorAll('li.element')
// console.log(lis)
// const div = document.querySelector('div')
// console.log(div);
// const button2 = document.querySelector('#button2')
// console.log(button2)

// for (const element of document.body.children) {
//   if (element.matches('div')) {
//     console.log(element)
//   }
// }

const list = document.querySelector('ul');
console.log(list.closest('h1'))