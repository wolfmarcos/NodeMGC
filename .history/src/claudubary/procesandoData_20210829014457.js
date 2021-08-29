const cloudinary  = require ('cloudinary');
 //import('../models/phot'); // toma la construcion de como se ingresan los datos
 const Image = require('../models/image');
cloudinary.config({
  cloud_name:'wolfmarcos',
  api_key:'296315751869193',
  api_secret:'pHtueFQrfOnJ7puocu_iWy6C01o',

})


const procesarData = async (data , file) => {
  const {title, description, precio, categoria} = data;
  console.log(file.path);
  const datosClau = await cloudinary.v2.uploader.upload(file.path);
  console.log({title, description, precio, categoria},datosClau);
 
  new Image({
    title:datosClau.asset_id,
    public_id: datosClau.url,
    created_at: datosClau.created_at
  });
  console.log(data)
}

module.exports = procesarData;