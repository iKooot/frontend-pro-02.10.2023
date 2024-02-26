const { green, red, yellow } = require('chalk')
const info = (...args) => {
    // debugger;
    console.log(green(...args))
}

const warn = (...args) => {
    console.log(yellow(...args))
}

const error = (...args) => {
    console.log(red(...args))
}


module.exports = {
    info
}