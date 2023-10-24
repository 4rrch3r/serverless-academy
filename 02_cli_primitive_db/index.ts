// @ts-ignore
import inquirer from "inquirer";
import { searchUser,createUser } from "./handlers/user.handler.js";
import { User } from "./interfaces/user.interface.js";
//data separator in db.txt
const dataSeparator:string = ";";
//local db path
const dbPath:string = "./db.txt";

async function initialQuestion():Promise<void> {
  //ask the user's name
  let answerWithUserName:{
     name:string;
  } = await inquirer.prompt([
    {
      name: "name",
      message: "Enter the user's name.To cancel press ENTER: ",
      type: "input",
    },
  ]);
  // user's name was not given
  if (answerWithUserName.name === "") {
    //ask if user wants to find by name in db
    let answerWithSearchUser:{
      searchUserData:boolean;
    } = await inquirer.prompt([
      {
        name: "searchUserData",
        message: "Would you like to search values in DB? ",
        type: "confirm",
      },
    ]);
    //user wants to find by name in db
    if (answerWithSearchUser.searchUserData) {
    let user:User|undefined =  await searchUser(dataSeparator,dbPath)
    //display the user info or message that user was not found
      user ? console.log(user): console.log("User with such name was not found.");
    }
    //end of the app
    console.log(`\nGood bye! Come back again!\n`)
  }
  //user's name was given
  else {
    // call createUser function to create and user to db
    await createUser(answerWithUserName.name,dataSeparator,dbPath);
    //ask initial question again
    await initialQuestion();
  }
}


//start the CLI app
initialQuestion();
