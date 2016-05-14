var express = require('express');
var router = express.Router();
var db = require('../models/farm.js');

// ROUTES

router.get('/', function(req,res) {

    db.findAll({

    }).then(function(data){
        console.log("Find all!");
        res.render('index',{data});
    });
});

router.get('/?search:', function(req,res) {

    if(req.params.items){

        db.findAll({
            where: {
                item: req.params.items
            }
        }).then(function(result){
            res.json(result);
        })
    }

    else{

        db.findAll({

        }).then(function(result){
            res.json(result);
        })
    }
});

router.get('/add-new', function(req,res) {
    console.log('Add new!');
    res.render('add-new');
});

router.post('/add-new', function(req, res){

    var item = req.body;

    db.create({
        item: item.item,
        category: item.category,
        price: item.price,
        quantity: item.quantity,
    });

})

module.exports = router;