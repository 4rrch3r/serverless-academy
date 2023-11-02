import axios from "axios";

async function updateCacheData(currencies, myCache) {
  try {
    //get info about currency exchanges from monobank
    const monobankResponse = await axios.get("https://api.monobank.ua/bank/currency");
    //something went wrong with request
    if (monobankResponse.status != 200) return false;
    //search data in currency list object
    for (let currency in currencies) {
      //try to find a value in monobank data
      let currencyInMonobank = monobankResponse.data.find((element) => element.currencyCodeA == currencies[currency]);
      //data was not found, set cache value
      if (!currencyInMonobank) {
        myCache.set(`Mono ${currency}`,"MonoBank\n\n Information about such currency was not found");
        break;
      }
      //data was found
      myCache.set(`Mono ${currency}`,`MonoBank\n\n Buy\n ${currency} : ${currencyInMonobank.rateBuy} UAH\n--------------------------------------\n Sale\n ${currency} : ${currencyInMonobank.rateSell} UAH\n`);
    }
    //indicate that everything went fine
    return true;
  } catch (error) {
    console.log("Error occured: " + error);
  }
}
export { updateCacheData };
