/**
 * Created by BowUva on 2/4/2017.
 */
var express=require('express');
var router=express.Router();
var PhoneModel=require('../models/phoneModel');

router.get('/phone',function(req,res,next){
    PhoneModel.find({},function(err,phonedata){
        if(err){
            console.log("ErrOccured"+err);
            res.send(err);
            }
        else {
            res.json(phonedata);
        }
    });
});
module.exports=router;