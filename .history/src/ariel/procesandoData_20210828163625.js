const Image = require ('../models/image');
const clau = require ('cloudinary');
clau.config({
cloud_name:wolfmarcos,
api_key:
api_secret:

})

const procesarData = (data) => {
  const {title, description, precio, categoria} = data;
  console.log({title, description, precio, categoria});
  new Image({title, description, precio, categoria});
}

module.exports = procesarData