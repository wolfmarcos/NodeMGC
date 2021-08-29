const{Shema, model}=require('mongodb');

const phot = new Shema({
title:String,
description:String,
imgurl:String,
public_id:String

});
module.exports = model('foto',photo);