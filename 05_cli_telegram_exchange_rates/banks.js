var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// @ts-ignore
import axios from "axios";
// @ts-ignore
import { updateCacheData } from "./utils/updateCacheData.js";
function getPrivatbankCurrencies(currencyName) {
    return __awaiter(this, void 0, void 0, function* () {
        //get info about currency exchanges from PrivatBank
        const privatBankResponse = yield axios.get("https://api.privatbank.ua/p24api/pubinfo?exchange&coursid=11");
        //something went wrong with request
        if (privatBankResponse.status != 200)
            return `PrivatBank\n\n Api request failed :/`;
        //search currency with specific name in received data
        let currencyInPrivatbank = privatBankResponse.data.find((element) => element.ccy == currencyName);
        //return info about exchange if currency was found 
        return currencyInPrivatbank
            ? `PrivatBank\n\n Buy\n ${currencyName} : ${currencyInPrivatbank.buy} ${currencyInPrivatbank.base_ccy}\n--------------------------------------\n Sale\n ${currencyName} : ${currencyInPrivatbank.sale} ${currencyInPrivatbank.base_ccy}\n`
            : `PrivatBank\n\n Information about such currency was not found`;
    });
}
function getMonobankCurrencies(currencyName, currencies, myCache) {
    return __awaiter(this, void 0, void 0, function* () {
        //search in cache monobank values
        if (myCache.has(`Mono ${currencyName}`))
            //return string with info if such was found
            return myCache.get(`Mono ${currencyName}`);
        else
            //call update cache function and return data string or message that api request failed
            return (yield updateCacheData(currencies, myCache)) ? myCache.get(`Mono ${currencyName}`) : `MonoBank\n\n Api request failed :/`;
    });
}
export { getMonobankCurrencies, getPrivatbankCurrencies };
