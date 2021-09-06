const cloudinary = require("cloudinary");
const fs =  require("fs-extra");

//import('../models/phot'); // toma la construcion de como se ingresan los datos
const image2 = require("../models/image");
cloudinary.config({
  cloud_name: CLOUDINARY_CLOUDE_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET
});
CLOUDINARY_CLOUDE_NAME=wolfmarcos
CLOUDINARY_API_KEY=296315751869193
CLOUDINARY_API_SECRET=pHtueFQrfOnJ7puocu_iWy6C01o

const procesarData = async (data, file) => {
  const m = ({ title, description, precio, categoria } = data);
  //  console.log(file.path);
  // console.log({ m });
  const datosClau = await cloudinary.v2.uploader.upload(file.path);
  console.log({ title, description, precio, categoria }, datosClau);

  const newImagen = new image2({
    title,
    description,
    imageURL: datosClau.url,
    public_id: datosClau.public_id,
    cfecha: datosClau.created_at,
  });

  console.log({ newImagen  });
  await newImagen.save();
  await fs.unlink(file.path);
};

module.exports = procesarData;
