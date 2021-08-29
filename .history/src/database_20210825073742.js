

const mongoose= require('mongoose');//requiere mongoos
 const url= 'mongodb://localhost/primerbd';
// consolo.log (process.env.mongoss);
mongoose.connect(url,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  })
  .then(db=> console.log('bd conectada'))
  .catch(err=>console.log('es un error',err));