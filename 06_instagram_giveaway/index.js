import { readDataByPattern,countNicknamesInFiles } from "./utils/data.js";

function uniqueUsernames(userData) {
    //put array with usernames from all files to Set collection to get unique ones
  return new Set(userData.totalUsernames).size;
}
function existInAllFiles(userData ) {
   //call template function with quantity of all files
   return countNicknamesInFiles(userData,20);
}
function existInAtLeastTen(userData) {
    //call template function with quantity of 10 files
    return countNicknamesInFiles(userData,10);
}
async function init() {
    //start of the measuring time
    let startTime = performance.now();
    //get structured users data from raw data
    let userData = await readDataByPattern(20,'./data/','out','.txt');
    //call functions and show results in console
    console.log(`Quantity of unique usernames -> ${uniqueUsernames(userData)}`);
    console.log(`Quantity of usernames that exist in 20 files -> ${existInAllFiles(userData)}`);
    console.log(`Quantity of usernames that exist at least in 10 files -> ${existInAtLeastTen(userData)}`)
    //end of the measuring time
    let endTime = performance.now();
    //show time in console
    console.log(`Time that was spent -> ${endTime-startTime} (ms)`)
}

//start script
init();
