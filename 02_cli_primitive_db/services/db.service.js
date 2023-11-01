import fs from 'fs'

//add user to db 
async function addUser(user,dataSeparator,dbPath)
{
    await fs.promises.appendFile(dbPath,dataSeparator+JSON.stringify(user))
}
//get all users from db
async function getAllUsers(dataSeparator,dbPath)
{
  let users =[];
  let plainUsers = await fs.promises.readFile(dbPath,{encoding:'utf-8'});
  plainUsers.split(dataSeparator).forEach((plainUser) => plainUser!==''?users.push(JSON.parse(plainUser)):null);
  return users;
}
//get user from db by name
async function getUserByName(searchedUserName,dataSeparator,dbPath)
{
  //convert user name to uppercase
  searchedUserName=searchedUserName.toUpperCase();
  //get all users from db
  let users = await getAllUsers(dataSeparator,dbPath);
  //compare in uppercase,find and return users with same name
  return users.find((user)=>user.name.toUpperCase()===searchedUserName)
}

export{
    addUser,
    getAllUsers,
    getUserByName
}