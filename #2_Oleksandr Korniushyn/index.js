const operator = prompt("Enter your operator +, -, *, /");

const numberFirst = Number(prompt("Enter your first number"));

const numberSecond = Number(prompt("Enter your second number"));

let result;

if (operator === "+") {
  result = numberFirst + numberSecond;
} else if (operator === "-") {
  result = numberFirst - numberSecond;
} else if (operator === "*") {
  result = numberFirst * numberSecond;
} else if (operator === "/") {
  result = numberFirst / numberSecond;
}

alert(`Your result: ${numberFirst} ${operator} ${numberSecond} = ${result}`);
