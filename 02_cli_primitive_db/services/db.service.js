import fs from "fs";

//add user to db
async function addUser(user, dataSeparator, dbPath) {
  try {
    await fs.promises.appendFile(dbPath, dataSeparator + JSON.stringify(user));
  } catch (error) {
    console.log("Error occured: " + error);
  }
}
//get all users from db
async function getAllUsers(dataSeparator, dbPath) {
  try {
    let users = [];
    let plainUsers = await fs.promises.readFile(dbPath, { encoding: "utf-8" });
    plainUsers.split(dataSeparator).forEach((plainUser) =>plainUser !== "" ? users.push(JSON.parse(plainUser)) : null);
    return users;
  } catch (error) {
    console.log("Error occured: " + error);
  }
}
//get user from db by name
async function getUserByName(searchedUserName, dataSeparator, dbPath) {
  try {
    //convert user name to uppercase
    searchedUserName = searchedUserName.toUpperCase();
    //get all users from db
    let users = await getAllUsers(dataSeparator, dbPath);
    //compare in uppercase,find and return users with same name
    return users.find((user) => user.name.toUpperCase() === searchedUserName);
  } catch (error) {
    console.log("Error occured: " + error);
  }
}

export { addUser, getAllUsers, getUserByName };
