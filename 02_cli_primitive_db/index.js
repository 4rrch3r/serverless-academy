var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// @ts-ignore
import inquirer from "inquirer";
import { searchUser, createUser } from "./handlers/user.handler.js";
//data separator in db.txt
const dataSeparator = ";";
//local db path
const dbPath = "./db.txt";
function initialQuestion() {
    return __awaiter(this, void 0, void 0, function* () {
        //ask the user's name
        let answerWithUserName = yield inquirer.prompt([
            {
                name: "name",
                message: "Enter the user's name.To cancel press ENTER: ",
                type: "input",
            },
        ]);
        // user's name was not given
        if (answerWithUserName.name === "") {
            //ask if user wants to find by name in db
            let answerWithSearchUser = yield inquirer.prompt([
                {
                    name: "searchUserData",
                    message: "Would you like to search values in DB? ",
                    type: "confirm",
                },
            ]);
            //user wants to find by name in db
            if (answerWithSearchUser.searchUserData) {
                let user = yield searchUser(dataSeparator, dbPath);
                //display the user info or message that user was not found
                user ? console.log(user) : console.log("User with such name was not found.");
            }
            //end of the app
            console.log(`\nGood bye! Come back again!\n`);
        }
        //user's name was given
        else {
            // call createUser function to create and user to db
            yield createUser(answerWithUserName.name, dataSeparator, dbPath);
            //ask initial question again
            yield initialQuestion();
        }
    });
}
//start the CLI app
initialQuestion();
