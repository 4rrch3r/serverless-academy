"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-ignore
const readline = __importStar(require("node:readline"));
const sort_1 = require("./utils/sort");
//instance of readline module with readble/writable streams
const rl = readline.createInterface({
    // @ts-ignore
    input: process.stdin,
    // @ts-ignore
    output: process.stdout,
});
//readline instance tells a user to enter data throught console 
function inputDataQuestion() {
    rl.question("Hello. Enter 10 words or digits deviding them in spaces: ", inputHandler);
}
//readline instance tells a user to choose a sort method and handles it 
function inputHandler(inputData) {
    rl.question(`How would you like to sort values: \n
      1. Words by name (from A to Z). \n
      2. Show digits from the smallest. \n
      3. Show digits from the biggest.\n
      4. Words by quantity of letters.\n
      5. Only unique words.\n
      6. Only unique words and numbers.\n \n
      Select (1 - 5) and press ENTER: `, (selectedSortWay) => {
        //sort user's input throught a different sort cases
        switch (selectedSortWay) {
            case "1": {
                let sortResult = (0, sort_1.alphabeticalSort)(inputData);
                console.log(sortResult);
                inputDataQuestion();
                break;
            }
            case "2": {
                let sortResult = (0, sort_1.numbersRaisingSort)(inputData);
                console.log(sortResult);
                inputDataQuestion();
                break;
            }
            case "3": {
                let sortResult = (0, sort_1.numbersDecreasingSort)(inputData);
                console.log(sortResult);
                inputDataQuestion();
                break;
            }
            case "4": {
                let sortResult = (0, sort_1.lettersRaisingSort)(inputData);
                console.log(sortResult);
                inputDataQuestion();
                break;
            }
            case "5": {
                let sortResult = (0, sort_1.uniqueWordsSort)(inputData);
                console.log(sortResult);
                inputDataQuestion();
                break;
            }
            case "6": {
                let sortResult = (0, sort_1.uniqueWordsAndNumbersSort)(inputData);
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
    });
}
//call a function to start console app
inputDataQuestion();
