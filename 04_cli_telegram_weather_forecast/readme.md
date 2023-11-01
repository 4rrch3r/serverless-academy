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
