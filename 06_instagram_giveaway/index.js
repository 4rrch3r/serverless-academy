import { readDataByPattern,countNicknamesInFiles,countFrequencyOfUsernicknames } from "./utils/data.js";

function uniqueUsernames(userData) {
    //get size of Set collection to get unique ones
  return userData.totalUsernames.size;
}
function existInAllFiles(countedNicknames ) {
   //call template function with quantity of all files
   return countNicknamesInFiles(countedNicknames,20);
}
function existInAtLeastTen(countedNicknames) {
    //call template function with quantity of 10 files
    return countNicknamesInFiles(countedNicknames,10);
}

async function init() {
    //start of the measuring time
    let startTime = performance.now();
    //get structured users data from raw data
    let userData = await readDataByPattern(20,'./data/','out','.txt');
    //count users nicknames in files
    let countedNicknames = countFrequencyOfUsernicknames(userData);
    //call functions and show results in console
    console.log(`Quantity of unique usernames -> ${uniqueUsernames(userData)}`);
    console.log(`Quantity of usernames that exist in 20 files -> ${existInAllFiles(countedNicknames)}`);
    console.log(`Quantity of usernames that exist at least in 10 files -> ${existInAtLeastTen(countedNicknames)}`)
    //end of the measuring time
    let endTime = performance.now();
    //show time in console
    console.log(`Time that was spent -> ${endTime-startTime} (ms)`)
}

//start script
init();
