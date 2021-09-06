const { Router } = require("express"); //optiene el metodo rutas , toma la ruta para poder definir en el server que ruta tomara
const procesarData = require("../claudubary/procesandoData");
const path = require('path');
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
  const m = ({ 
    _id,
    title,
    description,
    imageURL ,public_id ,
    
  } = await images.find());
  //console.log({image.imageURL});
  console.log({m})
 await res.render("images",{ m});
}); // renderiza y setea la pagina con lo que se le indique

router.get("/a", async(req, res) => {
  const  { 
    _id,
    title,
    description,
    imageURL ,
    public_id ,   
  } = await images.find();

  console.log({_id});
  res.render("imagen_form.hbs",router.get("/a", async(req, res) => {
    const  { 
      _id,
      title,
      description,
      imageURL ,
      public_id ,   
    } = await images.find());
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
