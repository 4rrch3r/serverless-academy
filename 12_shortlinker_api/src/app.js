const express = require("express");
const cors = require("cors");
const routes = require('./routes/link.router');
const errorHandler = require('./middlewares/errorHandler').errorHandler;   

const app = express();

//middlewares
app.use(express.json());
app.use(cors());


//routes
app.use(`/`, routes);

// errors handler
app.use(errorHandler);

module.exports= {
    app
}
