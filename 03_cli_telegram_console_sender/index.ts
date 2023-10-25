import { program } from "commander";
// @ts-ignore
import TelegramBot from "node-telegram-bot-api";

//hardcoded telegram api token and chat id
const TELEGRAM_API_TOKEN:string = "6708708920:AAF37bsP84Kq5phe8_G8pNj6MAzjcAM9u94";
const TELEGRAM_CHAT_ID:string = "523702421";

//create a bot instance with telegram token
const bot = new TelegramBot(TELEGRAM_API_TOKEN);

//version and description of commander's instance
program.version("1.1.1").description("Telegram Console Sender");

//when command 'm' or 'send-message' entered by user
program
  .command("send-message <message>")
  .alias("m")
  .description("Send a message to Telegram Bot.")
  .action(async (message:string) => {
    //send message to user throught telegram bot
    await bot.sendMessage(TELEGRAM_CHAT_ID, message);
  });

//when command 'p' or 'send-photo' entered by user
program
  .command("send-photo <path>")
  .alias("p")
  .description(
    "Send a photo to Telegram Bot.Just drag and drop it into console after p flag."
  )
  .action(async (path:string) => {
    //send photo to user throught telegram bot
    await bot.sendPhoto(TELEGRAM_CHAT_ID, path);
  });

// @ts-ignore
program.parse(process.argv);
