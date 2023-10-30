// [ ['Age', 32], ['Name', 'Serhii'], [....] .... ]

function fill2DArray() {
    const row = prompt('Enter count of rows');
    const columns = prompt('Enter count of columns');
    const twoDArray = [];

    for (let i = 0; i < row; i++) {
        const innerArray = [];

        for (let j = 0; j < columns; j++) {
            const value = prompt(`Enter value of element (row = ${i + 1}, column = ${j + 1})`);
            innerArray.push(value);
        }

        twoDArray.push(innerArray)
    }

    return twoDArray
}

const result = fill2DArray();

console.log(result)