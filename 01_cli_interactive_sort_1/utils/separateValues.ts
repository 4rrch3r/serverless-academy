//Separates numbers from the user input
function separateNumbers(inputData:string):string[]
{
  let numbers:string[] = [];
  inputData.split(" ").forEach((item:string|any) =>!isNaN(item) && !isNaN(parseFloat(item))? numbers.push(item): null);
  return numbers;
}
//Separates words from the user input
function separateWords(inputData:string):string[]
{
  let words:string[]=[];
  inputData.split(" ").forEach((item:string|any) => (isNaN(item) ? words.push(item) : null));
  return words;
}

export{
    separateNumbers,
    separateWords
}