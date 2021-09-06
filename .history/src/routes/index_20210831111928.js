const { Router } = require("express"); //optiene el metodo rutas , toma la ruta para poder definir en el server que ruta tomara
const router = Router(); // lo almasena y exporta
const procesarData = require("../claudubary/procesandoData");
const path = require('path');

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
  // const m = { 
  //   _id,
  //   title,
  //   description,
  //   imageURL ,public_id ,
    
  // } = await images.find();
  // const b= m.map(a =>( a.imageURL));
  //console.log({image.imageURL});
 const b= await images.find();
  // console.log({b});
 await res.render("images",{ b}); // renderiza y setea la pagina con lo que se le indique
});
router.get("/a", async(req, res) => {
  const image = { 
    _id,
    title,
    description,
    imageURL ,
    public_id ,   
  } = await images.find();

  // console.log({_id});
  res.render("imagen_form.hbs",{images});
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



// router.get('/upload', (req, res) => {
//     res.render('upload');
// });
