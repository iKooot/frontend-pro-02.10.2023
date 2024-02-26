const log = console.log;

global.console.log = (...args) => {
    log('--->', ...args, '<---')
}