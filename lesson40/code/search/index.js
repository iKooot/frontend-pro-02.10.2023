const yargs = require("yargs/yargs");
const { seek, logger } = require("./utils/fileSeeker");
const { info, error, warn } = require("./utils/logger");

const argv = yargs(process.argv).argv;

seek(argv.fileName, argv.fileDir)
  .on("success", (payload) => {
    const { message, path } = payload;

    const alertMessage = `${message}\n-------\nPath: ${path}`;

    info(alertMessage);

    if (argv.verbose) {
      logger( 'success', payload)
    }
  })
  .on("data", (payload) => {
    warn(`\n------- Content of file -------\n`);
    warn(payload);

    if (argv.verbose) {
      logger( 'data', payload)
    }
  })
  .on("error", (payload) => {
    error(payload);

    if (argv.verbose) {
      logger( 'error', payload)
    }
  });
