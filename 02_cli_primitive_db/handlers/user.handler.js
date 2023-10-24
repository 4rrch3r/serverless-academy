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
import { getAllUsers, getUserByName, addUser } from "../services/db.service.js";
//searches user in db
function searchUser(dataSeparator, dbPath) {
    return __awaiter(this, void 0, void 0, function* () {
        //find all users and show them in console
        let users = yield getAllUsers(dataSeparator, dbPath);
        console.log(users);
        //ask user to input search name
        let answerWithSearchName = yield inquirer.prompt([
            {
                name: "searchName",
                message: "Enter user's name you want to find in DB: ",
                type: "input",
            },
        ]);
        //find user with such name in db
        let user = yield getUserByName(answerWithSearchName.searchName, dataSeparator, dbPath);
        return user;
    });
}
//creates user and adds user to db
function createUser(userName, dataSeparator, dbPath) {
    return __awaiter(this, void 0, void 0, function* () {
        //ask user to enter gender and age
        let answerWithUserInfo = yield inquirer.prompt([
            {
                name: "gender",
                message: "Choose your Gender: ",
                type: "list",
                choices: ["male", "female"],
            },
            {
                name: "age",
                message: "Enter your age: ",
                type: "input",
            },
        ]);
        //create a user object with fields from answer
        let user = {
            name: userName,
            gender: answerWithUserInfo.gender,
        };
        //if the user age was not given, don't add it
        if (answerWithUserInfo.age !== "")
            user.age = answerWithUserInfo.age;
        //call addUser to add new user to db
        yield addUser(user, dataSeparator, dbPath);
    });
}
export { searchUser, createUser };
