var express = require('express');
var router = express.Router();

// controller
const auth = require('../controllers/authController');
const restrict = require('../controllers/restrict');

/* GET home page. */
router.get('/', restrict, (req,res) => {
  res.render('index', { title: 'Express' });
});

// register page
router.get('/register', (req,res) => res.render('register'))
router.post('/register', auth.register)

// login page
router.get('/login', (req,res) => res.render('login'))
router.post('/login', auth.login)

// whoami
router.get('/whoami', restrict, auth.whoami)

module.exports = router;
