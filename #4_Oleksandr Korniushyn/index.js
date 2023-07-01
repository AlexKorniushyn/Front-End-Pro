const firstTask = "First Task-";
document.write(firstTask);
for (i = 10; i <= 20; i += 1) {
  let res = i;
  console.log(res);
}

const secondTask = "Second Task-";
document.write(secondTask);
for (i = 10; i <= 20; i++) {
  document.write(i * i + ";");
}

const thirdTask = "Third Task-";
document.write(thirdTask);

for (i = 1; i <= 10; i += 1) {
  let x = 7;
  document.write(`${i} * ${x} = ${i * x};`);
}

const fourthTask = "Fourth Task-";
document.write(fourthTask);
let sum = 1;
for (i = 1; i <= 15; i += 1) {
  sum += i;
  document.write(sum + ";");
}

const fifthTask = "fifth Task-";
document.write(fifthTask);
let mult = 15;
for (i = 15; i <= 35; i += 1) {
  mult *= i;
  document.write(mult + ";");
}

const sixthTask = "Sixth Task-";
document.write(sixthTask);
let total = 1;
let quant = 500;
for (i = 1; i <= 500; i += 1) {
  total += i;
  average = total / quant;
}
document.write(average + ";");

const seventhTask = "Seventh Task-";
document.write(seventhTask);
let number = 30;
for (i = 30; i <= 80; i += 2) {
  number += i;
}
document.write(number + ";");

const eighthTask = "Eighth Task-";
document.write(eighthTask);
for (i = 100; i <= 200; i += 1) {
  if (i % 3 == 0) {
    document.write(i + ";");
  }
}
