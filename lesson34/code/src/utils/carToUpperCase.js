export function carToUpperCase(word, pos = 0) {
    if (typeof word !== 'string' || typeof pos !== 'number' || pos < 0 || pos >= word.length) {
        console.error('Invalid input. Please provide a valid word (string) and position (number).');
        return word;
    }

    return word.slice(0, pos) + word.charAt(pos).toUpperCase() + word.slice(pos + 1);
}