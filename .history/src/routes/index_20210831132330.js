const { Router } = require("express"); //optiene el metodo rutas , toma la ruta para poder definir en el server que ruta tomara
const router = Router(); // lo almasena y exporta
const procesarData = require("../claudubary/procesandoData");
const path = require("path");

const image = require("../models/image");

// router.get('/', (req, res) => {
//   res.render('images');
// });
// router.get("/", (req, res) => {
//   const imgs = await image.find();
//   console.log(imgs)
//   res.render("imagen",{imgs});
// }); //cuando visite la principal responde con la rubta 'hello'

router.get("/", async (req, res) => {
  // const m = {
  //   _id,
  //   title,
  //   description,
  //   imageURL ,public_id ,
  // } = await images.find();
  // const b= m.map(a =>( a.imageURL));

  const images = await image.find();
  console.log(images);

  const test = [
    {nombre: "ari"},
    {nombre: "marcos"},
  ]

  await res.render("images.hbs", { images:test }); // renderiza y setea la pagina con lo que se le indique
});
router.get("/a", async (req, res) => {
  const images = (
    { _id,
      title,
      description,
      imageURL,
      public_id
    } =   await image.find());
  // console.log(images);
  res.render("imagen_form.hbs", { images });
});

router.post("/a", async (req, res) => {
  const data = req.body;
  const file = req.file;
  await procesarData(data, file);

  res.send("enviado");
});

//toma los datos por post
module.exports = router;

// const { unlink } = require('fs-extra');
// const router = Router();

// // Models

// router.get('/upload', (req, res) => {
//     res.render('upload');
// });
