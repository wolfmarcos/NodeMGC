const Image = require ('../models/image');
const clau = require ('cloudinary');



const procesarData = async (data , file) => {
  clau.config({
    cloud_name:'wolfmarcos',
    api_key:'296315751869193',
    api_secret:'pHtueFQrfOnJ7puocu_iWy6C01o',
    
    })
  const {title, description, precio, categoria} = data;
  console.log(file.path);
  await cloudinary.v2.uploader.upload(file.path);
  console.log({title, description, precio, categoria});
}

module.exports = procesarData;