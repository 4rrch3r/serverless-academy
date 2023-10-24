// @ts-ignore
import fs from 'fs'
import {User} from '../interfaces/user.interface.js'


//add user to db 
async function addUser(user:User,dataSeparator:string,dbPath:string):Promise<void>
{
    await fs.promises.appendFile(dbPath,dataSeparator+JSON.stringify(user))
}
//get all users from db
async function getAllUsers(dataSeparator:string,dbPath:string):Promise<User[]>
{
  let users:User[] =[];
  let plainUsers:string = await fs.promises.readFile(dbPath,{encoding:'utf-8'});
  plainUsers.split(dataSeparator).forEach((plainUser:string) => plainUser!==''?users.push(JSON.parse(plainUser)):null);
  return users;
}
//get user from db by name
async function getUserByName(searchedUserName:string,dataSeparator:string,dbPath:string):Promise<User|undefined>
{
  //convert user name to uppercase
  searchedUserName=searchedUserName.toUpperCase();
  //get all users from db
  let users:User[] = await getAllUsers(dataSeparator,dbPath);
  //compare in uppercase,find and return users with same name
  return users.find((user:User)=>user.name.toUpperCase()===searchedUserName)
}

export{
    addUser,
    getAllUsers,
    getUserByName
}