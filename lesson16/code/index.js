// const myMap = new Map();
// const key = { key: "key" };
// const value = { value: "value" };
// myMap.set(key, value);
// console.log(myMap);
// console.log(myMap.get(key));
// console.log(myMap.has({ key: "key" }));
// console.log(myMap.has(key));
// console.log(myMap.delete(key));
// console.log(myMap.size);
// myMap
//   .set(1, 1)
//   .set(null, null)
//   .set("string", "string")
//   .set(true, true)
//   .set(key, value);
// console.log(myMap.size);
// myMap.clear();
// console.log(myMap.size);
// console.log(myMap);

/****************************************
 *                  for                *
 ****************************************/

// const myMap = new Map();
// myMap
//   .set(1, 1)
//   .set(null, null)
//   .set("string", "string")
//   .set(true, true)
//   .set({ key: 'key' }, { value: 'value' });

// console.log(myMap.keys());
// console.log(myMap.values());
// console.log(myMap.entries());

// for (const key of myMap.keys()) {
//     console.log(key)
// }
//
// for (const value of myMap.values()) {
//     console.log(value)
// }
//
// for (const [ key, value ] of myMap.entries()) {
//     console.log('key: ', key)
//     console.log('value: ', value)
// }

// myMap.forEach( (el, i, map) => {
//     console.log('el => ', el)
//     console.log('i => ', i)
//     console.log('map => ', map)
// })

/****************************************
 *                  default             *
 ****************************************/

// const myMap = new Map([['key', 'key'], [{ key: 'key' }, { value: 'value' }]]);
// const obj = { key: 'value' };
// const myMap2 = new Map(Object.entries(obj))
// console.log(Object.entries(obj))
// console.log(myMap2)

/****************************************
 *                  default             *
 ****************************************/

// const myMap = new Map();
// myMap.set({}, {}).set(true, true).set('string', 'string');
// console.log(Object.fromEntries(myMap.entries()));
// console.log(Object.fromEntries(myMap));

/****************************************
 *                  default             *
 ****************************************/

// const set = new Set();
//
// set
//     .add(1)
//     .add(1)
//     .add(1)
//     .add(1)
//     .add(1)
//     .add(1)
//     .add(1)
//     .add(1)
//     .add(1)
//     .add(2)
//     .add(2)
//     .add(2)
//     .add(2)
//     .add(null)
//     .add(null)
//     .add(null)
//     .add(null)
//     .add(null)
//     .add(null)
//     .add({ key: 'value' })
//     .add({ key: 'value' })
//     .add({ key: 'value' })
//     .add({ key: 'value' })
//     .add({ key: 'value' });
// console.log(set.has(1));
// console.log(set.has(5));
// console.log(set.delete(null));
// console.log(set.size);
// set.clear();
// console.log(set.size);

// const arr = [1, 2, 3, 4, 5, 6, 1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2];
//
// const uniqueArr = [];
//
// arr.forEach( el => {
//     if (!uniqueArr.includes(el)) {
//         uniqueArr.push(el)
//     }
// })
//
// console.log(uniqueArr)
//
// console.log(Array.from(new Set(arr)))

/****************************************
 *                  default             *
 ****************************************/

// const set = new Set();
// set.add(1).add({ key: 'value' });
// console.log(set.keys());
// console.log(set.values());
// console.log(set.entries());
//
// for (const values of set.values()) {
//     console.log(values)
// }
//
// set.forEach( el => {
//     console.log(el)
// })

/****************************************
 *                  Weak Map             *
 ****************************************/

// const weakMap = new WeakMap();
// let key = { key: 'key' }
// let key2 = { key: 'key' }
// const value = { value: 'value' }
// weakMap.set(key, value).set(key2, {});
// console.log(weakMap.has(key));
// console.log(weakMap.get(key));
// key = null;
// console.log(weakMap.has(key2));
// console.log(weakMap.delete(key2));
// console.log(weakMap.has(key2));
// console.log(weakMap);

/****************************************
 *                  Weak Map             *
 ****************************************/

// const cache = new WeakMap();
//
// function process(obj) {
//     let visits = 1;
//
//     if (!cache.has(obj)) {
//         cache.set(obj, visits);
//         return visits;
//     }
//
//     visits += cache.get(obj);
//     cache.set(obj, visits);
//     return visits;
// }
//
// let user = {};
//
// const result1 = process(user);
// const result2 = process(user);
// const result3 = process(user);
// console.log(result1)
// console.log(result2)
// console.log(result3)
// user = null
// console.log('cache', cache.get(user))

/****************************************
 *                  WeakSet                *
 ****************************************/

// const ws = new WeakSet();
// const obj = { key: 'value' }
// ws.add({ key: 'value' }).add(obj);
// // ws.add(1); // Error
// console.log(ws.has(obj))
// console.log(ws.delete(obj))
// console.log(ws.has(obj))

/****************************************
 *                 Spread               *
 ****************************************/

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
//
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