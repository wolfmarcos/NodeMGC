const{Schema, model}=require('mongodb');

const foto = new Schema({
title:String,
description:String,
imgurl:String,


});
module.exports = model ('po',foto);
