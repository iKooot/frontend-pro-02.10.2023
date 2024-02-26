// const { sum } = require('./lib/calc');
// const logger = require('./lib/logger')
// // console.log('Hello node js')
// // console.log('sum => ', sum(1, 2))
//
// logger.info(`sum => ${sum(1, 2)}`)

/****************************************
 * env
 ****************************************/
// require('dotenv').config()
// const yargs = require('yargs/yargs')
// const { hideBin } = require('yargs/helpers')
// const argv = yargs(hideBin(process.argv)).parse()
//
// console.log(argv.todo)

/****************************************
 * timer
 ****************************************/

// let process = true
//
// setImmediate(() => {
//     console.log('Starting')
// })
//
// const intervalId = setInterval(() => {
//     if (process) console.log('Searching...')
// }, 1000)
//
// setTimeout(() => {
//     console.log('Find file')
//     process = false
//     clearInterval(intervalId)
// }, 3000)

/****************************************
 * event
 ****************************************/
const MyEmitter = require('./lib/emitter');

// MyEmitter.emit('init', { name: 'Serhii' })
MyEmitter.emit('data')
MyEmitter.emit('data')
MyEmitter.emit('data')
MyEmitter.emit('data')
MyEmitter.emit('data')

// setTimeout(() => {
//     MyEmitter.emit('init', 'Timer')
// }, 1000)