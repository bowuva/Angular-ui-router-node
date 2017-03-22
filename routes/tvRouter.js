/**
 * Created by BowUva on 2/4/2017.
 */
var express=require('express');
var router=express.Router();
var TvModel=require('../models/tvModel');


router.get('/tv',function(req,res,next){
    TvModel.find({},function(err,tvdata){
        if(err){
            console.log("Error Occured"+err);
            res.send(err);
        }
        else{
            res.json(tvdata);
        }
    });
});
module.exports=router;