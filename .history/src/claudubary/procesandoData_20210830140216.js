const cloudinary = require("cloudinary");
//import('../models/phot'); // toma la construcion de como se ingresan los datos
const Image = require("../models/image");
cloudinary.config({
  cloud_name: "wolfmarcos",
  api_key: "296315751869193",
  api_secret: "pHtueFQrfOnJ7puocu_iWy6C01o",
});

const procesarData = async (data, file) => {
  const m = ({ title, description, precio, categoria } = data);
  console.log(file.path);
  console.log({ m });
  const datosClau = await cloudinary.v2.uploader.upload(file.path);
  console.log({ title, description, precio, categoria }, datosClau);
    
  const newImagen = new Image({
      title: datosClau.asset_id,
      public_id: datosClau.url,
      description: datosClau.created_at,
    })

    console.log(newImagen);
    ne
};

module.exports = procesarData;
