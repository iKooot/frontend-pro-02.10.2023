// function loadScript(src, callback) {
//     let script = document.createElement('script');
//     script.src = src;
//
//     script.onload = () => callback(null, script);
//     script.onerror = () => callback(new Error(`Помилка завантаження скрипту для ${src}`));
//
//     document.head.append(script);
// }
//
// function handleError(error) {
//     throw new Error(JSON.stringify(error))
// }
//
// loadScript(error = null, './script1.js', () => {
//     if (error) {
//         handleError(error)
//     } else {
//         loadScript(error = null, './script2.js', () => {
//             if (error) {
//                 handleError(error)
//             } else {
//                 loadScript(error = null, './script3.js', () => {
//                     if (error) {
//                         handleError(error)
//                     } else {
//                         loadScript(error = null, './script4.js', () => {
//                             if (error) {
//                                 // обробляємо помилку
//                             } else {
//                                 //... TODO something
//                                 /*
//                                  funcFromScript1
//                                  funcFromScript2
//                                  funcFromScript3
//                                  funcFromScript4
//                                 */
//                             }
//                         });
//                     }
//                 });
//             }
//         });
//     }
// });

/****************************************
 * promise
 ****************************************/

// let jobDone = false;
//
// const promise = new Promise(function a(resolve, reject) {
//   console.log(jobDone);
//   setTimeout(function b() {
//     const randomNumber = Math.random();
//
//     if (randomNumber > 0.5) {
//       resolve(`Success operation, number is ${randomNumber}`);
//     } else {
//       reject(new Error(`Error operation, number is ${randomNumber}`));
//     }
//   }, 1000);
// });

// promise.then((value) => {
//     console.log(value)
// }, (reason) => {
//     console.log(reason)
// })

// promise
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     jobDone = true;
//     console.log("Promise ended", jobDone);
//   });

/****************************************
 *
 ****************************************/

// new Promise((resolve) => {
//   resolve(1);
// })
//   .then((value) => value + 1)
//   .then((value) => value + 1)
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

/****************************************
 * example
 ****************************************/

// function loadScript(src) {
//   return new Promise((resolve, reject) => {
//     const script = document.createElement("script");
//     script.src = src;
//
//     script.onload = () => resolve(script);
//     script.onerror = () =>
//       reject(new Error(`Filed to load the script: ${script}`));
//
//     document.head.append(script);
//   });
// }
//
// loadScript("./utils.js")
//   .then((script) => {
//     console.log(`${script.src} downloaded`);
//     return loadScript("./utils2.js");
//   })
//   .then()
//   .then();

/****************************************
 * example
 ****************************************/

// const start = Date.now();
//
// new Promise(function a(resolve) {
//   setTimeout(function b() {
//     resolve(1);
//   }, 1000);
// })
//   .then(function c(value) {
//     return new Promise(function d(resolve) {
//       setTimeout(function e() {
//         resolve(value + 1);
//       }, 3000);
//     }).then(function f(value) {
//       return value + 1;
//     });
//   })
//   .then(function g(value) {
//     console.log(value);
//   })
//   .finally(function h() {
//     console.log(Date.now() - start);
//   });

/****************************************
 * all
 ****************************************/

// const promise1 = new Promise(resolve => {
//   setTimeout(() => {
//     resolve(1)
//   }, 1000)
// })
//
// const promise2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // resolve(2)
//     reject(new Error('ups...'))
//   }, 2000)
// })
//
// const promise3 = new Promise(resolve => {
//   setTimeout(() => {
//     resolve(3)
//   }, 3000)
// })
//
// Promise.all([promise1, promise2, promise3]).then(value => {
//   console.log(value)
// })

/****************************************
 * allSettled
 ****************************************/

// const promise1 = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve(1);
//   }, 1000);
// });
//
// const promise2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // resolve(2)
//     reject(new Error("ups..."));
//   }, 2000);
// });
//
// const promise3 = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve(3);
//   }, 3000);
// });
//
// Promise.allSettled([promise1, promise2, promise3]).then((value) => {
//   value.forEach((el) => console.log(el));
// });

/****************************************
 * race
 ****************************************/

// const promise1 = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve(1);
//   }, 3000);
// });
//
// const promise2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(2)
//     // reject(new Error("ups..."));
//   }, 1000);
// });
//
// const promise3 = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve(3);
//   }, 3000);
// });
//
// Promise.race([promise1, promise2, promise3]).then(value => {
//   console.log(value)
// })

