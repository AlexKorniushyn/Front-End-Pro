function createCalculator(base) {
  let newCalc = base;

  return {
    add: (value) => {
      if (!isNaN(value)) {
        newCalc += value;
      }
    },

    sub: (value) => {
      if (!isNaN(value)) {
        newCalc -= value;
      }
    },

    set: (value) => {
      if (!isNaN(value)) {
        newCalc = value;
      }
    },

    reset: () => {
      newCalc = base;
    },

    get: () => {
      return newCalc;
    },
  };
}
const calc = createCalculator(100);

calc.add(10);
calc.add(10);
calc.add(10);
calc.add("qwqeqe");
calc.sub(10);
console.log(calc.get());

calc.set("qwqe");
console.log(calc.get());
calc.set(500);
console.log(calc.get());
calc.reset();
console.log(calc.get());
