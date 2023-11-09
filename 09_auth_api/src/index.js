const app = require('./app.js').app
const PORT = process.env.PORT || 3000;


app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
});