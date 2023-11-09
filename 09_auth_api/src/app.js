const express = require("express");
const routes = require('./routes/index');
const errorHandler = require('./middlewares/errorHandler').errorHandler;   
const cookieParser = require("cookie-parser");
const app = express();

//middlewares
app.use(express.json());
app.use(cookieParser())

//routes
app.use(`/`, routes);

//postgres errors handler
app.use(errorHandler);

module.exports= {
    app
}
