const findFile = (fileName, data) => {
    for (const items of data) {
        if (items.file === fileName) {
            return true;
        }
        if (items.folder) {
            if (findFile(fileName, items.folder)) {
                return true;
            }
        }
    }
    return false;
};

const fileNameToFind = "homework-basic5";
const fileExists = findFile(fileNameToFind, documents);

console.log(fileExists)