# 4. TELEGRAM BOT: WEATHER FORECAST
**How to run application:**<br><br>
_Universal way_<br>
Hardcode values from `index.js` file for variables: `TELEGRAM_API_TOKEN`,`OWM_API_KEY`,`OWM_CITY_NAME`.<br>
After this you can start bot with `npm run start` or `node index.js`.
_Windows OS(PowerShell)_<br>
You can set .env variables and start app like this: `$env:TELEGRAM_API_TOKEN="..."; $env:OWM_API_KEY="...";$env:OWM_CITY_NAME="...(e.g.Kyiv)";`<br>
 `node index.js`<br><br>
 _Linux/Mac OS(Unix-like OS)_<br>
Create .env file and prepopulate it with variables.This line should work to set .env variables and start bot `env $(cat .env | xargs) node index.js`<br>

## Task Description

This task is a good way to practice and understand: what third-party REST APIs are and how to work with them.<br>

Your task: write a bot that will give the user the weather forecast for a particular city. Choose the city according to your taste or where you live, it's not critical.
<br>

**❕Bot requirements**<br>

* The bot should be able to return a weather forecast for every 3 hours, or for every 6 hours at the request of the user.
* The menu structure should be represented by the buttons: "Forecast in Nice" ⇒ "at intervals of 3 hours" / "at intervals of 6 hours" (one button, after clicking on which a menu with two more buttons opens).<br>

**🛠️Tools and APIs you need to use**<br>

* OpenWeather API (API docs). you should use this specific endpoint — https://api.openweathermap.org/data/2.5/forecast?appid=.....
* node-telegram-bot-api to create your bot logic
* Axios to make API calls against OpenWeather API<br>
