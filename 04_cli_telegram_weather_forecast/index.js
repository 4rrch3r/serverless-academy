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
import { defaultMessageHandler, chosenCityHandler, intervalHandler } from './handlers/weather.handler.js';
//variables from .env file
// @ts-ignore
const TELEGRAM_API_TOKEN = process.env.TELEGRAM_API_TOKEN;
// @ts-ignore
const OWM_API_KEY = process.env.OWM_API_KEY;
// @ts-ignore
const OWM_CITY_NAME = process.env.OWM_CITY_NAME;
//create a bot instance with telegram token
const bot = new TelegramBot(TELEGRAM_API_TOKEN, { polling: true });
//bot is waiting for user's message
bot.on("text", (msg) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //different text cases with separated handlers
        switch (msg.text) {
            case "choose city": {
                yield defaultMessageHandler(bot, msg, OWM_CITY_NAME);
                break;
            }
            case OWM_CITY_NAME: {
                yield chosenCityHandler(bot, msg, OWM_CITY_NAME);
                break;
            }
            case '3 hours interval': {
                yield intervalHandler(bot, msg, OWM_CITY_NAME, OWM_API_KEY, 3);
                break;
            }
            case "6 hours interval": {
                yield intervalHandler(bot, msg, OWM_CITY_NAME, OWM_API_KEY, 6);
                break;
            }
            default: {
                yield defaultMessageHandler(bot, msg, OWM_CITY_NAME);
                break;
            }
        }
    }
    catch (error) {
        console.log(error);
    }
}));
