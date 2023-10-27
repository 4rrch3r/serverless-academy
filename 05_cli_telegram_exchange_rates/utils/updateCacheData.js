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
function updateCacheData(currencies, myCache) {
    return __awaiter(this, void 0, void 0, function* () {
        //get info about currency exchanges from monobank
        const monobankResponse = yield axios.get("https://api.monobank.ua/bank/currency");
        //something went wrong with request
        if (monobankResponse.status != 200)
            return false;
        //search data in currency list object
        for (let currency in currencies) {
            //try to find a value in monobank data
            let currencyInMonobank = monobankResponse.data.find((element) => element.currencyCodeA == currencies[currency]);
            //data was not found, set cache value
            if (!currencyInMonobank) {
                myCache.set(`Mono ${currency}`, "MonoBank\n\n Information about such currency was not found");
                break;
            }
            //data was found
            myCache.set(`Mono ${currency}`, `MonoBank\n\n Buy\n ${currency} : ${currencyInMonobank.rateBuy} UAH\n--------------------------------------\n Sale\n ${currency} : ${currencyInMonobank.rateSell} UAH\n`);
        }
        //indicate that everything went fine
        return true;
    });
}
export { updateCacheData };
