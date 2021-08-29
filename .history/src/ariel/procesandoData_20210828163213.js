const Image = require ('../models/image');
require (ca)
const procesarData = (data) => {
  const {title, description, precio, categoria} = data;
  console.log({title, description, precio, categoria});
  new Image({title, description, precio, categoria});
}

module.exports = procesarData