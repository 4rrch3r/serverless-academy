import fs from "fs";
import { transformVacationsData } from "./utils/transform.js";

async function init() {
try{
  //read raw data and parse in to JSON
  let rawVacations = JSON.parse(await fs.promises.readFile("./data/vacations.json", { encoding: "utf-8" }) );
  
  //transform raw vacations data
  let transformedVacations= transformVacationsData(rawVacations)

  //write transformed vacations data in string format
  await fs.promises.writeFile("./data/transformedVacations.json",JSON.stringify(transformedVacations));
} catch (error) {
    console.log("error with reading/writing files");
  }
}

//start script
init();
