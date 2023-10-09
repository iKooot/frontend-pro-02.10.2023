const firstNum = Number(prompt('Enter first number', 0));
const secondNum = Number(prompt('Enter second number', 0));

const sum = firstNum + secondNum;
const diff = firstNum - secondNum;
const milt = firstNum * secondNum;
const div = firstNum / secondNum;

const result = `Calculation is finished!

Sum: ${firstNum} + ${secondNum} = ${sum}
Diff: ${firstNum} - ${secondNum} = ${diff}
Mult: ${firstNum} * ${secondNum} = ${milt}
Div: ${firstNum} / ${secondNum} = ${div}`;

console.log(result);