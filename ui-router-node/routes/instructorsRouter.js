/**
 * Created by BowUva on 2/3/2017.
 */
/**
 * Created by kumar_000 on 1/30/2017.
 */
var express= require('express');
var router= express.Router();
var InstructorsModel = require('../models/instructorsModel');


router.get('/instructors', function(req,res,next){
    InstructorsModel.find({},function(err,instructorsdata){
        if (err) {
            console.log("error occured "+ err);
            res.send(err);
        }
        else{
            res.json(instructorsdata);
        }

    });


});
module.exports=router;
