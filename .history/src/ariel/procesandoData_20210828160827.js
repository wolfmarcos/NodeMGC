const Image = require ('../models/image');
const procesarData = (data) => {
  const {title, description, precio, categoria} = data;
  console.log({title, description, precio, categoria});
  new image({title, description, precio, categoria});
}

module.exports = procesarData