import TelegramBot from "node-telegram-bot-api";
import {defaultMessageHandler,chosenCityHandler,intervalHandler} from './handlers/weather.handler.js'

//variables from .env file
const TELEGRAM_API_TOKEN = process.env.TELEGRAM_API_TOKEN;
const OWM_API_KEY = process.env.OWM_API_KEY;
const OWM_CITY_NAME = process.env.OWM_CITY_NAME;

//create a bot instance with telegram token
const bot = new TelegramBot(TELEGRAM_API_TOKEN, { polling: true });

//bot is waiting for user's message
bot.on("text", async (msg) => {
  try {
    //different text cases with separated handlers
    switch (msg.text) {
      case "choose city": {
        await defaultMessageHandler(bot,msg,OWM_CITY_NAME);
        break;
      }
      case OWM_CITY_NAME: {
        await chosenCityHandler(bot,msg,OWM_CITY_NAME);
        break;
      }
      case '3 hours interval': {
        await intervalHandler(bot,msg,OWM_CITY_NAME,OWM_API_KEY,3);
        break;
      }
      case "6 hours interval": {
        await intervalHandler(bot,msg,OWM_CITY_NAME,OWM_API_KEY,6);
        break;
      }
      default: {
        await defaultMessageHandler(bot,msg,OWM_CITY_NAME);
        break;
      }
    }
  } catch (error) {
    console.log(error);
  }
});