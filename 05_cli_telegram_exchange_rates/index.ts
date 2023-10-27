// @ts-ignore
import TelegramBot from "node-telegram-bot-api";
// @ts-ignore
import NodeCache from "node-cache";
// @ts-ignore
import {currencyHandler,defaultMessageHandler} from './handlers/currency.handler.js'
import { Currencies } from "./interfaces/currencies.interface.js";
//list of currencies with ISO codes
let currencies:Currencies = {
  USD: "840",
  EUR: "978",
};

//default 10 min TTL for all items
const myCache = new NodeCache({ stdTTL: 600 });
//variables from .env file
// @ts-ignore
const TELEGRAM_API_TOKEN:string = process.env.TELEGRAM_API_TOKEN;

//create a bot instance with telegram token
const bot = new TelegramBot(TELEGRAM_API_TOKEN, { polling: true });

//bot is waiting for user's message
bot.on("text", async (msg:any) => {
  try {
    //different text cases with separated handlers
    switch (msg.text) {
      case "exchange rates": {
        await defaultMessageHandler(bot, msg);
        break;
      }
      case "USD": {
        await currencyHandler(bot, msg, currencies,myCache, "USD");
        break;
      }
      case "EUR": {
        await currencyHandler(bot, msg, currencies,myCache, "EUR");
        break;
      }
      default: {
        await defaultMessageHandler(bot, msg);
        break;
      }
    }
  } catch (error) {
    console.log(error);
  }
});
