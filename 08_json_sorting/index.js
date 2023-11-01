import {recursiveCountFieldValues,countFieldValuesByString} from './utils/countFieldValues.js'
import {sendSeveralRequests} from './utils/requests.js'

async function init() {
  try {
    //list of endpoints
    let endpoints = [
      "https://jsonbase.com/sls-team/json-793",
      "https://jsonbase.com/sls-team/json-955",
      "https://jsonbase.com/sls-team/json-231",
      "https://jsonbase.com/sls-team/json-931",
      "https://jsonbase.com/sls-team/json-93",
      "https://jsonbase.com/sls-team/json-342",
      "https://jsonbase.com/sls-team/json-770",
      "https://jsonbase.com/sls-team/json-491",
      "https://jsonbase.com/sls-team/json-281",
      "https://jsonbase.com/sls-team/json-718",
      "https://jsonbase.com/sls-team/json-310",
      "https://jsonbase.com/sls-team/json-806",
      "https://jsonbase.com/sls-team/json-469",
      "https://jsonbase.com/sls-team/json-258",
      "https://jsonbase.com/sls-team/json-516",
      "https://jsonbase.com/sls-team/json-79",
      "https://jsonbase.com/sls-team/json-706",
      "https://jsonbase.com/sls-team/json-521",
      "https://jsonbase.com/sls-team/json-350",
      "https://jsonbase.com/sls-team/json-64",
    ];
    //quantity of requests for each endpoint
    let requestQuantity = 2;
    //field's name to find
    let fieldToFind = "isDone";
    //count of the values of the field
    let countFieldValues = {
      true: 0,
      false: 0,
    };

    //loop throught endpoints
    for (let endpoint of endpoints) {
      //send requests 'requestQuantity' times
      let endpointResponse = await sendSeveralRequests(endpoint,requestQuantity);
      //something went wrong with request
      if (!endpointResponse) {
        console.log(`[Fail] ${endpoint}: The endpoint is unavailable`);
        continue;
      }
      //call function to find field's value in response
      let foundFieldValue = recursiveCountFieldValues(endpointResponse,fieldToFind,countFieldValues);
      //assign message if field's needed value was not found
      foundFieldValue = (foundFieldValue === undefined)? `Boolean value for "${fieldToFind}" key was not found.`: foundFieldValue;
      console.log(`[Success] ${endpoint}: ${fieldToFind} - ${foundFieldValue}`);
    }
    console.log(`\nFound True values: ${countFieldValues["true"]},\nFound False values: ${countFieldValues["false"]}`);
  } catch (error) {
    console.log("Error occured: " + error);
  }
}

//start script
init();
