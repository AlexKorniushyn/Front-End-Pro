// Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….).
// let result = "";
// for (i = 20; i <= 30; i += 0.5) {
//   result += i + " ";
// }
// console.log(result);

// Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів.
// let oneDollar = 27;
// for (i = 10; i <= 100; i += 10) {
//   console.log(i * oneDollar);
// }

// Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N.
// let N = 3333;
// for (i = 1; i <= 100; i++) {
//   if (i * i <= N) {
//     console.log(i);
//   } else {
//     break;
//   }
// }

// Дане ціле число. З'ясувати, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе).

// function isPrime(number) {
//   if (number <= 1) {
//     return false;
//   }
//   for (let i = 2; i <= number; i++) {
//     if (number % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }

// const num = 17;
// if (isPrime(num)) {
//   console.log(`${num} is a Prime number`);
// } else {
//   console.log(`${num} is not a Prime number`);
// }

// Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь. (Наприклад, числа 9, 81 можна отримати, а 13 - не можна).
// function isPowerOfThree(number) {
//     if (number === 1) {
//     return true;
//   }
//   let base = 3;
//   while (base <= number) {
//     if (base === number) {
//       return true;
//     }
//     base *= 3;
//   }
//   return false;
// }

// const n = 81;
// if (isPowerOfThree(n)) {
//   console.log(`${n} is root of 3`);
// } else {
//   console.log(`${n} is not root of 3`);
// }
