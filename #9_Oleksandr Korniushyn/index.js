function Calculator(base) {
  this.base = 0;

  function isNumber(num) {
    return !isNaN(num) && typeof num === "number";
  }

  if (isNumber(base)) {
    this.base = base;
  }

  this.add = function (value) {
    if (isNumber(value)) {
      this.base += value;
    }
  };

  this.sub = function (value) {
    if (isNumber(value)) {
      this.base -= value;
    }
  };

  this.set = function (value) {
    if (isNumber(value)) {
      this.base = value;
    }
  };

  this.reset = function () {
    if (isNumber()) {
      this.base = this.base;
    }
  };

  this.get = () => this.base;
}
const calc = new Calculator(30);

calc.add("qwqwq");
console.log(calc.get());
calc.reset();
console.log(calc.get());
calc.add(10);
console.log(calc.get());
