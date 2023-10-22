
import { separateNumbers,separateWords } from "../utils/separateValues";
//Sort words by name (from A to Z)
function alphabeticalSort(inputData:string):string[]
{
  let words:string[] = separateWords(inputData);
  words.sort((a:string,b:string)=>a.localeCompare(b));
  return words;
}
//Sort digits from the smallest to biggest
function numbersRaisingSort(inputData:string):string[]
{
  let numbers:string[] = separateNumbers(inputData);
  numbers.sort((a:string|any, b:string|any) => a - b);
  return numbers;
}
//Sort digits from the biggest to smallest
function numbersDecreasingSort(inputData:string):string[]
{
  let numbers:string[] = separateNumbers(inputData);
  numbers.sort((a:string|any, b:string|any) => b - a);
  return numbers;
}
//Sort words by quantity of letters
function lettersRaisingSort(inputData:string):string[]
{
  let words:string[] = separateWords(inputData);
  words.sort((a:string, b:string) => a.length - b.length);
  return words;
}
//Filters to get only unique words
function uniqueWordsSort(inputData:string):string[]
{
  let words:string[] = separateWords(inputData);
  words = Array.from(new Set(words));
  return words;
}
//Filters to get only unique words and numbers
function uniqueWordsAndNumbersSort(inputData:string):string[]
{
  let words:string[] = Array.from(new Set(inputData.split(' ')));
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