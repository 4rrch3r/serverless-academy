import fs from "fs";

function countNicknamesInFiles(countedNicknames,quantityOfFiles) {
    //count quantity of users that were seen at least at 'quantityOfFiles' files
    return countedNicknames.reduce((accumulator, element) => element >= quantityOfFiles ? ++accumulator : accumulator,0);
}
function countFrequencyOfUsernicknames(userData){
  //store quantity of nicknames in Map
  let nicknamesQuantityMap = new Map();
  //search in file names
  for (let fileName in userData.separatedFileInfo) {
  //search in unique names from separate file
    for (let usernickname of userData.separatedFileInfo[fileName]) {
      //count quantity of nicknames
      nicknamesQuantityMap.has(usernickname)
        ? nicknamesQuantityMap.set(usernickname, 1 + nicknamesQuantityMap.get(usernickname))
        : nicknamesQuantityMap.set(usernickname, 1);
    }
  }
  return  Array.from(nicknamesQuantityMap.values());
}
async function readDataByPattern(quantityOfFiles,directory,filePattern,fileFormat) {
    try {
      let userData = {
          //usernames from all files
        totalUsernames: new Set(),
        //separated unique usernames from each file
        separatedFileInfo: {},
      };
      for (let i = 0; i < quantityOfFiles; i++) {
        //read file by directory,pattern,iterator and format
        let fileData = await fs.promises.readFile(directory+filePattern+i+fileFormat, {encoding: "utf-8" });
        //split string to get array of string
        let splittedData = fileData.split("\n");
        //collect users data
        userData.totalUsernames.add(...splittedData);
        userData.separatedFileInfo[`out${i}.txt`] = Array.from( new Set(splittedData));
      }
      return userData;
    } catch (error) {
      console.log("error with reading files: "+error);
    }
  }
  export{
    readDataByPattern,
    countFrequencyOfUsernicknames,
    countNicknamesInFiles
  }