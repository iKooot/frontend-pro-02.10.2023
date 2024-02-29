const {
  readdir: readdirCb,
  readFile: readFileCb,
  writeFile: writeFileCb,
    existsSync,
    createReadStream,
    createWriteStream
} = require("node:fs");
const {
  readdir: readdirPromise,
  readFile: readFilePromise,
  writeFile: writeFilePromise,
} = require("node:fs/promises");
const { join } = require("path");
const yargs = require("yargs/yargs");
const argv = yargs(process.argv).argv;

// const folder = join(__dirname);
// const file = join(__dirname, "/app.js");

// readdirCb(folder, (err, files) => {
//   if (err) {
//     // ....
//     console.error(err);
//     process.exit(1);
//   }
//   console.log(files);
// });
//
// readdirPromise(folder)
//   .then((files) => {
//     console.log(files);
//   })
//   .catch((err) => {
//     console.error(err);
//     process.exit(1);
//   });

// readFileCb(file, { encoding: "utf-8" }, (err, data) => {
//   if (err) {
//     // ....
//     console.error(err);
//     process.exit(1);
//   }
//   console.log(typeof data);
// });

// readFilePromise(file, { encoding: "utf-8" })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.error(err);
//     process.exit(1);
//   });

// const file = join(__dirname, argv.file);
// const data = JSON.stringify({ user: "iKot" });
//
// writeFileCb(file, data, { encoding: "utf-8", flag: "a+" }, (err) => {
//   if (err) process.exit(1);
//   console.log("Success");
// });
//
// writeFilePromise(file, data, { encoding: "utf-8", flag: "a+" })
//   .then(() => {
//     console.log("Success");
//   })
//   .catch((err) => {
//     console.log(err);
//     process.exit(1);
//   });

/****************************************
 * example
 ****************************************/

// const filePath = join(__dirname, argv.file);
// async function readAndUpdateFile(data, path) {
//     // check data
//     if (existsSync(path)) {
//         try {
//             const existingData = await readFilePromise(filePath, 'utf8');
//             const jsonData = JSON.parse(existingData);
//             // create new data object
//             Object.assign(jsonData, data);
//             // write new data to file
//             await writeFilePromise(filePath, JSON.stringify(jsonData, null, 2), 'utf8');
//             console.log('Data updated successfully:', jsonData);
//         } catch (error) {
//             console.error('Error reading/updating file:', error);
//             process.exit(1)
//         }
//     } else {
//         try {
//             await writeFilePromise(filePath, JSON.stringify(data), 'utf8');
//             console.log('File created with new data');
//         } catch (error) {
//             console.error('Error reading/updating file:', error);
//             process.exit(1)
//         }
//     }
// }
//
// const newData = { user: 'Serhii' };
// readAndUpdateFile(newData);

/****************************************
 * streams
 ****************************************/
// const filePath = join(__dirname, argv.file)

// const read$ = createReadStream(filePath, {
//     encoding: 'utf-8',
//     highWaterMark: 1
// })

// read$.on('readable', () => {
//     console.log('readable', read$.read())
// })

// read$.on('data', (chunk) => {
//     console.log(chunk)
// })
//
// read$.on('end', () => {
//     console.log('ended')
// })
//
// read$.on('close', () => {
//     console.log('close')
// })

// const write$ = createWriteStream('./example.text', { encoding: 'utf-8' })
//
// write$.write('start =>')
// // write$.destroy()
// write$.end('end')
//
// write$.on('finish', () => {
//   console.log('finished')
// })
//
// write$.on('close', () => {
//   console.log('close')
// })

const filePath = join(__dirname, '/data.json')

const read$ = createReadStream(filePath, {
    encoding: 'utf-8',
    highWaterMark: 1
})
const write$ = createWriteStream('./example.json', { encoding: 'utf-8', highWaterMark: 1 })

read$.on('data', (chunk) => {
  write$.write(`${chunk} => `);
})

read$.on('end', () => {
  write$.end()
})

// read$.pipe(write$)





