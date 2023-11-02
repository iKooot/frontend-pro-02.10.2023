let startCalculation = true;
const history = [];
const operations = ['add', 'diff', 'mult', 'div', 'sqrt', 'sin', 'cos', 'history'];

showNotification("greeting");

calculation: do {
    const operation = prompt(
      `What action you want to do?\n\n${transformFirstChar(operations, (el) => {
          if (el === "history") return history.length;
          return true;
      }).join("\n")}`,
      "Add",
    );

    if (operation) {
        const normalizeOperation = operation.toLowerCase();

        switch (normalizeOperation) {
            case "add":
            case "diff":
            case "mult":
            case "div": {
                const firstUserNumber = askNumber();
                const firstNumber = getValidNumber(firstUserNumber);

                if (firstNumber === null) {
                    break calculation
                }

                const secondUserNumber = askNumber();
                const secondNumber = getValidNumber(secondUserNumber);

                if (secondNumber === null) {
                    break calculation
                }

                switch (normalizeOperation) {
                    case "add": {
                        sum(firstNumber, secondNumber, history);
                        break;
                    }
                    case "diff": {
                        diff(firstNumber, secondNumber, history);
                        break;
                    }
                    case "mult": {
                        mult(firstNumber, secondNumber, history);
                        break;
                    }
                    case "div": {
                        if (secondNumber !== 0) {
                            div(firstNumber, secondNumber, history)
                            break;
                        }
                        showNotification('custom', `i can t divide by ${secondNumber}`);
                        break;
                    }
                    default:
                        showNotification("invalidOperation");
                        break;
                }

                startCalculation = continueCalculation()
                break;
            }
            case "sqrt":
            case "sin":
            case "cos": {
                const userNumber = askNumber();
                const number = getValidNumber(userNumber);

                if (number === null) {
                    break calculation
                }

                switch (normalizeOperation) {
                    case "sqrt": {
                        if (number >= 0) {
                            sqrt(number, history);
                            break;
                        }

                        showNotification('custom', `Number mut to be positive`);
                        break;
                    }
                    case "sin": {
                        sin(number, history);
                        break;
                    }
                    case "cos": {
                        cos(number, history);
                        break;
                    }
                    default:
                        showNotification('invalidOperation');
                        break;
                }

                startCalculation = continueCalculation()
                break;
            }
            case "history": {
                if (!history.length) break;
                let historyMessage = "Your operations:\n";
                history.forEach(function (operation, i) {
                    historyMessage += `${i + 1}. ${operation}\n`;
                });
                showNotification('custom', historyMessage);
                startCalculation = continueCalculation()
                break;
            }
            default: {
                showNotification("invalidOperation");
                break;
            }
        }
    } else {
        startCalculation = false;
        showNotification("goodBy");
    }
} while (startCalculation);
