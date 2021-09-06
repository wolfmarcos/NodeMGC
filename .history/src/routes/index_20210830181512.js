const { Router } = require("express"); //optiene el metodo rutas , toma la ruta para poder definir en el server que ruta tomara
const procesarData = require("../claudubary/procesandoData");
//const path = require('path');
const router = Router(); // lo almasena y exporta
const images = require("../models/image");

// router.get('/', (req, res) => {

//   res.render('images');
// });
// router.get("/", (req, res) => {
//   const imgs = await image.find();
//   console.log(imgs)
//   res.render("imagen",{imgs});
// }); //cuando visite la principal responde con la rubta 'hello'

router.get("/", async(req, res) => {
  const title = await images.find();
  console.log([]);
 res.render("images");
}); // renderiza y setea la pagina con lo que se le indique

router.post("/a", async (req, res) => {
  const data = req.body;
  const file = req.file;
  await procesarData(data, file); //entrega  a la funcion caludinary
  
  res.send("enviado");
});


router.get("/b", async(req, res) => {
  const imgs = await image.find();
  console.log(imgs)
  res.render("imagen_formb.hbs",{imgs});
}); // renderiza y setea la pagina con lo que se le indique

//toma los datos por post
module.exports = router;

// const { unlink } = require('fs-extra');
// const router = Router();

// // Models



// router.get('/upload', (req, res) => {
//     res.render('upload');
// });
