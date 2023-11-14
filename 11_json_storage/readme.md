# 11. JSON STORAGE
**How to run application:**<br>
_Node js version 20^_<br>
Create .env file and prepopulate it with variables. After this simply run `npm run start`.<br><br>
_Windows OS(PowerShell)_<br>
You can set .env variables and start app like this: `$env:PORT="...";`<br>
 `node index.js`<br><br>
 _Linux/Mac OS(Unix-like OS)_<br>
Create .env file and prepopulate it with variables.This line should work to set .env variables and start app `env $(cat .env | xargs) node index.js`<br>

## Documentation
| HTTP Verbs | Endpoints | Action | Expect | Return codes | Request Example
| --- | --- | --- | --- | --- | --- |
| PUT | /:path | To upload a json file with a file name that is given throught _route parameter_ `path` | _route parameter_ `path` _headers_ `content-type:application/json` _body_ `{ }`|  201/400/415/500 | _route parameter_ `hello` _headers_ `content-type:application/json` _body_ `{"hello":"world" }`
| GET | /:path | To get data from json file with name _route parameter_ `path` | _route parameter_ `path` |  200/400/404/500 |  _route parameter_ `hello`

<br>

## Task Description

In this task you need to create a full clone of jsonbase.com<br>


**Requirements**<br>
 Your app should consist of two endpoints <br>
 * `PUT /<json_path>` - Allows a user to store the JSON document <br>
 * `GET /<json_path>` - Allows a user to access previously stored JSON <br>
You can use either express or Koa framework.<br>


