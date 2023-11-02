import { getMonobankCurrencies, getPrivatbankCurrencies } from "../banks.js";

async function defaultMessageHandler(bot, msg) {
  try {
    //send message to user with currencies options
    await bot.sendMessage(msg.chat.id, `Pick the currency, please`, {
      reply_markup: {
        keyboard: [["USD", "EUR"]],
        resize_keyboard: true,
      },
    });
  } catch (error) {
    console.log("Error occured: " + error);
  }
}
async function currencyHandler(bot, msg, currencies, myCache, currencyName) {
  try {
    //get data from different banks about chosen currency
    let privatbankCurrencyData = await getPrivatbankCurrencies(currencyName);
    let monobankCurrencyData = await getMonobankCurrencies(currencyName,currencies,myCache);
    //return message to user with currency info
    await bot.sendMessage(msg.chat.id,`${privatbankCurrencyData}\n\n${monobankCurrencyData}`,
      {
        reply_markup: {
          keyboard: [["exchange rates"]],
          resize_keyboard: true,
        },
      }
    );
  } catch (error) {
    console.log("Error occured: " + error);
  }
}

export { defaultMessageHandler, currencyHandler };
