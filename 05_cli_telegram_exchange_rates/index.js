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
import TelegramBot from "node-telegram-bot-api";
// @ts-ignore
import NodeCache from "node-cache";
// @ts-ignore
import { currencyHandler, defaultMessageHandler } from './handlers/currency.handler.js';
//list of currencies with ISO codes
let currencies = {
    USD: "840",
    EUR: "978",
};
//default 10 min TTL for all items
const myCache = new NodeCache({ stdTTL: 600 });
//variables from .env file
// @ts-ignore
const TELEGRAM_API_TOKEN = process.env.TELEGRAM_API_TOKEN;
//create a bot instance with telegram token
const bot = new TelegramBot(TELEGRAM_API_TOKEN, { polling: true });
//bot is waiting for user's message
bot.on("text", (msg) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //different text cases with separated handlers
        switch (msg.text) {
            case "exchange rates": {
                yield defaultMessageHandler(bot, msg);
                break;
            }
            case "USD": {
                yield currencyHandler(bot, msg, currencies, myCache, "USD");
                break;
            }
            case "EUR": {
                yield currencyHandler(bot, msg, currencies, myCache, "EUR");
                break;
            }
            default: {
                yield defaultMessageHandler(bot, msg);
                break;
            }
        }
    }
    catch (error) {
        console.log(error);
    }
}));
