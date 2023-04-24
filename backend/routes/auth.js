const express = require('express');
const RegisterUser = require('../controllers/authController');
const Login = require('../controllers/authController');

const router = express.Router();

router.post('/register', RegisterUser);
router.post('/login',Login);

module.exports = router;
