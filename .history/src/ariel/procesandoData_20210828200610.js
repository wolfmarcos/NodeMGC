const Image = require ('../models/image');
const clau = require ('cloudinary');



const procesarData = async (data , file) => {
  
  const {title, description, precio, categoria} = data;
  console.log(file.path);
  await cloudinary.v2.uploader.upload(file.path);
  console.log({title, description, precio, categoria});
 //new Image(file.path);
}

module.exports = procesarData;