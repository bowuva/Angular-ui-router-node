/**
 * Created by BowUva on 2/4/2017.
 */
var express = require ('express');
var bodyparser = require('body-parser');
var mongoose= require('mongoose');
var app= express();
app.use(express.static(__dirname));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
//mongoose.connect('mongodb://leelaparasa:sathvikparasa2005@ds031751.mlab.com:31751/classroom');
mongoose.connect('mongodb://bavani:Mukesh@ds139959.mlab.com:39959/angular');
//mongoose.connect('mongodb://leela1:Sathvik@ds031751.mlab.com:31751/classroom');
var db=mongoose.connection;
db.on('error',console.error.bind(console,'connection error'));
db.once('open',function(){
    console.log('connection is success')
});
process.on('SIGINT', function(){
    db.close(function(){
        console.log('Mongoose default connection disconnected through app termination');
        process.exit(0);
    });
});
app.use('/', require('./routes'));
app.listen(63342);
console.log('server is listening on port 63342');