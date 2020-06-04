const express = require('express');
const hbs = require('hbs');
const mongoose = require('mongoose');

const puerto = process.env.PORT || 3000;


//Emplear las rutas
let pintoresRouter = require('./routes/pintor');

// Sitio web y hbs
const app = express();
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');
app.use(express.static(__dirname + '/public'));

// vamos a decirle a express la ruta a emplear
app.use('/', pintoresRouter);

/* La conexion con MongoDB*/
mongoose.Promise = global.Promise;
const cadena = 'mongodb+srv://MartinezDiego:1234567890@cluster0-ze8si.mongodb.net/tarantino?retryWrites=true&w=majority';
mongoose.connect(cadena, {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    console.log('Conexion establecida :)');
})
.catch(err=> console.log(err));

/* Arrancar el servidor web*/
app.listen(puerto, ()=>{
    console.log('Escuchando el puerto...')
})