const {Schema, model } = require('mongoose');


const image2 = new Schema({
    title: String,
    description: String,
    categoria: String,
    cfecha: String,
    precio: String,
    imageURL: String,
    urlVenta: String,
    public_id: String,
    
});



module.exports = model('image2', image2);
