// document.getElementById("myForm"),addEventListener("submit" , function(event) {
//     // Prevent the form from submitting
//     event.preventDefault();

//     // Get the value entered in the name field
//     var name = document.getElementById("name").value;

//     // Check if the name field is empty
//     if (name.trim() === "") {
//         // If empty, show an alert message
//         alert("Please enter your name.");
//     } else {
//         // If not empty, display a greeting message
//         alert("Hello, " + name + "! Your form is submitted successfully.");
//         // You can also submit the form to a server using AJAX here
//         // For simplicity, I'm just showing an alert message
//     }
// })

// const task = (numbers) => {
//     let sum = 0;
//     for(let i = 0; i < numbers.length; i++){
//         if(numbers[i] % 2 === 0){
//             sum += numbers[i]
//         }
//     }
//     return sum;
// }

// const numbers = [1,2,3,4,5,6,7,8,9,10];
// console.log("sum of the even number ", task(numbers))

// --------------------------------------------------------------------------

// Q1 : swap the values of variables a and b in JavaScript without using a third variable?


// //Ans 01: 
// let a = 15;
// let b = 20;

// [a, b] = [b, a];

// console.log("a:", a); // Output: 20
// console.log("b:", b); // Output: 15

// //Ans 02:
// let c = 25;
// let d = 30;

// c = c + d;
// d = c - d;
// c = c - d;

// console.log("c:", c); // Output: 30
// console.log("d:", d); // Output: 25 


//Q2 : find the largest value in the array without using any built-in function in JavaScript?

//Ans:01

// let array = [10, 20, 30, 40, 90, 100, 55, 500, 65, 75];
// let max = Infinity;
//               // 9      // 10
// for (let i = 0; i < array.length; i++) {
//     console.log("i =>>",i)
//     console.log("array[i]",array[i])
//     if (array[i] > max) {
//         max = array[i];
//     }
// }

// console.log("The largest value in the array is:", max);

//Q3 : sort the any number or string value in the array without using any built-in function in JavaScript?

// let numArray = [20, 2, 9, 1, 78, 505, 3, 600, 101, 200, 70,];
// let numArray = ["jawad", "asad", "zaid", "raza", "ali","abid"];
// let tempValue;

// for (let i = 0; i < numArray.length; i++) {
//     for (let j = i; j < numArray.length; j++) { // decending order ke leye yaha pa j ki value ma 0 lag jaega.
//         if (numArray[i] > numArray[j]) {
//             tempValue = numArray[i]
//             numArray[i] = numArray[j]
//             numArray[j] = tempValue
//         }
//     }
// }

// console.log(numArray)







// Q4 : reverse the value in the array without using any built-in function in JavaScript?

// let numbers = [34, 7, 23, 32, 5, 62, 202, 101];
// // let str = ["jawad", "asad", "raza", "ali"]
// // let newArr = [];

// for (let i = numbers.length - 1; i >= 0; i--) {
//     // newArr.push(numbers[i])
//     console.log( numbers[i])
// }
// // console.log(newArr)



// Q5 find second largest element from array  in js without any arrays method?

// // let numbers = [34, 7, 23, 32, 5, 62, 101, 202];
// let numbers = [34, 7, 23, 32, 400, 5, 62, 202, 101, 300];
// let n = numbers.length;

// // let highest = -Infinity;
// // let secondHighest = -Infinity;

// let highest = 0;
// let secondHighest = 0;

// for (let i = 0; i < n; i++) {
//     if (numbers[i] > highest) {
//         secondHighest = highest;
//         highest = numbers[i]
//         console.log("first >>>", secondHighest,highest)
//     }
//     if(numbers[i] > secondHighest && numbers[i] < highest){
//         console.log("second", secondHighest,highest)
//         secondHighest = numbers[i]
//         console.log("second", secondHighest,highest)

//     }
//     // if (secondHighest < numbers[i] && highest > numbers[i]) {
//     //     secondHighest = numbers[i]
//     //     console.log("loop",secondHighest)
//     // }
// }

// console.log(`=====>>>>>`, highest, secondHighest)

// Q6 factorial using recursion ?

// let factNumber = prompt("Enter a number");
// let fact = 1;

// function factorial(n) {
//     if(n > factNumber){
//         return
//     }
//     let temp = fact
//     fact = fact * n;
//     n++
//     factorial(n)
// }

// factorial(1)

// console.log(`The Factorial of ${factNumber} is ${fact}`)

// -----------------------------------------------------------
// let prom = +prompt("enter a number");
// let facct = 1

// function factr(n) { // 3
//     if(n > prom){ // 3 > 5
//         return
//     }
//     let temp = facct
//     facct = facct * n   // 2 = 1 * 3
//     console.log()
//     n++ // 2
//     factr(n)
// }

// factr(1)
// document.write(`The Factorial of ${prom} is ${facct}`)
// -----------------------------------------------------------
// let userFactorialNumber = +prompt("enter your factorial number")

