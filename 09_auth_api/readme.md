# 9. AUTH API
**How to run application:**<br>
_Node js version 20^_<br>
Create .env file and prepopulate it with variables. After this simply run `npm run start`.<br><br>
 _Linux/Mac OS(Unix-like OS)_<br>
Create .env file and prepopulate it with variables.This line should work to set .env variables and start app `env $(cat .env | xargs) node index.js`<br>


<br>

## Task Description

At this point, we are starting to look at how to implement a variety of web applications and APIs.<br>
In this task you need to implement a simple REST API using the Express framework. The essence of the API is to register and authorize users using JWT tokens.<br>

**Requirements**<br>

* Your API must fully ****comply with the interface declared in this API [documentation] (https://auth-api-docs.learning.serverless.direct/#/) <br>
* As a database, your app should use PostgreSQL. Use raw postgres [driver] (https://www.npmjs.com/package/pg), don’t use any ORMs. <br>
* Protected endpoints must expect a valid token passed in the request headers. For example: Authorization: Bearer <access_token>. Token validation should happen in the middleware layer.<br>
* User passwords must be encrypted before storing them in the database. You can use bcrypt library to encode and verify passwords.<br>
* Access token’s TTL should be limited to 60 minutes. After 60 minutes from its creation an access token will be considered as expired. This TTL should be configurable in the environment variables.<br>
* Refresh token should be valid forever.<br>
* JWT secret should be stored in the environment variables.<br>
* Make sure that you’re validating incoming data.<br>

** Useful information **<br>

⚠️ NOTE #1: Keep in mind that the app you’ll create for this task will be used in one of the next tasks, so keep your codebase re-usable and maintainable.<br>

⚠️ NOTE #2: If you are familiar with Docker, you can run Postgres container locally. If not, just use a service like supabase to provision the database for free.<br>

You will most likely encounter some new topics and approaches during this task, so here are some links to useful information.<br>

* Official express framework website (Take a look at the getting started and guide sections)
<br>
* What is JWT and how token-based auth works (link 1 [ru] | link 2 [en])<br>
* How to encrypt and verify passwords in NodeJS using bcrypt<br>
