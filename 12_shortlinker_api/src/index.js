const mongoose= require("mongoose");
const app = require('./app').app
const PORT = process.env.PORT || 3000;
const MONGODB_URL = process.env.MONGODB_URL;

let server;
mongoose.connect(MONGODB_URL).then(() => {
  console.log('Connected to MongoDB');
  server = app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}`);
  });
});
