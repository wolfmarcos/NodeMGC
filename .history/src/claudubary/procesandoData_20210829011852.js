const cloudinary  = require ('cloudinary');
 
cloudinary.config({
  cloud_name:'wolfmarcos',
  api_key:'296315751869193',
  api_secret:'pHtueFQrfOnJ7puocu_iWy6C01o',

})


const procesarData = async (data , file) => {
  const {title, description, precio, categoria} = data;
  console.log(file.path);
  const datos = await cloudinary.v2.uploader.upload(file.path);
  console.log({title, description, precio, categoria},datas);
 
  //new Image(file.path);
}

module.exports = procesarData;