const { Router } = require('express');//optiene el metodo rutas , toma la ruta para poder definir en el server que ruta tomara
//const path = require('path');
 const router= Router();// lo almasena y exporta
 router.get('/',(req,res)=>{
    res.render('image_form')
    });//cuando visite la principal responde con la rubta 'hello'


 router.get('/a/add',(req,res)=>{
    res.render('image_form')
   });

   module.exports = router;

// const { unlink } = require('fs-extra');
// const router = Router();

// // Models
// const Image = require('../models/Image');

// router.get('/', async (req, res) => {
//     const images = await Image.find();
//     res.render('index', { images });
// });

// router.get('/upload', (req, res) => {
//     res.render('upload');
// });