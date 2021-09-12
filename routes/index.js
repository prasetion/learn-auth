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

// login page
router.get('/login', (req,res) => res.render('login'))
router.post('/login', auth.login)

module.exports = router;
