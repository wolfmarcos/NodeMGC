const{Shema, model}=require('mongodb');

const foto = new Shema({
title:String,
description:String,
imgurl:String,
public_id:String

});
module.exports = model ('po',foto)
module.exports = model('Phot',foto);