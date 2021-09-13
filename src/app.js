const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");
const morgan = require("morgan");
const methodOverride = require("method-override");
const flash = require("connect-flash");
const session = require("express-session");

const multer = require("multer");
//const validator = require('express-validator');
const passport=require("passport");
// const MySQLStore = require('express-mysql-session')(session);const bodyParser = require('body-parser');
// Inicializando

require("./database");
require('passport-local') 
require("./config/passport");
//app.set("port", config.PORT);
//require('./config/passport')(passport);
//require("./libs/createUser");
// createAdminUser();
const app = express();
// Seteos
app.set("port", process.env.PORT || 4000);
//app.set('port', 3000);//indica el puerto
app.set("views", path.join(__dirname, "views"));
app.engine(
  ".hbs",
  exphbs({
    defaultLayout: "main",
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
    extname: ".hbs",
    //helpers: require('./lib/handlebars')
  })
);
app.set("view engine", ".hbs");
//Middlewares
app.use(morgan("dev")); //mostrar mensajes cortos por consola
app.use(express.json()); //json
// static files
app.use(express.static(path.join(__dirname, "public")));

const storage = multer.diskStorage({
  destination: path.join(__dirname, "  /uploads"),
  filename: (req, file, cb) => {
    cb(null, new Date().getTime() + path.extname(file.originalname));
  },
});
app.use(multer({ storage }).single("image"));
app.use(require("./routes"));
// identifica si es una umagen la que se sube al server -multer cual es el campo que analiza
app.use(morgan("dev"));

app.use(express.urlencoded({ extended: false })); //entiende datos desde un formulario//extended:false para que solo entienda txto

app.use(methodOverride("_method"));
app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
    store: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
// Global Variables

// Global Variables
app.use((req, res, next) => {
  res.locals.success_msg = req.flash("success_msg");
  res.locals.error_msg = req.flash("error_msg");
  res.locals.error = req.flash("error");
  res.locals.user = req.user || null;
  next();
});


// // Routes

app.use(require("./routes/index.js")); // entrega la ruta de la pagina web
//app.use(require('./routes/authentication'));
// //app.use('/links', require('./routes/links'));

app.use(require("./routes/users.routes"));



app.use((req, res) => {
  res.render("404");
});
module.exports = app; // al exportar app puede utlizar  toda la vicion del app ya que el mismo app es express
// app.use(require('./routes'));
// // app.use(session({
// //     secret: 'faztmysqlnodemysql',
// //     resave: false,
// //     saveUninitialized: false,
// //     store: new MySQLStore(database)
// //   }));
// /*
// app.use(passport.initialize());
// app.use(passport.session());
// app.use(session({ cookie: { maxAge: 60000 },
//   secret: 'woot',
//   resave: false,
//   saveUninitialized: false}));

// // Global variables
// app.use((req, res, next) => {
//     app.locals.message = req.flash('message');
//     app.locals.success = req.flash('success');
//     app.locals.user = req.user;
//     next();
//   });
// */
// // app.use(bodyParser.urlencoded({extended: false}));
// // app.use(bodyParser.json());//interpreta estenciones Json

// //app.use(multer().single('image'))//identifica si es una imagen que se envia al server antraves de 'image' para asi colocarla
// 