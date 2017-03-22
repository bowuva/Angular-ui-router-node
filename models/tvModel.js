/**
 * Created by BowUva on 2/4/2017.
 */
var mongoose=require('mongoose');
Schema=mongoose.Schema;

mongoose.models={};
mongoose.modelSchemas ={};

var tvSchema=new mongoose.Schema({
    BrandName:{type:String,required:true},
    DisplayInches:{type:String},
    Resolution:{type:String},
    Feature:{type:String},
    Price:{type:String}
});

var TvModel = mongoose.model('classroom',tvSchema,'tv');
module.exports=TvModel;