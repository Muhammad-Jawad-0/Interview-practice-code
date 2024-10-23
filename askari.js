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

// let numbers = [1000000, 34, 7, 23, 32, 5, 62, 202, 101, 90];
// let reverseArr = [];

// for (let i = numbers.length - 1; i >= 0; i--) {
//   reverseArr.push(numbers[i]);
// }
// console.log(reverseArr);

// Q5 find second largest element from array  in js without any arrays method?

// let numbers = [34, 7, 23, 32, 5, 62, 101, 202,500];
// let highest = 0;
// let secondHighest = 0;

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] > highest) {
//     secondHighest = highest;
//     highest = numbers[i];
//   }

//   if (numbers[i] > secondHighest && numbers[i] < highest) {
//     secondHighest = numbers[i];
//   }
// }

// console.log("highest", highest);
// console.log("secondHighest",secondHighest);

// Q6 factorial using recursion ?

// function recur(num) {
//   if (num === 0) {
//     return 1;
//   } else {
//     return num * recur(num - 1);
//   }
// }

// let num = 5;
// let res = recur(num);
// console.log(res);

// Q7: is string palindrrome?

// let userstr = prompt("enter a string");

// userstr = userstr.toLowerCase();

// let reverseArr = userstr.split("").reverse().join("")

// if(userstr === ""){
//     alert("please enter a string")
// } else if(reverseArr === userstr){
//     alert("yes its palindrome")
// } else{
//     alert("its is not palindrome")
// }

// Q8 : find most repeated element or deleted from array?

// let num = [1, 2, 3, 4, 4, 5, 6, 5, 6, 7, 9, 0, 10, 100, 101, 20];
// let unique = [];

// for (let i = 0; i < num.length; i++) {
//     if(!unique.includes(num[i])){
//         unique.push(num[i])
//     }
// }

// console.log(num)
// console.log(unique)

//Q11 find the missing element or number in array without using any building function in javascript

// let array = [1, 2, 3, 5, 6, 4, 8];
//                 //8                    // 9
// let total = ((array.length + 1) * (array.length + 2)) / 2;

// for (let i = 0; i < array.length; i++) {
//     total = total - array[i]
// }



















// ----------------------------------------------
// function findPairs(arr) {
//     function includesPair(pairs, pair) {
//         return pairs.some(([a, b]) => (a === pair[0] && b === pair[1]) || (a === pair[1] && b === pair[0]));
//     }

//     // 1. Sab Pairs (Duplicates aur Reversed Pairs ke Saath)
//     let allPairs = [];
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] + arr[j] === 10) {
//                 allPairs.push([arr[i], arr[j]]);
//             }
//         }
//     }
//     console.log("Sab Pairs:", allPairs);

//     // 2. Unique Pairs (Duplicates remove magar Reversed Pairs ke saath)
//     let uniquePairs = [];
//     allPairs.forEach(pair => {
//         if (!uniquePairs.some(p => p[0] === pair[0] && p[1] === pair[1])) {
//             uniquePairs.push(pair);
//         }
//     });
//     console.log("Unique Pairs:", uniquePairs);

//     // 3. Same Combo Pair Ek Martaba (Reversed Pairs remove)
//     let uniqueComboPairs = [];
//     allPairs.forEach(pair => {
//         if (!includesPair(uniqueComboPairs, pair)) {
//             uniqueComboPairs.push(pair);
//         }
//     });
//     console.log("Unique Combo Pairs:", uniqueComboPairs);
// }

// // Test
// let arr = [1, 1, 2, 4, 4, 5, 5, 5, 6, 7, 9];
// findPairs(arr);

