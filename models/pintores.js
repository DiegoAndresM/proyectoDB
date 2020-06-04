const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let PintoresSchema = new Schema({
    name:{
        type: String,
        require: [true, 'Requerimos el nombre']
    },
    duracion:{
        type: String,
        require:[true, 'Requerimos la corriente']
    }, 
    estreno:{
        type:String
    },
    poster:{
        type: String
    }

});

module.exports = mongoose.model('pintores', PintoresSchema);