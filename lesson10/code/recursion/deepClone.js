function deepClone(data) {
    if (typeof data !== 'object') return data;

    if (Array.isArray(data)) {
        const copyArray = [];
        for (let i = 0; i < data.length; i++) {
            copyArray[i] = deepClone(data[i]);
        }
        return copyArray
    }

    if (typeof data === 'object') {
        const copyObj = {};
        for (const key in data) {
            if (data.hasOwnProperty(key)) {
                copyObj[key] = deepClone(data[key])
            }
        }
        return copyObj
    }
}

const clone = deepClone(user);
const stringify = JSON.stringify(user);
const parse = JSON.parse(stringify);

console.log(parse)
console.log(parse === stringify)

const newObj = {...user}
console.log(newObj)
console.log(newObj === user)