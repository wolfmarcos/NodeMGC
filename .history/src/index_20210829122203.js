require("dotenv").config();

const app = require("./app");

app.listen(app.get("port"), () => {
  console.log("server on port", app.get("port"));
}); // conecta al server -app.get('variable')-responde con el servidor conectado
