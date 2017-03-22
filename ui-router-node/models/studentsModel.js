/**
 * Created by BowUva on 2/3/2017.
 */
var mongoose=require('mongoose');
Schema = mongoose.Schema;

mongoose.models = {};
mongoose.modelSchemas = {};

var studentsSchema = new mongoose.Schema({
    name:{type:String, required:true},
    address:{type:String},
    phonenumber:{type:String},
    course:{type:String}
});

var StudentsModel = mongoose.model('classroom', studentsSchema,'students' );
module.exports=StudentsModel;