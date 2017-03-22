/**
 * Created by BowUva on 2/4/2017.
 */
var mongoose=require('mongoose');
Schema=mongoose.Schema;

mongoose.models={};
mongoose.modelSchemas={};
var phoneSchema=new mongoose.Schema({
    BrandName:{type:String, required:true},
    Model:{type:String},
    Color:{type:String},
    Price:{type:String}
});

var PhoneModel=mongoose.model('angular',phoneSchema,'phone');
module.exports=PhoneModel;