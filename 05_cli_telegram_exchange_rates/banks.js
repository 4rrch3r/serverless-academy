import axios from "axios";
import { updateCacheData } from "./utils/updateCacheData.js";

async function getPrivatbankCurrencies(currencyName) {
  try {
    //get info about currency exchanges from PrivatBank
    const privatBankResponse = await axios.get("https://api.privatbank.ua/p24api/pubinfo?exchange&coursid=11");
    //something went wrong with request
    if (privatBankResponse.status != 200)
      return `PrivatBank\n\n Api request failed :/`;
    //search currency with specific name in received data
    let currencyInPrivatbank = privatBankResponse.data.find((element) => element.ccy == currencyName);
    //return info about exchange if currency was found
    return currencyInPrivatbank
      ? `PrivatBank\n\n Buy\n ${currencyName} : ${currencyInPrivatbank.buy} ${currencyInPrivatbank.base_ccy}\n--------------------------------------\n Sale\n ${currencyName} : ${currencyInPrivatbank.sale} ${currencyInPrivatbank.base_ccy}\n`
      : `PrivatBank\n\n Information about such currency was not found`;
  } catch (error) {
    console.log("Error occured: " + error);
  }
}
async function getMonobankCurrencies(currencyName, currencies, myCache) {
  //search in cache monobank values
  if (myCache.has(`Mono ${currencyName}`))
    //return string with info if such was found
    return myCache.get(`Mono ${currencyName}`);
  //call update cache function and return data string or message that api request failed
  else
    return (await updateCacheData(currencies, myCache)) ? myCache.get(`Mono ${currencyName}`) : `MonoBank\n\n Api request failed :/`;
}

export { getMonobankCurrencies, getPrivatbankCurrencies };
