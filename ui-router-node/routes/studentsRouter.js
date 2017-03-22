/**
 * Created by BowUva on 2/3/2017.
 */
/**
 * Created by kumar_000 on 1/28/2017.
 */
var express= require('express');
var router= express.Router();
var StudentsModel = require('../models/studentsModel');


router.get('/students', function(req,res,next){
    StudentsModel.find({},function(err,studentsdata){
        if (err) {
            console.log("error occured "+ err);
            res.send(err);
        }
        else{
            res.json(studentsdata);
        }

    });


});
module.exports=router;