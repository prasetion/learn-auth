var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// controller
const auth = require('../controllers/authController')

// register page
router.get('/register', (req,res) => res.render('register'))
router.post('/register', auth.register)

module.exports = router;
