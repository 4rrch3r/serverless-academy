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
import fs from 'fs';
//add user to db 
function addUser(user, dataSeparator, dbPath) {
    return __awaiter(this, void 0, void 0, function* () {
        yield fs.promises.appendFile(dbPath, dataSeparator + JSON.stringify(user));
    });
}
//get all users from db
function getAllUsers(dataSeparator, dbPath) {
    return __awaiter(this, void 0, void 0, function* () {
        let users = [];
        let plainUsers = yield fs.promises.readFile(dbPath, { encoding: 'utf-8' });
        plainUsers.split(dataSeparator).forEach((plainUser) => plainUser !== '' ? users.push(JSON.parse(plainUser)) : null);
        return users;
    });
}
//get user from db by name
function getUserByName(searchedUserName, dataSeparator, dbPath) {
    return __awaiter(this, void 0, void 0, function* () {
        //convert user name to uppercase
        searchedUserName = searchedUserName.toUpperCase();
        //get all users from db
        let users = yield getAllUsers(dataSeparator, dbPath);
        //compare in uppercase,find and return users with same name
        return users.find((user) => user.name.toUpperCase() === searchedUserName);
    });
}
export { addUser, getAllUsers, getUserByName };
