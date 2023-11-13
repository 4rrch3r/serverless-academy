const express = require("express");
const routes = require('./routes/files.router');
const errorHandler = require('./middlewares/errorHandler').errorHandler;   
const app = express();

//middlewares
app.use(express.json());

//routes
app.use(`/`, routes);

// errors handler
app.use(errorHandler);

module.exports= {
    app
}
