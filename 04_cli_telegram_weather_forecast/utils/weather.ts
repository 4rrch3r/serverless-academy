//@ts-ignore
import axios from "axios";

//calculates data from OWM foreacst request
async function getCalculatedWeatherByInterval(msg:any, cityName:string, apiKey:string, interval:number):Promise<string|null>
{
  //sends a request to OWM API to get a forecast
  const weatherResponse = await axios.get(
    `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=metric&appid=${apiKey}`
  );
  //everything went fine with request
  if (weatherResponse.data.cod == "200") {
    //array to store each piece of forecast
    let intervalledData:string[] = [];
    //collect the forecast pieces
    for (let i = 0; i < weatherResponse.data.list.length; i += interval / 3) {
      intervalledData.push(
        `📅Date: ${weatherResponse.data.list[i].dt_txt}\n Temperature: ${weatherResponse.data.list[i].main.temp}°C\n Feels like: ${weatherResponse.data.list[i].main.feels_like}°C \n Overall: ${weatherResponse.data.list[i].weather[0].main}\n-------------\n`
      );
    }
    //returns a forecast as a string
    return intervalledData.join(" ");
  }
  //something went wrong with request
  else {
    return null;
  }
}

export { getCalculatedWeatherByInterval };
