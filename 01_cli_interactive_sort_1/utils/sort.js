
import { separateNumbers,separateWords } from "./separateValues.js";
//Sort words by name (from A to Z)
function alphabeticalSort(inputData)
{
  let words = separateWords(inputData);
  words.sort((a,b)=>a.localeCompare(b));
  return words;
}
//Sort digits from the smallest to biggest
function numbersRaisingSort(inputData)
{
  let numbers = separateNumbers(inputData);
  numbers.sort((a, b) => a - b);
  return numbers;
}
//Sort digits from the biggest to smallest
function numbersDecreasingSort(inputData)
{
  let numbers = separateNumbers(inputData);
  numbers.sort((a, b) => b - a);
  return numbers;
}
//Sort words by quantity of letters
function lettersRaisingSort(inputData)
{
  let words = separateWords(inputData);
  words.sort((a, b) => a.length - b.length);
  return words;
}
//Filters to get only unique words
function uniqueWordsSort(inputData)
{
  let words = separateWords(inputData);
  words = Array.from(new Set(words));
  return words;
}
//Filters to get only unique words and numbers
function uniqueWordsAndNumbersSort(inputData)
{
  let words= Array.from(new Set(inputData.split(' ')));
  return words;
}

export {
  alphabeticalSort,
  numbersRaisingSort,
  numbersDecreasingSort,
  lettersRaisingSort,
  uniqueWordsSort,
  uniqueWordsAndNumbersSort
};