const express = require('express');
const morgan = require ('morgan');
const multer = require('multer');
const path = require('path');
const exphbs = require('express-handlebars');
//const session = require('express-session');
//const validator = require('express-validator');
//const passport = require('passport');
//const flash = require('connect-flash');
// const MySQLStore = require('express-mysql-session')(session);const bodyParser = require('body-parser');

// Inicializando
const app = express(); 
require('./database');//lebanta mongoos
//require('./lib/passport');

// Seteos
//app.set('port', process.env.PORT || 3000);
app.set('port', 3000);//indica el pueto
app.set('views', path.join(__dirname, 'views'));//path une dos directorios . seleciona donde renderiza

//motor de plantillas con su modulo hbs()
app.engine('.hbs', exphbs( {
     defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),//contiene todas las partes en comun -lo que se repite
    partialsDir: path.join(app.get('views'),'partials'),//  ''     '' y el eslaider de vistas con las imagenes
    extname: '.hbs',// la selecion de imagenes 
   // helpers: require('./lib/handlebars')
}));
app.set('view engine', '.hbs');//lebanta   el engine motor 

//Middlewares
app.use(morgan('dev'));//mostrar mensajes cortos por consola
app.use(express.json());//json



// // app.use(bodyParser.urlencoded({extended: false}));
// // app.use(bodyParser.json());//interpreta estenciones Json

// //app.use(multer().single('image'))//identifica si es una imagen que se envia al server antraves de 'image' para asi colocarla
// /*
const storage = multer.diskStorage({
    
    destination: path.join(__dirname, 'public/uploads'),//al subirla donde coloca la imagen carpeta
    filename: (req, file, cb) => {
        cb(null, new Date().getTime() + path.extname(file.originalname));//nombra la imagen segun los segundos -cb error y el nombre- filr.indica datos originales-
    }
});

app.use(multer({storage}).single('image'));// identifica si es una umagen la que se sube al server -multer cual es el campo que analiza
app.use(express.urlencoded({extended: false}));//entiende datos desde un formulario//extended:false para que solo entienda txto
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

// app.use(flash());

// // Global variables
// app.use((req, res, next) => {
//     app.locals.message = req.flash('message');
//     app.locals.success = req.flash('success');
//     app.locals.user = req.user;
//     next();
//   });
// */
// // Routes
const ruta= require('./routes/index.js');
app.use( ruta);// entrega la ruta de la pagina web
 //app.use(require('./routes/authentication'));
// //app.use('/links', require('./routes/links'));


module.exports = app;// al exportar app puede utlizar  toda la vicion del app ya que el mismo app es express