import inquirer from "inquirer";
import { getAllUsers, getUserByName, addUser } from "../services/db.service.js";

//searches user in db
async function searchUser(
  dataSeparator,
  dbPath
) {
  //find all users and show them in console
  let users = await getAllUsers(dataSeparator, dbPath);
  console.log(users);
  //ask user to input search name
  let answerWithSearchName = await inquirer.prompt([
    {
      name: "searchName",
      message: "Enter user's name you want to find in DB: ",
      type: "input",
    },
  ]);
  //find user with such name in db
  let user = await getUserByName(
    answerWithSearchName.searchName,
    dataSeparator,
    dbPath
  );
  return user;
}
//creates user and adds user to db
async function createUser(userName,dataSeparator,dbPath) {
  //ask user to enter gender and age
  let answerWithUserInfo = await inquirer.prompt([
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
  if (answerWithUserInfo.age !== "") user.age = answerWithUserInfo.age;
  //call addUser to add new user to db
  await addUser(user, dataSeparator, dbPath);
}

export { searchUser, createUser };
