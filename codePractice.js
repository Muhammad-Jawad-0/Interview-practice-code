// Q1 : swap the values of variables a and b in JavaScript without using a third variable?

// let a = 10;
// let b = 20;

// [a, b] = [b, a]


// 2nd method
//30
// a = a + b
//10
// b = a - b
//20
// a = a - b

// console.log("a", a);
// console.log("b", b);

//Q2 : find the largest value in the array without using any built-in function in JavaScript?

// let array = [10, 20, 30, 40, 90, 100, 55, 500, 65, 75];
// let largest = 0;
// for (let i = 0; i < array.length; i++) {
//     if (array[i] > largest) {
//         largest = array[i]
//     }
// }

// console.log("The Largest Value in the array :" + largest)

//Q3 : sort the any number or string value in the array without using any built-in function in JavaScript?

// let numArray = [20, 2, 9, 1, 78, 505, 3, 600, 101, 200, 70,];
// let temp;

// for (let i = 0; i < numArray.length; i++) {
//     for (let j = i; j < numArray.length; j++) {
//         if(numArray[i] > numArray[j]){
//             temp = numArray[i]
//             numArray[i] = numArray[j];
//             numArray[j] = temp
//         }
//     }
// }

// console.log(numArray);

// Q4 : reverse the value in the array without using any built-in function in JavaScript?

// let numbers = [34, 7, 23, 32, 5, 62, 202, 101];

// for (let i = numbers.length - 1; i >= 0; i--){
//     console.log(numbers[i])
// }

// Q5 find second largest element from array  in js without any arrays method?

// let numbers = [34, 7, 23, 32, 400, 5, 62, 202, 101, 300];

// let secondLargest = 0;
// let largest = 0;


// for (let i = 0; i < numbers.length; i++) {
//     if(numbers[i] > largest){
//         secondLargest = largest
//         largest = numbers[i]
//     }

//     if(numbers[i] > secondLargest && numbers[i] < largest){
//         secondLargest = numbers[i]
//     }
// }

// console.log(secondLargest)
// console.log(largest)

// Q6 factorial using recursion ?

// let userInput = +prompt("enter your input")

// function factorial(userInput) {
//     if (userInput === 0) {
//         return 1
//     }
//     else {
//         return userInput * factorial(userInput - 1)
//     }
// }

// let res = factorial(userInput)
// console.log(res)

// Q7: is string palindrrome?

// let userString = prompt("enter a value of palindrome");

// userString = userString.toLowerCase();

// let reverseString = userString.split("").reverse().join("");

// if (userString === "") {
//     console.log("please enter a string")
// } else if (reverseString === userString) {
//     console.log("yes it's palindrome word")
// } else {
//     console.log("no it's not palindrome word")
// }

// Q8 : find most repeated element or deleted from array?

// let num = [2,4,9,10,110,10,2,4,2,4,5,110,890 ,555,556];

// let uniqueArr = [];

// for(let i = 0; i < num.length; i++){
//     if(!uniqueArr.includes(num[i])){
//         uniqueArr.push(num[i])
//     }
// }
// console.log(uniqueArr)


// Q9: find most repeated element  string?

// function getMostRepeatedValueInString(str) {
//     let frequency = {};

//     for (let i = 0; i < str.length; i++) {
//             console.log(str[i]) // pora javascript likha ara ha...
//             let charactar = str[i]
//             if (frequency[charactar]) {
//                 frequency[charactar]++
//             } else {
//                 frequency[charactar] = 1
//             }
//         }

//         let maxCount = 0;
//         let mostReapeted = ""

//         for(let charactar in frequency){
//             if(frequency[charactar] > maxCount){
//                 maxCount = frequency[charactar];
//                 mostReapeted = charactar;
//             }
//         }
//         return mostReapeted;
// }

// let inputString = "javascript"
// let result = getMostRepeatedValueInString(inputString);
// console.log(result, "<<<< result")



// function mostReapetedChar(str) {
//     let frequency = {};

// for (let i = 0; i < str.length; i++) {
//     console.log(str[i]) // pora javascript likha ara ha...
//     let char = str[i]
//     if (frequency[char]) {
//         frequency[char]++
//     } else {
//         frequency[char] = 1
//     }
// }

//     let maxCount = 0;
//     let mostReapeted = ""

//     for(let char in frequency){
//         if(frequency[char] > maxCount){
//             maxCount = frequency[char];
//             mostReapeted = char;
//         }
//     }
//     return mostReapeted;

// }

// let inputString = "javascript"
// let result = mostReapetedChar(inputString);
// console.log(result, "<<<< result")





