const{Schema, model}=require('mongodb');

const foto = new Shema({
title:String,
description:String,
imgurl:String,
public_id:String

});
module.exports = model ('po',foto);