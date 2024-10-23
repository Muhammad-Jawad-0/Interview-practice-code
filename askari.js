// Q1 : swap the values of variables a and b in JavaScript without using a third variable?

// //Ans 01:
// let a = 15;
// let b = 20;

// [a, b] = [b, a];

// a = a + b; // 35
// b = a - b; // 35 - 20 = 15
// a = a - b; // 35 - 15 = 20

// console.log("a", a);
// console.log("b", b);

//Q2 : find the largest value in the array without using any built-in function in JavaScript?

//Ans:02

// let array = [10, 20, 30, 40, 90, 100, 55, 500, 65, 75];
// let maxValue = 0;

// for (let i = 0; i < array.length; i++) {
//   if (array[i] > maxValue) {
//     maxValue = array[i];
//   }
// }

// console.log(maxValue);

//Q3 : sort the any number or string value in the array without using any built-in function in JavaScript?

// let numArray = [20, 2, 9, 1, 78, 505, 4, 3, 8, 3, 600, 101, 200, 70];
// let tempValue;

// for (let i = 0; i < numArray.length; i++) {
//   for (let j = i; j < numArray.length; j++) {
//     if (numArray[i] > numArray[j]) {
//       tempValue = numArray[i];
//       numArray[i] = numArray[j];
//       numArray[j] = tempValue;
//     }
//   }
// }

// console.log(numArray);

// Q4 : reverse the value in the array without using any built-in function in JavaScript?

// let numbers = [34, 7, 23, 32, 5, 62, 202, 101];