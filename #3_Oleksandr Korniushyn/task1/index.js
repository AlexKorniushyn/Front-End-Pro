const operator = getEnterOperator("+, -, *, /");

const numberFirst = getEnterNumber("first");

const numberSecond = getEnterNumber("second");

if (
  operator !== "+" &&
  operator !== "-" &&
  operator !== "*" &&
  operator !== "/"
) {
  alert("Wrong operator!");
} else if (isNaN(numberFirst) || isNaN(numberSecond)) {
  alert("Wrong number!");
} else {
  const result = calc(operator, numberFirst, numberSecond);

  showResult(operator, numberFirst, numberSecond, result);
}

function getEnterOperator(operator) {
  return prompt(`Enter your operator ${operator}`);
}

function getEnterNumber(numberName) {
  const num = prompt(`Enter your ${numberName} number`);

  return num === null ? Number.NaN : Number(num);
}

function calc(operator, x, y) {
  let result;

  if (operator === "+") {
    result = x + y;
  } else if (operator === "-") {
    result = x - y;
  } else if (operator === "*") {
    result = x * y;
  } else if (operator === "/") {
    result = x / y;
  }
  return result;
}

function showResult(operator, x, y, result) {
  alert(`Your result: ${x} ${operator} ${y} = ${result}`);
}
