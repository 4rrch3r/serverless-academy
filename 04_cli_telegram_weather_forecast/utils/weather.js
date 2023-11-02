import axios from "axios";

//calculates data from OWM foreacst request
async function getCalculatedWeatherByInterval( cityName, apiKey, interval)
{
  try {
    //sends a request to OWM API to get a forecast
  const weatherResponse = await axios.get(
    `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=metric&appid=${apiKey}`
  );
    //something went wrong with request
    if(weatherResponse.data.cod != "200") {
      return null;
    }
    //create array to store each piece of forecast
    let intervalledData = [];
    //collect the forecast pieces
    for (let i = 0; i < weatherResponse.data.list.length; i += interval / 3) {
      intervalledData.push(
        `📅Date: ${weatherResponse.data.list[i].dt_txt}\n Temperature: ${weatherResponse.data.list[i].main.temp}°C\n Feels like: ${weatherResponse.data.list[i].main.feels_like}°C \n Overall: ${weatherResponse.data.list[i].weather[0].main}\n-------------\n`
      );
    }
    //returns a forecast as a string
    return intervalledData.join(" ");
  } catch (error) {
    console.log("Error occured: "+error)
  }
}

export { getCalculatedWeatherByInterval };
