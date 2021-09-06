const mongoose = require("mongoose"); //requiere mongoos
const url = process.env.MONGODB_URI;

mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then((db) => console.log("bd conectada"))
  .catch((err) => console.log("es un error", err));
