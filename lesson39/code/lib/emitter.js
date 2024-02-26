const EventEmitter = require('events');
const MyEmitter = new EventEmitter();

// MyEmitter.addListener('init', payload => {
//     console.log('Init event', payload)
// })

MyEmitter.on('init', payload => {
    console.log('Init on event', payload)
    payload.surname = 'Savchuk'
    payload = 'example'
    console.log(payload)
})

MyEmitter.on('init', payload => {
    console.log('Init on event2', payload)
})

const cb = () => {
    console.log('data')
    MyEmitter.removeListener('data', cb)
}

MyEmitter.on('data', cb)

// MyEmitter.once('data', () => {
//     console.log('data')
// })

module.exports = MyEmitter;