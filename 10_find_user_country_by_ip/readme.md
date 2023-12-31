# 10. FIND USER COUNTRY BY IP
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
| POST | /detect/ip | To detect user's ip(v4 only) that is sent throught _body_  | _body_ `{"ip":string }`|  200/400/404/500 |  _body_ `{"ip":"89.28.176.5" }`


<br>

## Task Description

This task is based on a real case study. At one time, we were doing a service where we had to determine from what point a user was knocking on the endpoint, and then offer him the appropriate logic for the application. A trivial example: a Frenchman wants to see prices in euros instead of dollars, and an American doesn't need Japanese yen.<br>


**Requirements**<br>

So, you have a CSV table [table] https://www.dropbox.com/s/0xbas2hwxac06e9/IP2LOCATION-LITE-DB1.CSV?dl=0 where you will find a long list of rows with IP ranges (from and to - 1st and 2nd columns respectively), as well as the country to which these IPs are issued.<br>
Your task is to write a web application in Express, allocating an endpoint by which a server-hosted algorithm can detect where the user is coming from and return both the IP address value and the country from which the request was made.<br>

So, in total, your API should:<br>
* Detect user's IP;<br>
* Determine user's location by IP using a CSV database;<br>
* Return the user's address range (in a human-readable form) and country from the csv table.<br>

** How to verify your solution **<br>

We have prepared for you a list of IP addresses that are allocated to specific countries. If you've done everything correctly, your script should successfully return a response (or output to the console) indicating the correct country when you send the IP in the body of the request:<br>


```
Chile — 45.232.208.143
Armenia — 185.182.120.34
Mexico — 45.177.176.23
Turkey — 5.44.80.51
Norway — 91.149.48.22
Spain — 83.229.33.3
Cyprus — 203.24.108.65
UK — 23.43.23.15
Ireland — 89.28.176.5
Romania — 77.83.248.211
```
<br>
To check, you can also install Ngrok and play with Proxy by knocking on an open Ngrok address.<br>
