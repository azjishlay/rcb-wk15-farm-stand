var express = require('express');
var router = express.Router();
var Database = require('../models/farm.js');

// ROUTES

router.get('/', function(req,res) {

    Database.findAll({

    }).then(function(data){
        console.log("Find all!");
        res.render('index',{data});
    });
});

router.get('/search', function(req,res) {

    if(req.params.items){

        Database.findAll({
            where: {
                item: req.params.items
            }
        }).then(function(result){
            res.json(result);
        })
    }

    else{

        Database.findAll({

        }).then(function(result){
            res.json(result);
        })
    }
});

router.get('/add-new', function(req,res) {
    console.log("Add new!");
    res.redirect('/');
});

router.post('/add-new', function(req,res){

    var input_data = req.body;
    console.log(input_data);
    
    var item = Database.build({
        item: input_data.item,
        category: input_data.category,
        price: input_data.price,
        quantity: input_data.quantity,
    });

    item.save().then(function(){
        res.redirect('/');
    });

})

module.exports = router;