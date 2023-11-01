//Separates numbers from the user input
function separateNumbers(inputData)
{
  let numbers = [];
  inputData.split(" ").forEach((item) =>!isNaN(item) && !isNaN(parseFloat(item))? numbers.push(item): null);
  return numbers;
}
//Separates words from the user input
function separateWords(inputData)
{
  let words=[];
  inputData.split(" ").forEach((item) => (isNaN(item) ? words.push(item) : null));
  return words;
}

export{
    separateNumbers,
    separateWords
}