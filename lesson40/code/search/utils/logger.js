const chalk = require("chalk");

const log = console.log;

const info = (...args) => {
  log(chalk.green(...args));
};

const warn = (...args) => {
  log(chalk.yellow(...args));
};

const error = (...args) => {
  log(chalk.red(...args));
};

module.exports = {
  info,
  warn,
  error,
};
