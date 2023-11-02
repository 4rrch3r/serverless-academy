# 3. CLI: TELEGRAM CONSOLE SENDER
**How to run application:**<br><br>
_Universal way_<br>
Hardcode values from `index.js` file for variables: `TELEGRAM_API_TOKEN`,`TELEGRAM_CHAT_ID`.<br>
After this you can send messages. For example: `node index.js m Hello World`.<br><br>
_Windows OS(PowerShell)_<br>
You can set .env variables and start app like this: `$env:TELEGRAM_API_TOKEN="..."; $env:TELEGRAM_CHAT_ID ="...";`<br>
 `node index.js m Hello World`<br><br>
 _Linux/Mac OS(Unix-like OS)_<br>
Create .env file and prepopulate it with variables.This line should work to set .env variables and start app `env $(cat .env | xargs) node index.js m Hello World`<br>

## Task Description

 In this task we will create a simple telegram bot that can act as notes or notepad when you need to save something urgently from the console.<br><br>

**Tools and libraries you can use**<br>

* commander - this library helps you organize your app with commands and command-specific options.
* node-telegram-bot-api - just a wrapper on top of Telegram Bot API.<br>

**Commands**<br>
Here is the list of commands that your app should support<br>

**Send a message**<br>
`$ node app.js send-message 'Your message'`<br>
The result of executing this command is the appearance of your message in your Telegram bot. After it has been executed, the CLI terminates the process itself to allow you to enter the next command.<br><br>

**Send a photo**<br>

`$ node app.js send-photo '/path/to/the/photo.png'`<br>
The result of this command is a photo sent to the Telegram bot from your PC. After it has been executed, the CLI terminates the process itself to allow you to enter the next command.<br><br>

**NOTE:** Take care of your users beforehand - make sure you added descriptions about the commands and their options. The user should be able to see it using help command or --help argument.
