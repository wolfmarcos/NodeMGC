const { Router } = require("express"); //optiene el metodo rutas , toma la ruta para poder definir en el server que ruta tomara
const procesarData = require("../claudubary/procesandoData");
//const path = require('path');
const router = Router(); // lo almasena y exporta
const Image = require("../models/image");
router.get("/", (req, res) => {
  res.render("images.hbs");
}); //cuando visite la principal responde con la rubta 'hello'

router.get("/a", (req, res) => {
  const images = await Image.find();
  res.render("imagen_form.hbs",{});
}); // renderiza y setea la pagina con lo que se le indique

router.post("/a", async (req, res) => {
  const data = req.body;
  const file = req.file;
  await procesarData(data, file); //entrega  a la funcion caludinary
  
  res.send("enviado");
});

//toma los datos por post
module.exports = router;

// const { unlink } = require('fs-extra');
// const router = Router();

// // Models

router.get('/', async (req, res) => {
    const images = await Image.find();
    res.render('index', { images });
});

// router.get('/upload', (req, res) => {
//     res.render('upload');
// });
