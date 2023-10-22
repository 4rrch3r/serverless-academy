"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uniqueWordsAndNumbersSort = exports.uniqueWordsSort = exports.lettersRaisingSort = exports.numbersDecreasingSort = exports.numbersRaisingSort = exports.alphabeticalSort = void 0;
const separateValues_1 = require("../utils/separateValues");
//Sort words by name (from A to Z)
function alphabeticalSort(inputData) {
    let words = (0, separateValues_1.separateWords)(inputData);
    words.sort((a, b) => a.localeCompare(b));
    return words;
}
exports.alphabeticalSort = alphabeticalSort;
//Sort digits from the smallest to biggest
function numbersRaisingSort(inputData) {
    let numbers = (0, separateValues_1.separateNumbers)(inputData);
    numbers.sort((a, b) => a - b);
    return numbers;
}
exports.numbersRaisingSort = numbersRaisingSort;
//Sort digits from the biggest to smallest
function numbersDecreasingSort(inputData) {
    let numbers = (0, separateValues_1.separateNumbers)(inputData);
    numbers.sort((a, b) => b - a);
    return numbers;
}
exports.numbersDecreasingSort = numbersDecreasingSort;
//Sort words by quantity of letters
function lettersRaisingSort(inputData) {
    let words = (0, separateValues_1.separateWords)(inputData);
    words.sort((a, b) => a.length - b.length);
    return words;
}
exports.lettersRaisingSort = lettersRaisingSort;
//Filters to get only unique words
function uniqueWordsSort(inputData) {
    let words = (0, separateValues_1.separateWords)(inputData);
    words = Array.from(new Set(words));
    return words;
}
exports.uniqueWordsSort = uniqueWordsSort;
//Filters to get only unique words and numbers
function uniqueWordsAndNumbersSort(inputData) {
    let words = Array.from(new Set(inputData.split(' ')));
    return words;
}
exports.uniqueWordsAndNumbersSort = uniqueWordsAndNumbersSort;