// const factorial = (num) => {
//     if(num === 0){
//         return 1
//     }
//     else{
//         return num * factorial(num - 1)
//     }
// }

// let res = factorial(userFactorialNumber)
// console.log(res , `<<<<< The Factorial of ${userFactorialNumber} is: ${res} `)

// -----------------------------------------------------------

// let num = prompt("enter a number");

// num = Number(num)

// function fact(n) {
//     if (n === 0) {
//         return 1
//     } else {
//         return n * fact(n - 1)
//     }
// }

// document.write(fact(num))


// Q7: is string palindrrome?

// let userValue = prompt("Enter your palindrome word");

// userValue = userValue.toLowerCase();

// let isCheackValue = userValue.split("").reverse().join("");

// if(userValue === ""){
//     console.log("please enter a string value")
// }else if(userValue === isCheackValue){
//     console.log("yes its palindrome")
// } else{
//     console.log("its is not palindrome value")
// }


// console.log(isCheackValue)

// ------------------------------

// let str = prompt("enter a value");

// str = str.toLowerCase();

// let lenght = str.length;

// let msg = "its a palindrome";

// for (let i = 0; i < lenght / 2; i++) {
//     if (str[i] != str[lenght - 1 - i]) {
//         msg = "its not a palindrome"
//     }
// }

// console.log(`${str} : ${msg}`)

// -----------------------------------------

// Q7 : find most repeated element or deleted from array?

// let num = [2,4,9,10,110,10,2,4,2,4,5,110,555];
// let num = [1,2,3,4,4,5,6,5,6,7,9,0,10,100,101,20];
// let uniquw = []
// let forOff = []
// let third = [];

// for(let value of num){
//     if(!forOff.includes(value)){
//         forOff.push(value)
//     }
// }

// for(let i = 0; i < num.length; i++){
//     if(!uniquw.includes(num[i])){
//         uniquw.push(num[i])
//     }
// }

// for(let j = 0; j < num.length; j++){
//     if(!third.includes(num[j])){
//         third.push(num[j])
//     }
// }

// console.log(uniquw, "<<< unique")
// console.log(forOff , "<<<< forOff")
// console.log(third , "<<<< third")

// Q8: find most repeated element  string?

// function getCharString(str) {

//     let map = {};
//     str.split("").forEach(element => {
//         map[element] = map[element] ? map[element] + 1 : 1
//     });
//     let max = 1
//     let char = str[0]
//     for (let k in map) {
//         if (map[k] > max) {
//             max = map[k]
//             char = k
//         }
//     }
//     return char
// }

// let res =  getCharString("Hello World")

// console.log(res)

// ---------------------------------- Palindrome-Checker-Game/blob/master/script.js

// function mostReapetedChar(str) {
//     let frequency = {};

//     for (let i = 0; i < str.length; i++) {
//         console.log(str[i]) // pora javascript likha ara ha...
//         let char = str[i]
//         if (frequency[char]) {
//             frequency[char]++
//         } else {
//             frequency[char] = 1
//         }
//     }

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


// Q9: find most repeated element  array?


// function mostRepeatedFunction(arr) {
//     let frequency = {}

//     for (let i = 0; i < arr.length; i++) {
//         let element = arr[i]
//         console.log(element)
//         if (frequency[element]) {
//             frequency[element]++
//         } else {
//             frequency[element] = 1
//         }
//     }

//     let maxCount = 0;
//     let mostReapeted = null;

//     for(let element in frequency){
//         console.log(element , frequency)
//         if(frequency[element] > maxCount){
//             console.log(element , frequency[element])
//             maxCount = frequency[element];
//             mostReapeted = element
//         }
//         console.log(maxCount , mostReapeted)
//     }
//     return mostReapeted
// }

// // let inputArray = ["jawad","jawad","asad","asad","ali","jawad","asad","asad","jawad"];
// let inputArray = [1,1,3,2,4,3,5,4,5,4,6,7,6,6,6,6,7,4,];

// let result = mostRepeatedFunction(inputArray);

// console.log(`this input is most repeated value is ${result}`)


// ------------------------clusure--------------------------------

// function makeFunc() {
//     const name = "jawad"

//     function innerFunc(){
//         console.log(name)
//     }
//     return innerFunc;
// }

// const myFunc = makeFunc();

// myFunc();

// --------lexical-------------

// function outerFunc() {
//     const name = "jawad";
//     function inner() {
//         console.log("inner1", name)
//     }
//     function innertwo() {
//         console.log("inner2", name)
//     }

//     inner()
//     innertwo()
// }

// outerFunc();

// ----------------- clusure practice ---------------

function clickHandler(color) {
    return function(){
        document.body.style.backgroundColor = `${color}`
    }
}

document.getElementById("orange").addEventListener("click", clickHandler("orange"))
document.getElementById("green").addEventListener("click", clickHandler("green"))