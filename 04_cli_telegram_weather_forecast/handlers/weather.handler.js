var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
//@ts-ignore
import { getCalculatedWeatherByInterval } from "../utils/weather.js";
//sends a message with dynamic city name in keyboard
function defaultMessageHandler(bot, msg, cityName) {
    return __awaiter(this, void 0, void 0, function* () {
        yield bot.sendMessage(msg.chat.id, `Choose the city, please`, {
            reply_markup: {
                keyboard: [[cityName]],
                resize_keyboard: true,
            },
        });
    });
}
//sends a message with interval options and dynamic city name in keyboard
function chosenCityHandler(bot, msg, cityName) {
    return __awaiter(this, void 0, void 0, function* () {
        yield bot.sendMessage(msg.chat.id, `Choose the 3 or 6 weather forecast interval in ${cityName}`, {
            reply_markup: {
                keyboard: [["3 hours interval", "6 hours interval"], ["choose city"]],
                resize_keyboard: true,
            },
        });
    });
}
//handles weather foreacst with different intervals
function intervalHandler(bot, msg, cityName, apiKey, interval) {
    return __awaiter(this, void 0, void 0, function* () {
        //calls function to calculate forecast
        let result = yield getCalculatedWeatherByInterval(msg, cityName, apiKey, interval);
        //sends forecast data to user
        if (result != null) {
            yield bot.sendMessage(msg.chat.id, result, {
                reply_markup: {
                    keyboard: [["choose city"]],
                    resize_keyboard: true,
                },
            });
        }
        //sends error message as API request failed
        else {
            yield bot.sendMessage(msg.chat.id, `Ooops, something went wrong with API request.Try again later :/`, {
                reply_markup: {
                    keyboard: [["choose city"]],
                    resize_keyboard: true,
                },
            });
        }
    });
}
export { defaultMessageHandler, chosenCityHandler, intervalHandler };
