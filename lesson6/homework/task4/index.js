alert('Welcome to calculator!');

const operation = prompt('What action you want to do? Add, Diff, Mult, Div, Sqrt, Sin, Cos', 'Add');

if (operation) {
    const normalizeOperation = operation.toLowerCase();

    switch (normalizeOperation) {
        case 'add':
        case 'diff':
        case 'mult':
        case 'div': {
            const firstNumber = parseFloat(prompt('Enter first number', 0));

            if (!firstNumber && firstNumber !== 0) {
                alert('This is bad digit, good by');
                break;
            }

            const secondNumber = parseFloat(prompt('Enter second number', 0));

            if (!firstNumber && firstNumber !== 0) {
                alert('This is bad digit, good by');
                break;
            }

            switch (normalizeOperation) {
                case 'add': alert(`Sum of ${firstNumber} and ${secondNumber} is ${firstNumber + secondNumber}`); break;
                case 'diff': alert(`Diff of ${firstNumber} and ${secondNumber} is ${firstNumber - secondNumber}`); break;
                case 'mult': alert(`Miff of ${firstNumber} and ${secondNumber} is ${firstNumber * secondNumber}`); break;
                case 'div': alert(`Div of ${firstNumber} and ${secondNumber} is ${firstNumber / secondNumber}`); break;
                default: alert('Ups somethings went wrong'); break;
            }

            alert('Good by, see you later.');
            break;
        }
        case 'sqrt':
        case 'sin':
        case 'cos': {
            const number = parseFloat(prompt('Enter number', 0));

            if (!number && number !== 0) {
                alert('This is bad digit, good by');
                break;
            }

            switch (normalizeOperation) {
                case 'sqrt': {
                    ( number >= 0 ) ? alert(`Root of ${number} is ${Math.sqrt(number)}`) : alert('Number must to be positive');
                    break;
                }
                case 'sin': alert(`Sin of ${number} is ${Math.sin(number)}`); break;
                case 'cos': alert(`Cos of ${number} is ${Math.cos(number)}`); break;
                default: alert('Ups somethings went wrong'); break;
            }

            alert('Good by, see you later.')
            break;
        }
        default: {
            alert('I don\'t recognize your operation. Please choose valid of. Good by!');
            break;
        }
    }
} else {
    alert('Good by, see you later.')
}