alert('Welcome to calculator!');

let startCalculation = true;
const history = [];

calculator: do {
    const operation = prompt(`What action you want to do? Add, Diff, Mult, Div, Sqrt, Sin, Cos${history.length ? ', History' : ''}`, 'Add');

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
                    case 'add': {
                        const notification = `Sum of ${firstNumber} and ${secondNumber} is ${firstNumber + secondNumber}`;
                        history.push(notification);
                        alert(notification);
                        break;
                    }
                    case 'diff': {
                        const notification = `Diff of ${firstNumber} and ${secondNumber} is ${firstNumber - secondNumber}`;
                        history.push(notification);
                        alert(notification);
                        break;
                    }
                    case 'mult': {
                        const notification = `Miff of ${firstNumber} and ${secondNumber} is ${firstNumber * secondNumber}`;
                        history.push(notification);
                        alert(notification);
                        break;
                    }
                    case 'div': {
                        const notification = `Div of ${firstNumber} and ${secondNumber} is ${firstNumber / secondNumber}`;
                        history.push(notification);
                        alert(notification);
                        break
                    }
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
                        if (number >= 0) {
                            const notification = `Root of ${number} is ${Math.sqrt(number)}`;
                            history.push(notification);
                            alert(notification);
                            break;
                        }

                        alert('Number must to be positive');
                        break;
                    }
                    case 'sin': {
                        const notification = `Sin of ${number} is ${Math.sin(number)}`;
                        history.push(notification);
                        alert(notification);
                        break;
                    }
                    case 'cos': {
                        const notification = `Cos of ${number} is ${Math.cos(number)}`;
                        history.push(notification);
                        alert(notification);
                        break;
                    }
                    default: alert('Ups somethings went wrong'); break;
                }

                startCalculation = confirm('Do you want continue working with calculator?');
                if (!startCalculation) {
                    alert('Good by, see you later.');
                }
                break;
            }
            case 'history': {
                if (!history.length) break;
                let historyMessage = 'Your operations:\n\n';
                history.forEach(function (operation, index) {
                    historyMessage += `${index + 1}. ${operation}\n`;
                });
                alert(historyMessage);

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