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
import axios from "axios";
//calculates data from OWM foreacst request
function getCalculatedWeatherByInterval(msg, cityName, apiKey, interval) {
    return __awaiter(this, void 0, void 0, function* () {
        //sends a request to OWM API to get a forecast
        const weatherResponse = yield axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=metric&appid=${apiKey}`);
        //everything went fine with request
        if (weatherResponse.data.cod == "200") {
            //array to store each piece of forecast
            let intervalledData = [];
            //collect the forecast pieces
            for (let i = 0; i < weatherResponse.data.list.length; i += interval / 3) {
                intervalledData.push(`📅Date: ${weatherResponse.data.list[i].dt_txt}\n Temperature: ${weatherResponse.data.list[i].main.temp}°C\n Feels like: ${weatherResponse.data.list[i].main.feels_like}°C \n Overall: ${weatherResponse.data.list[i].weather[0].main}\n-------------\n`);
            }
            //returns a forecast as a string
            return intervalledData.join(" ");
        }
        //something went wrong with request
        else {
            return null;
        }
    });
}
export { getCalculatedWeatherByInterval };
