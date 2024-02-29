const fsPromises = require("fs/promises");
const fs = require("fs");
const path = require("path");
const EventEmitter = require("events");

const logger = (event, content) => {
  const dir = path.join(process.env.PWD, "/events.log.txt");
  const date = new Date();

  fs.writeFile(
      dir,
      `Date: ${date.toUTCString()}\nEvent: ${event}\nContent: ${JSON.stringify(
          content
      )}\n`,
      { flag: "a+" },
      (error) => {
        if (error) {
          console.log(error);
        }
      }
  );
};

const seek = (target, dirPath = "/") => {
  const _emitter = new EventEmitter();
  const dir = path.join(process.env.PWD, dirPath);

  const searchRecursively = async (currentDir) => {
    try {
      const files = await fsPromises.readdir(currentDir);

      if (files.includes(target)) {
        _emitter.emit("success", {
          message: `file ${target} is in the directory`,
          path: currentDir,
        });

        const content = await fsPromises.readFile(path.join(currentDir, target), "utf-8");
        _emitter.emit("data", content);
      } else {
        for (const file of files) {
          const fullPath = path.join(currentDir, file);
          const isDirectory = (await fsPromises.stat(fullPath)).isDirectory();

          if (isDirectory) {
            await searchRecursively(fullPath);
          }
        }
      }
    } catch (error) {
      _emitter.emit("error", error);
    }
  };

  fsPromises
      .access(dir)
      .then(() => searchRecursively(dir))
      .catch((error) => {
        _emitter.emit("error", error);
      });

  return _emitter;
};

module.exports = {
  seek,
  logger,
};