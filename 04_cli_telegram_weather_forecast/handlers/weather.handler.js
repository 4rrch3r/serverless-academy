import { getCalculatedWeatherByInterval } from "../utils/weather.js";

//sends a message with dynamic city name in keyboard
async function defaultMessageHandler(bot, msg, cityName) {
  try {
    await bot.sendMessage(msg.chat.id, `Choose the city, please`, {
      reply_markup: {
        keyboard: [[cityName]],
        resize_keyboard: true,
      },
    });
  } catch (error) {
    console.lot("Error occured: " + error);
  }
}
//sends a message with interval options and dynamic city name in keyboard
async function chosenCityHandler(bot, msg, cityName) {
  try {
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
  } catch (error) {
    console.lot("Error occured: " + error);
  }
}
//handles weather foreacst with different intervals
async function intervalHandler(bot, msg, cityName, apiKey, interval) {
  try {
    //calls function to calculate forecast
    let result = await getCalculatedWeatherByInterval(cityName,apiKey,interval);
    //sends error message as API request failed
    if (result === null) {
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
    //sends forecast data to user
    await bot.sendMessage(msg.chat.id, result, {
      reply_markup: {
        keyboard: [["choose city"]],
        resize_keyboard: true,
      },
    });
  } catch (error) {
    console.lot("Error occured: " + error);
  }
}
export { defaultMessageHandler, chosenCityHandler, intervalHandler };
