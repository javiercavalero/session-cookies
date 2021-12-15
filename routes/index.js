var express = require('express');
var router = express.Router();
const {index,welcome,logout,destroy}= require('../controllers/indexController');

const formValidator= require('../validations/formValidator')


router.get('/',index);
router.post('/',formValidator,welcome);
router.get('/logout',logout);
router.get('/destroy',destroy);

module.exports = router;
