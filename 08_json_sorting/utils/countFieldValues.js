function recursiveCountFieldValues(data, fieldToFind, countFieldValues) {
    //loop throught data's keys
    for (let key in data) {
      if (typeof data[key] === "object") {
        // loop through array
        if (Array.isArray(data[key])) {
          for (let i = 0; i < data[key].length; i++) {
            //recursive call for each array's item
            let foundValue = countFieldValues(data[key][i],fieldToFind,countFieldValues);
            //return field's value if such was found
            if (foundValue != undefined) return foundValue;
          }
        } else {
          //recursive call for object
          let foundValue = countFieldValues(data[key], fieldToFind, countFieldValues);
          //return field's value if such was found
          if (foundValue != undefined) return foundValue;
        }
      } else {
        //check if field's value is correct
        if (key == fieldToFind && typeof data[key] == "boolean") {
          //add field's value to total quantity
          countFieldValues[data[key]]++;
          return data[key];
        }
      }
    }
  }

//second way on how to find field's value
function countFieldValuesByString(data, fieldToFind, countFieldValues) {
    //convert JSON object to string and split it by the name of the field
    let strData = JSON.stringify(data)?.split(`"${fieldToFind}":`)[1];
    //loop throught a count values
    for (let key in countFieldValues) {
      // if field's value start with value that we have (e.g. 'true')
      if (strData?.startsWith(key)) {
        //add field's value to total quantity
        countFieldValues[key]++;
        return key;
      }
    }
    //inform user that expected values for such field was not found
    return `Boolean value for "${fieldToFind}" key was not found.`;
  }
export{
    countFieldValuesByString,
    recursiveCountFieldValues
}  