//Q11 find the missing element or number in array without using any building function in javascript

// let array = [1,2,3,5,6];
// let array = [10,1,2,4,6,8,7,9,5];

// let total = ((array.length + 1) * (array.length +2)) / 2

// for(let i = 0; i < array.length; i++){
//     total = total - array[i];
// }

// console.log(total)

// Q12 : first letter capital in string without using any building function?

// let str = "jawad asad raza";
// let word = str.split(" ")
// let newArr = []

// for (let i = 0; i < word.length; i++) {
//     let result = word[i][0].toUpperCase() + word[i].slice(1)
//     newArr.push(result)
// }

// console.log(newArr.join(" "))

// ======================================

// let str = "jawad iqra muskan";
// console.log(str)
// let word = str.split(" ")
// let arr = []

// for (let i = 0; i < word.length; i++) {
//     let result = word[i][0].toUpperCase() + word[i].slice(1)
//     arr.push(result)
// }
// let result = arr.join(" ")

// console.log(result)
// ------------------------------------------------------------

// let str = "my name is muhammad jawad";

// let words = str.split(" ")
// let arr = [];

// for (let i = 0; i < words.length; i++) {
//     let result = words[i][0].toUpperCase() + words[i].slice(1)
//     arr.push(result)
// }
// let finalResult = arr.join(" ")
// console.log(finalResult) // [output]: My Name Is Muhammad Jawad


// ----------------------------------------------------------------

// Q13: added a word in string without using any building function?


// let str = "hello, my name is Muhammad Jawad";

// for (let i = 0; i < str.length; i++) {
//     console.log(str.slice(i, i + 8))
//     if (str.slice(i, i + 8) == "Muhammad") {
//         str = str.slice(0, i) + "SMIT Studend " + str.slice(i);
//         break;
//     }
// }
// let finalResult = str

// console.log(finalResult) //  output: hello, my name is SMIT Studend Muhammad Jawad













































































// ========================================= QUIZ Practice

// Q1

// if (true) {
//     var a = 1;
//     let b = 2;
// }
// console.log(a); // Output? // 1
// console.log(b); // Output? // not define

// Q2

// const add = (a, b) => a + b;
// console.log(add(2, 3)); // Output? // 5

// Q3

// let person = { name1: "jawad", age: 25 };
// let { name1, age } = person;
// console.log(name1);  // Output? // jawad
// console.log(age); // Output? // 25


//  Q4

// let name = "John";
// let greeting = `Hello, ${name}!`;
// console.log(greeting); // Output? // Hello John

// Q5

// 1. Understanding Closures
// Question:

// function createCounter() {
//     let count = 0;
//     return function() {
//         count += 1;
//         // console.log(++count); // output 2 4 6
//         console.log(count++); // 1 3 5
//     }
// }

// const counter = createCounter();
// counter(); // Output?
// counter(); // Output?
// counter(); // Output?

// Q6

// const person = {
//     name: "Charlie",
//     age: 30
// };

// const { name, age, gender = "male" } = person;
// console.log(name); // Output? Charlie
// console.log(age); // Output? 30
// console.log(gender); // Output? male


// Q7

// function applyOperation(arr, operation) {
//     return arr.map(operation);
// }

// let numbers = [1, 2, 3];
// let squares = applyOperation(numbers, function(num) {
//     return num * num;
// });
// console.log(squares); // Output?

// //Ans

// [1, 4, 9]

// function calculateDistance() {
//     let initialDistance = 10; // Distance on day 1
//     let decrement = 3;        // Distance reduced each day
//     let totalDistance = 0;    // Total distance covered
//     let day = 0;              // Days count

//     while (initialDistance > 0) {
//         totalDistance += initialDistance; // Add the distance of the current day to total distance
//         initialDistance -= decrement;    // Reduce the distance for the next day
//         day++;                           // Increment the day count
//     }

//     console.log(`Total days: ${day}`);
//     console.log(`Total distance covered: ${totalDistance} km`);
// }

// calculateDistance();


// let x = 5;
// let y = x++;
// console.log( "x",x, "y", y);


// let arr = [1, 2, 3];
// arr.length = 0;
// console.log(arr);

// --------------------nisum test question

// let arr = [2, 3, 4, 5, 7, 8, 10];
// let newArr = []

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 2) {
//         newArr.push(arr[i])
//     }
//     if (arr[i] === 3) {
//         newArr.push(arr[i])
//     }
//     if (arr[i] === 5) {
//         newArr.push(arr[i])
//     }
//     if (arr[i] === 7) {
//         newArr.push(arr[i])
//     }
// }

// console.log(newArr)


// -----------------------------------------
