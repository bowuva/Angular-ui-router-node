/**
 * Created by BowUva on 2/3/2017.
 */
var mongoose=require('mongoose'),
    Schema = mongoose.Schema;

mongoose.models = {};
mongoose.modelSchemas = {};
var instructorsSchema = new mongoose.Schema({
    name:{type:String, required:true},
    address:{type:String},
    phonenumber:{type:String},
    role:{type:String}
});

var InstructorsModel = mongoose.model('classroom', instructorsSchema,'instructors' );
module.exports=InstructorsModel;