const Image = require ('../models/image');
const clau = require ('cloudinary');

clau.config({
cloud_name:'wolfmarcos',
api_key:'296315751869193',
api_secret:'pHtueFQrfOnJ7puocu_iWy6C01o',

})

const procesarData = (data , file) => {
  const {title, description, precio, categoria} = data,
  console.log(file.path),
  console.log({title, description, precio, categoria}),
 new Image({}),
}

module.exports = procesarData;