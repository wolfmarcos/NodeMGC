const Image = require ('../models/image');
const clau = require ('cloudinary');
clau.config({
cloud_name:
api_key:


})

const procesarData = (data) => {
  const {title, description, precio, categoria} = data;
  console.log({title, description, precio, categoria});
  new Image({title, description, precio, categoria});
}

module.exports = procesarData