//Exercise 4: Basic Arithmetic Calculator
//Declare functions for basic arithmetic operations
//Use of arithmetic operators: +, -, *, /
//Variables let/const for storing numbers and results
//String interpolation for displaying results

//Define two numbers for the calculator
const number1 = [];
const number2 = [];

//Function to perform addition
function add(a, b){
    return a + b;
}

//Function to perform subtraction
function subtract(a, b){
    return a - b;
}

//Function to perform multiplication
function multiply(a, b){
    return a * b;
}

//Function to perform division. Includes validation to prevent division by zero.
function divide(a, b){
    if (b === 0) {
        return "Error: Division by zero is undefined.";
    }
    return a / b;
}

//Call each function with the defined numbers and display results using string interpolation
console.log(`Addition: ${number1} + ${number2} = ${add(number1, number2)}`);
console.log(`Subtraction: ${number1} - ${number2} = ${subtract(number1, number2)}`);
console.log(`Multiplication: ${number1} * ${number2} = ${multiply(number1, number2)}`);
console.log(`Division: ${number1} / ${number2} = ${divide(number1, number2)}`);

//arrow functions for the same operations
const addArrow = (a, b) => a + b;
const subtractArrow = (a, b) => a - b;
const multiplyArrow = (a, b) => a * b;
const divideArrow = (a, b) => b !== 0 ? a/b : "Error: Division by zero is undefined.";

//Call arrow functions and display results
console.log(`Addition (Arrow): ${number1} + ${number2} = ${addArrow(number1, number2)}`);
console.log(`Subtraction (Arrow): ${number1} - ${number2} = ${subtractArrow(number1, number2)}`);
console.log(`Multiplication (Arrow): ${number1} * ${number2} = ${multiplyArrow(number1, number2)}`);
console.log(`Division (Arrow): ${number1} / ${number2} = ${divideArrow(number1, number2)}`);