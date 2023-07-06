function createCalculator(base) {
  this.base = base;

  this.add = (value) => {
    if (!isNaN(value)) {
      this.base = this.base + value;
    }
    return NaN;
  };

  this.sub = (value) => {
    if (!isNaN(value)) {
      this.base = this.base - value;
    }
    return NaN;
  };

  this.set = (value) => {
    this.base = value;
  };

  this.reset = () => {
    this.base = base;
  };
  this.get = () => {
    return this.base;
  };
}
const calc = new createCalculator(100);

calc.add(10);
calc.add(10);

console.log(calc.get());

console.log(calc.add("qwe"));

console.log(calc.get());
calc.reset();
console.log(calc.get());
