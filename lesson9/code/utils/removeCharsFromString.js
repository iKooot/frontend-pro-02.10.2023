function removeCharsFromString(string, chars) {
    let result = '';

    for (const char of string) {
        if (!chars.includes(char)) result += char;
    }

    return result
}

const userString = prompt('Enter some string');
const userChars = prompt('Enter some chars without spaces, like this: q,e,t').split(',');
console.log(removeCharsFromString(userString, userChars));