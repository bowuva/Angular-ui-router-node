/**
 * Created by BowUva on 2/4/2017.
 */
var express = require('express');
var router = express.Router();
router.use('/',require('./tvRouter'));
router.use('/',require('./phoneRouter'));
module.exports=router;