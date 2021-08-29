const{Shema, model}=require('mongodb');
const photo=new shema({
title:String,
description:String,
imgurl:String,
public_id:String

});
module.exports = model('photo','photo');