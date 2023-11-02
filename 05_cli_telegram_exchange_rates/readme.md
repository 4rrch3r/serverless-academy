# 5. TELEGRAM BOT: EXCHANGE RATES
**How to run application:**<br><br>
_Universal way_<br>
Hardcode values from `index.js` file for variables: `TELEGRAM_API_TOKEN`.<br>
After this you can start bot with `npm run start` or `node index.js`.<br><br>
_Windows OS(PowerShell)_<br>
You can set .env variables and start app like this: `$env:TELEGRAM_API_TOKEN="...";`<br>
 `node index.js`<br><br>
 _Linux/Mac OS(Unix-like OS)_<br>
Create .env file and prepopulate it with variables.This line should work to set .env variables and start bot `env $(cat .env | xargs) node index.js`<br>

## Task Description

In this task we will create a bot for getting the exchange rate. You can use a previously created bot, or create a new one.<br>

**❕Bot requirements**<br>

* The bot must have two buttons that will allow you to find out the USD and EUR exchange rates. Use PrivatBank and Monobank APIs for that.
* Keep in mind that Monobank does not allow you to make requests more than once every 60 seconds, while your bot may be used by dozens of people. Implement this logic, so the bot will not return an error, but will provide actual exchange rates. For example, you can cache results: take a look at node-cache library.<br>