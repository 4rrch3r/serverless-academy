"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.separateWords = exports.separateNumbers = void 0;
//Separates numbers from the user input
function separateNumbers(inputData) {
    let numbers = [];
    inputData.split(" ").forEach((item) => !isNaN(item) && !isNaN(parseFloat(item)) ? numbers.push(item) : null);
    return numbers;
}
exports.separateNumbers = separateNumbers;
//Separates words from the user input
function separateWords(inputData) {
    let words = [];
    inputData.split(" ").forEach((item) => (isNaN(item) ? words.push(item) : null));
    return words;
}
exports.separateWords = separateWords;
