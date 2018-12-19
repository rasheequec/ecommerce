const express = require('express');
const router = express.Router();
const { Product } = require('../models/product');

router.get('/',function(req, res){
    Product.find().then(function(products){
        res.send(products);
    }).catch(function(err){
        res.send(err);
    })
});

router.post('/', function(req,res){
    let body = req.body;
    let c = new Product(body);
    c.save().then(function(product){
        res.send(product);
    }).catch(function(err){
        res.send(err);
    })
})


router.get('/:id',function(req,res){
    let id = req.params.id;
    Product.findById(id).then(function(Product){
        res.send(Product);
    }).catch(function(err){
        res.send(err);
    })
});


router.delete('/:id',function(req,res){
    let id = req.params.id;
    Product.findByIdAndDelete(id).then(function(product){
        rs.send({ notice: 'Successfully deleted'});
    }).catch(function(err){
        releaseEvents.send(err);
    })
});

module.exports = {
    productsController: router
}


    