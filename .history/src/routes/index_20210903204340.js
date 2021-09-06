const { Router } = require("express"); //optiene el metodo rutas , toma la ruta para poder definir en el server que ruta tomara
const router = Router(); // lo almasena y exporta
const procesarData = require("../claudubary/procesandoData");
const path = require("path");
const cloudinary = require("cloudinary");
const image = require("../models/image");


router.get("/", async (req, res) => {
  const images = await image.find().lean();
  console.log(images);

  res.render("images.hbs", { images: images });
  // const m = {
  //   _id,
  //   title,
  //   description,
  //   imageURL ,public_id ,
  // } = await images.find();
  // const b= m.map(a =>( a.imageURL));

  // const test = JSON.parse(JSON.stringify(images));   
});



// router.get('/', (req, res) => {
//   res.render('images');
// });
// router.get("/", (req, res) => {
//   const imgs = await image.find();
//   console.log(imgs)
//   res.render("imagen",{imgs});
// }); //cuando visite la principal responde con la rubta 'hello'
router.get("/a", async (req, res) => {
  const images = (
    {
      _id,
      title,
      description,
      imageURL,
      public_id
    } = await image.find().lean());
  console.log(images);
  res.render("imagen_form.hbs", { images });
});

router.get('/a/editar/:_id', async (req, res) => {
  const {_id } = req.params;
  const photo = await Photo.findById({_id}).lean();
  
  console.log(_i)
  //res.render('image_editar.hbs', photo);
});


router.get('/a/:_id/:public_id', async (req, res) => {
  const { _id, public_id } = req.params;
  // console.log(_id,public_id);
  await image.remove({ _id });
  await cloudinary.v2.uploader.destroy(public_id);
  // const {public} =  req.body.id;
  //console.log(JSON.parse(JSON.stringify(id)))
  // console.log(photo1);
  res.redirect("/a")
});



router.post("/a", async (req, res) => {
  const data = req.body;
  const file = req.file;
  await procesarData(data, file);

  res.redirect("/A");
});


// router.get('/image/delete/:_id', async (req, res) => {
//   const { _id} = req.params;
//    await image.findByIdAndDelete(photo_id);

//   const result = await cloudinary.v2.uploader.destroy(photo._id);
//   res.redirect('/image/add');
// });








//toma los datos por post
module.exports = router;

// const { unlink } = require('fs-extra');
// const router = Router();

// // Models

// router.get('/upload', (req, res) => {
//     res.render('upload');
// });
