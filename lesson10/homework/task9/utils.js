function showNotification(action, payload) {
  switch (action) {
    case "greeting":
      alert("Welcome to calculator");
      break;
    case "goodBy":
      alert("Good by, see you later");
      break;
    case "askNumber":
      alert("Enter your number");
      break;
    case "invalidNumber":
      alert("This is bad digit, please enter valid number.");
      break;
    case "invalidOperation":
      alert("I dont' recognize you operation.");
      break;
    case "custom":
      alert(payload);
      break;
    default:
      alert("Ups something vent wrong");
      break;
  }
}

function continueCalculation() {
  const shouldContinue = confirm("Do you want continue work with me?");
  if (!shouldContinue) {
    showNotification("goodBy");
  }
  return shouldContinue;
}

function askNumber() {
  return prompt("Enter your number");
}

function getValidNumber(data) {
  let number;

  do {
    if (data === null) {
      showNotification("goodBy");
      return null;
    }

    if (data === "" || isNaN(parseFloat(data))) {
      showNotification("invalidNumber");
      number = askNumber();
      if (number === null) {
        showNotification("goodBy");
        return null;
      }
      continue;
    }

    number = parseFloat(data);
  } while (!Number.isInteger(number));

  return number;
}

function sum(a, b, history) {
  const sum = a + b;
  const operation = `Sum of ${a} and ${b} is ${sum}`;

  if (history) history.push(operation);

  showNotification("custom", operation);
  return sum;
}

function diff(a, b, history) {
  const diff = a - b;
  const operation = `Diff of ${a} and ${b} is ${diff}`;

  if (history) history.push(operation);

  showNotification("custom", operation);
  return diff;
}

function mult(a, b, history) {
  const mult = a * b;
  const operation = `Mult of ${a} and ${b} is ${mult}`;

  if (history) history.push(operation);

  showNotification("custom", operation);
  return mult;
}

function div(a, b, history) {
  const div = a / b;
  const operation = `Div of ${a} and ${b} is ${div}`;

  if (history) history.push(operation);

  showNotification("custom", operation);
  return div;
}

function sqrt(a, history) {
  const sqrt = Math.sqrt(a);
  const operation = `Root of ${a} is ${sqrt}`;

  if (history) history.push(operation);

  showNotification("custom", operation);
  return sqrt;
}

function sin(a, history) {
  const sin = Math.sin(a);
  const operation = `Sin of ${a} is ${sin}`;

  if (history) history.push(operation);

  showNotification("custom", operation);
  return sin;
}

function cos(a, history) {
  const cos = Math.cos(a);
  const operation = `Cos of ${a} is ${cos}`;

  if (history) history.push(operation);

  showNotification("custom", operation);
  return cos;
}

function transformFirstChar(array, filter) {
  if (filter) return array
      .filter(filter)
      .map((el) => el[0].toUpperCase() + el.substring(1));
  return array.map((el) => el[0].toUpperCase() + el.substring(1));
}
