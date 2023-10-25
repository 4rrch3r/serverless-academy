"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
// @ts-ignore
const node_telegram_bot_api_1 = __importDefault(require("node-telegram-bot-api"));
//hardcoded telegram api token and chat id
const TELEGRAM_API_TOKEN = "6708708920:AAF37bsP84Kq5phe8_G8pNj6MAzjcAM9u94";
const TELEGRAM_CHAT_ID = "523702421";
//create a bot instance with telegram token
const bot = new node_telegram_bot_api_1.default(TELEGRAM_API_TOKEN);
//version and description of commander's instance
commander_1.program.version("1.1.1").description("Telegram Console Sender");
//when command 'm' or 'send-message' entered by user
commander_1.program
    .command("send-message <message>")
    .alias("m")
    .description("Send a message to Telegram Bot.")
    .action((message) => __awaiter(void 0, void 0, void 0, function* () {
    //send message to user throught telegram bot
    yield bot.sendMessage(TELEGRAM_CHAT_ID, message);
}));
//when command 'p' or 'send-photo' entered by user
commander_1.program
    .command("send-photo <path>")
    .alias("p")
    .description("Send a photo to Telegram Bot.Just drag and drop it into console after p flag.")
    .action((path) => __awaiter(void 0, void 0, void 0, function* () {
    //send photo to user throught telegram bot
    yield bot.sendPhoto(TELEGRAM_CHAT_ID, path);
}));
// @ts-ignore
commander_1.program.parse(process.argv);
