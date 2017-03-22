/**
 * Created by BowUva on 2/3/2017.
 */
/**
 * Created by kumar_000 on 1/28/2017.
 */
var express = require('express');
var router = express.Router();
router.use('/',require('./studentsRouter'));
router.use('/',require('./instructorsRouter'));
module.exports=router;