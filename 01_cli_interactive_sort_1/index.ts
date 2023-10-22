// @ts-ignore
import * as readline from 'node:readline';
import {
 alphabeticalSort,
 numbersRaisingSort,
 numbersDecreasingSort,
 lettersRaisingSort,
 uniqueWordsSort,
 uniqueWordsAndNumbersSort
} from './utils/sort'
//instance of readline module with readble/writable streams
const rl = readline.createInterface({
  // @ts-ignore
  input: process.stdin,
  // @ts-ignore
  output: process.stdout,
});

//readline instance tells a user to enter data throught console 
function inputDataQuestion():void {
  rl.question(
    "Hello. Enter 10 words or digits deviding them in spaces: ",
    inputHandler
  );
}

//readline instance tells a user to choose a sort method and handles it 
function inputHandler(inputData:string):void {
  rl.question(
    `How would you like to sort values: \n
      1. Words by name (from A to Z). \n
      2. Show digits from the smallest. \n
      3. Show digits from the biggest.\n
      4. Words by quantity of letters.\n
      5. Only unique words.\n
      6. Only unique words and numbers.\n \n
      Select (1 - 5) and press ENTER: `,
    (selectedSortWay:string):void => {
      //sort user's input throught a different sort cases
      switch (selectedSortWay) {
        case "1": {
          let sortResult:string[] = alphabeticalSort(inputData);
          console.log(sortResult);
          inputDataQuestion();
          break;
        }
        case "2": {
          let sortResult:string[] = numbersRaisingSort(inputData);
          console.log(sortResult);
          inputDataQuestion();
          break;
        }
        case "3": {
          let sortResult:string[] = numbersDecreasingSort(inputData);
          console.log(sortResult);
          inputDataQuestion();
          break;
        }
        case "4": {
          let sortResult:string[] = lettersRaisingSort(inputData);
          console.log(sortResult);
          inputDataQuestion();
          break;
        }

        case "5": {
          let sortResult:string[] = uniqueWordsSort(inputData);
          console.log(sortResult);
          inputDataQuestion();
          break;
        }
        case "6": {
          let sortResult:string[] = uniqueWordsAndNumbersSort(inputData);
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