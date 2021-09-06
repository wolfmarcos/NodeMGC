const { Router } = require("express"); //optiene el metodo rutas , toma la ruta para poder definir en el server que ruta tomara
const procesarData = require("../claudubary/procesandoData");
//const path = require('path');
const router = Router(); // lo almasena y exporta
const image = require("../models/image");


router.get("/", (req, res) => {
  const img = await image.find();
  console.log(images)
  res.render("imagen",{images});
}); //cuando visite la principal responde con la rubta 'hello'

router.get("/a", async(req, res) => {
  const images = await image.find();
  console.log(images)
  res.render("imagen_form.hbs",{images});
}); // renderiza y setea la pagina con lo que se le indique

router.get("/b", async(req, res) => {
  const images = await Image.find();
  console.log(images)
  res.render("imagen_formb.hbs",{images});
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
