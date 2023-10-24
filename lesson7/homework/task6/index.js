alert('Welcome to calculator!');

let startCalculation = true;

calculator: do {
    const operation = prompt('What action you want to do? Add, Diff, Mult, Div, Sqrt, Sin, Cos', 'Add');

    if (operation) {
        const normalizeOperation = operation.toLowerCase();

        switch (normalizeOperation) {
            case 'add':
            case 'diff':
            case 'mult':
            case 'div': {
                let firstNumber;
                let secondNumber;

                do {
                    const userChose = prompt('Enter first number', 0);
                    if (userChose === null) {
                        startCalculation = false;
                        alert('Good by, see you later.');
                        break calculator;
                    }

                    if (userChose === '' || isNaN(parseFloat(userChose))) {
                        alert('This is bad digit, please enter valid number');
                        continue;
                    }

                    firstNumber = parseFloat(userChose);
                } while (!Number.isInteger(firstNumber));

                do {
                    const userChose = prompt('Enter second number', 0);
                    if (userChose === null) {
                        startCalculation = false;
                        alert('Good by, see you later.');
                        break calculator;
                    }

                    if (userChose === '' || isNaN(parseFloat(userChose))) {
                        alert('This is bad digit, please enter valid number');
                        continue;
                    }

                    secondNumber = parseFloat(userChose);
                } while (!Number.isInteger(secondNumber));

                switch (normalizeOperation) {
                    case 'add': alert(`Sum of ${firstNumber} and ${secondNumber} is ${firstNumber + secondNumber}`); break;
                    case 'diff': alert(`Diff of ${firstNumber} and ${secondNumber} is ${firstNumber - secondNumber}`); break;
                    case 'mult': alert(`Miff of ${firstNumber} and ${secondNumber} is ${firstNumber * secondNumber}`); break;
                    case 'div': alert(`Div of ${firstNumber} and ${secondNumber} is ${firstNumber / secondNumber}`); break;
                    default: alert('Ups somethings went wrong'); break;
                }

                startCalculation = confirm('Do you want continue working with calculator?');
                if (!startCalculation) {
                    alert('Good by, see you later.');
                }
                break;
            }
            case 'sqrt':
            case 'sin':
            case 'cos': {
                let number;

                do {
                    const userChose = prompt('Enter number', 0);
                    if (userChose === null) {
                        startCalculation = false;
                        alert('Good by, see you later.');
                        break calculator;
                    }

                    if (userChose === '' || isNaN(parseFloat(userChose))) {
                        alert('This is bad digit, please enter valid number');
                        continue;
                    }

                    number = parseFloat(userChose);
                } while (!Number.isInteger(number));

                switch (normalizeOperation) {
                    case 'sqrt': {
                        ( number >= 0 ) ? alert(`Root of ${number} is ${Math.sqrt(number)}`) : alert('Number must to be positive');
                        break;
                    }
                    case 'sin': alert(`Sin of ${number} is ${Math.sin(number)}`); break;
                    case 'cos': alert(`Cos of ${number} is ${Math.cos(number)}`); break;
                    default: alert('Ups somethings went wrong'); break;
                }

                startCalculation = confirm('Do you want continue working with calculator?');
                if (!startCalculation) {
                    alert('Good by, see you later.');
                }
                break;
            }
            default: {
                alert('I don\'t recognize your operation. Please choose valid operation.');
                break;
            }
        }
    } else {
        startCalculation = false
        alert('Good by, see you later.')
    }
} while (startCalculation)