/****************************************
 * any
 ****************************************/

// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // resolve(1);
//     reject(new Error("ups...1"));
//   }, 3000);
// });
//
// const promise2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // resolve(2)
//     reject(new Error("ups...2"));
//   }, 1000);
// });
//
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // resolve(3);
//     reject(new Error("ups...3"));
//   }, 3000);
// });
//
// Promise.any([promise1, promise2, promise3]).catch(e => {
//   console.log(e)
//   console.log(e.constructor.name)
//   console.log(e.errors)
// })

/****************************************
 * async/await
 ****************************************/

// async function foo() {
//   return 1
// }
//
// foo().then()
//
// function foo2() {
//   return new Promise( (resolve) => {
//     resolve(1)
//   })
// }
//
// foo2().then()

/****************************************
 * example
 ****************************************/

// async function foo(){
//   const promise1 = new Promise(resolve => {
//     setTimeout( () => {
//       resolve(1)
//     }, 1000)
//   })
//
//   const promise2 = new Promise(resolve => {
//     setTimeout( () => {
//       resolve(2)
//     }, 2000)
//   })
//
//   const promise3 = new Promise(resolve => {
//     setTimeout( () => {
//       resolve(3)
//     }, 3000)
//   })
//
//   const [result1, result2, result3] = await Promise.all([promise1, promise2, promise3]);
//
//   console.log(result1)
//   console.log(result2)
//   console.log(result3)
// }
//
// foo()

/****************************************
 * try/catch
 ****************************************/

// try {
//   console.log('hello')
// } catch (e) {
//   console.log(e)
// }
//
// // try {
// //   ..........
// // } catch (e) {
// //   console.log(e)
// // }
//
// try {
//   console.log(hello)
// } catch (e) {
//   console.log(e.name)
//   console.log(e.message)
// }

/****************************************
 * finaly
 ****************************************/

// function factorial(n) {
//   if ( n === 1 ) {
//     return 1
//   } else {
//     return n * factorial(n - 1)
//   }
// }
//
// function calcTime(n) {
//   const start = performance.now();
//
//   try {
//     const result = factorial(n)
//     console.log(result)
//   } catch (e) {
//     console.log(e)
//   } finally {
//     console.log(`time: ${performance.now() - start}`)
//   }
// }
//
// calcTime('fasdfasdfs')
// console.log('after')

/****************************************
 * errors
 ****************************************/

// const exp = 'console.log("hello"';
//
// try {
//   const result = eval(exp)
// } catch (e) {
//   console.log(e)
// }
//
// try {
//   const arr = new Array(-1)
// } catch (e) {
//   console.log(e)
// }
//
// try {
//   console.log(fasdfasdfas)
// } catch (e) {
//   console.log(e)
// }
//
// // try {
// //   console.log('fasdfasdfas'
// // } catch (e) {
// //   console.log(e)
// // }
//
// try {
//   window.some1234()
// } catch (e) {
//   console.log(e)
// }
//
// try {
//   decodeURIComponent('%')
// } catch (e) {
//   console.log(e)
// }

// let i = 0
//
// setInterval(() => {
//   i++
//   if (i === 2) throw new Error('i is 10')
// }, 1000)

/****************************************
 * custom
 ****************************************/

// class ValidationError extends Error {
//     constructor(message) {
//         super(message);
//         this.name = 'ValidationError'
//     }
// }
//
// class PropReqError extends ValidationError {
//     constructor(prop) {
//         super(`No prop: ${prop}`)
//         this.name = 'PropReqError';
//         this.prop = prop
//     }
// }
//
// let i = 0
//
// setInterval(() => {
//   i++
//     try {
//         if (i === 2) throw new PropReqError('class')
//     } catch (e) {
//         console.log(e)
//         console.log(e.name)
//         console.log(e.prop)
//     }
// }, 1000)

/****************************************
 * fetch
 ****************************************/

async function fetchSwFilms() {
    let films;

    try {
       const resp = await fetch('https://swapi.dev/api/films');
       const data = await resp.json();
       films = data.results || [];
    } catch (e) {
        console.log(e)
    }

    console.log(films)
}

fetchSwFilms()


