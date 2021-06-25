'use strict'
/**
 * 
 * @param {number} arg1 
 * @param {number} arg2 
 * @param {string} operation может быть +, -,/,*
 * @returns {number}
 */
function MathOperation(arg1, arg2, operation) {
    switch (operation) {
        case '+':
            return sum(arg1, arg2);
        case '-':
            return subtract(arg1, arg2);
        case '/':
            return division(arg1, arg2);
        case '*':
            return multiply(arg1, arg2);
        default:
            console.log('Введено недопустимое значение')
    }
}
function sum(a, b) {
    return a + b
}
function subtract(a, b) {
    return a - b
}
function division(a, b) {
    return a / b
}
function multiply(a, b) {
    return a * b
}
console.log(MathOperation(5, 7, '+'));
console.log(MathOperation(5, 7, '-'));
console.log(MathOperation(5, 7, '/'));
console.log(MathOperation(5, 7, '*'));
console.log(MathOperation(5, 7, 'text'));