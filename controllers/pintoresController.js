let mongoose = require('mongoose');
// vamos a unirlo al modelo
let pintores = require('../models/pintores');

let pintoresController = {};

/*Listar -> Find()*/
pintoresController.list =(req, res)=>{
    pintores.find({})
        .limit(20)
        .skip(0)
        .exec((err, pintor)=>{
            if(err){
                console.log('Error: ', err)
            }
            res.render('../views/index' , {
                pintores: pintor,
                titulo: "Listado de pintores",
                autor: "Martinez Salvatierra Diego Andres",
                grupo: "4-F"
            })
        })

        
};

module.exports = pintoresController;