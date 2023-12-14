/****************************************
 * timeout
 ****************************************/
// function hello(name) {
//     console.log(`Hello ${name}`)
// }
//
// const timerId = setTimeout(hello, 2000, 'Serhii');
// clearTimeout(timerId)
/****************************************
 * interval
 ****************************************/
// const p = document.getElementById('interval-value');
// let i = 0;
//
// const intervalId = setInterval(() => {
//     i++
//     p.textContent = i
//     if (i === 5) clearInterval(intervalId)
// },100)
/****************************************
 * inner
 ****************************************/
// console.log('before', new Date())
// let timer = setTimeout( function foo() {
//     console.log('tick', new Date())
//     timer = setTimeout(foo, 1000)
// }, 3000)
/****************************************
 * example
 ****************************************/
// let deley = 2000
// let status = 'loading';
// let requestCouner = 0;
//
// let timer = setTimeout( function request() {
//     console.log('sending request')
//
//     requestCouner++
//     requestCouner > 3 ? status = 'success' : status = 'reject'
//
//
//     if (status === 'reject') {
//         console.log('need mor time')
//         deley *= 2
//     }
//
//     timer = setTimeout(request, deley)
//     if (status === 'success') clearTimeout(timer)
// }, deley)
/****************************************
 * evevnt loop
 ****************************************/
// let i = 0
//
// let time = Date.now()
//
// function counter() {
//     console.log(i)
//
//     do {
//         i++
//     } while (i % 100 !== 0)
//
//     if ( i === 1e6) {
//         console.log('done by', Date.now() - time)
//     } else {
//         setTimeout(counter)
//     }
// }
//
// counter()

// console.log(1);
//
// setTimeout(function a(){
//     console.log(2)
// }, 100)
//
// setTimeout(function b() {
//     console.log(3)
//
//     Promise.resolve().then( function c(){
//         console.log(4)
//     })
// }, 0)
//
// Promise.resolve().then( function d() {
//     console.log(5)
// })
//
// queueMicrotask(function e() {
//     console.log(6)
// })
//
// console.log(7)

/****************************************
 * callback
 ****************************************/

function loadScript(src, callback) {
    const script = document.createElement('script');
    script.src = src
    script.onload = () => callback(null, script)
    script.onerror = () => callback(new Error('ups'))

    document.head.append(script)
}

function errorHandler(error) {
    throw error
}

loadScript('./utils1.js', (error, script) => {
    if (error) {
        errorHandler(error)
    } else {
        loadScript('./utils2.js', (error, script) => {
            if (error) {
                errorHandler(error)
            } else {
                loadScript('./utils3.js', (error, script) => {
                    if (error) {
                        errorHandler(error)
                    } else {
                        loadScript('./utils4.js', (error, script) => {
                            if (error) {
                                errorHandler(error)
                            } else {
                                loadScript('./utils5.js', (error, script) => {
                                    if (error) {
                                        errorHandler(error)
                                    } else {

                                    }
                                })
                            }
                        })
                    }
                })
            }
        })
    }
})

