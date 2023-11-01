
import * as readline from 'node:readline';
import {
 alphabeticalSort,
 numbersRaisingSort,
 numbersDecreasingSort,
 lettersRaisingSort,
 uniqueWordsSort,
 uniqueWordsAndNumbersSort
} from './utils/sort.js'

//instance of readline module with readble/writable streams
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

//readline instance tells a user to enter data throught console 
function inputDataQuestion() {
  rl.question(
    "Hello. Enter 10 words or digits deviding them in spaces: ",
    inputHandler
  );
}

//readline instance tells a user to choose a sort method and handles it 
function inputHandler(inputData) {
  rl.question(
    `How would you like to sort values: \n
      1. Words by name (from A to Z). \n
      2. Show digits from the smallest. \n
      3. Show digits from the biggest.\n
      4. Words by quantity of letters.\n
      5. Only unique words.\n
      6. Only unique words and numbers.\n \n
      Select (1 - 5) and press ENTER: `,
    (selectedSortWay) => {
      //sort user's input throught a different sort cases
      switch (selectedSortWay) {
        case "1": {
          let sortResult = alphabeticalSort(inputData);
          console.log(sortResult);
          inputDataQuestion();
          break;
        }
        case "2": {
          let sortResult = numbersRaisingSort(inputData);
          console.log(sortResult);
          inputDataQuestion();
          break;
        }
        case "3": {
          let sortResult = numbersDecreasingSort(inputData);
          console.log(sortResult);
          inputDataQuestion();
          break;
        }
        case "4": {
          let sortResult = lettersRaisingSort(inputData);
          console.log(sortResult);
          inputDataQuestion();
          break;
        }
        case "5": {
          let sortResult = uniqueWordsSort(inputData);
          console.log(sortResult);
          inputDataQuestion();
          break;
        }
        case "6": {
          let sortResult = uniqueWordsAndNumbersSort(inputData);
          console.log(sortResult);
          inputDataQuestion();
          break;
        }
        //closes readline createInterface instance as well as CLI app
        case "exit": {
          console.log("Good bye! Come back again!");
          rl.close();
          break;
        }
        //calls itself again if user entered wrong sort-way value
        default: {
          inputHandler(inputData);
          break;
        }
      }
    }
  );
}

//call a function to start console app
inputDataQuestion();