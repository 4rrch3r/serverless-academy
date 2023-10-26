//@ts-ignore
import { getCalculatedWeatherByInterval } from "../utils/weather.js";

//sends a message with dynamic city name in keyboard
async function defaultMessageHandler(bot:any,msg:any,cityName:string):Promise<void>
{
  await bot.sendMessage(msg.chat.id, `Choose the city, please`, {
    reply_markup: {
      keyboard: [[cityName]],
      resize_keyboard: true,
    },
  });
}
//sends a message with interval options and dynamic city name in keyboard
async function chosenCityHandler(bot:any,msg:any,cityName:string):Promise<void>
{
  await bot.sendMessage(
    msg.chat.id,
    `Choose the 3 or 6 weather forecast interval in ${cityName}`,
    {
      reply_markup: {
        keyboard: [["3 hours interval", "6 hours interval"], ["choose city"]],
        resize_keyboard: true,
      },
    }
  );
}
//handles weather foreacst with different intervals
async function intervalHandler(bot:any,msg:any,cityName:string,apiKey:string,interval:number):Promise<void>
{
 //calls function to calculate forecast
 let result:string|null = await getCalculatedWeatherByInterval(msg,cityName,apiKey,interval)
 //sends forecast data to user
 if(result!=null)
 {
  await bot.sendMessage(msg.chat.id, result, {
    reply_markup: {
      keyboard: [["choose city"]],
      resize_keyboard: true,
    },
  });
 }
 //sends error message as API request failed
 else
 {
  await bot.sendMessage(
    msg.chat.id,
    `Ooops, something went wrong with API request.Try again later :/`,
    {
      reply_markup: {
        keyboard: [["choose city"]],
        resize_keyboard: true,
      },
    }
  );
 }

}
export{
defaultMessageHandler,
chosenCityHandler,
intervalHandler
}