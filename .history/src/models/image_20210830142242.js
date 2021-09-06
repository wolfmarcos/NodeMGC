const {Schema, model } = require('mongoose');


const image = new Schema({
    title: String,
    description: String,
    categoria: String,
    precio: String,
    imageURL: String,
    urlVenta: String,
    public_id: String,
    fe
});

module.exports = model('image', image);
