// const express = require('express');
import express from 'express';
import Register from '../controllers/authController';
import Login from '../controllers/authController';
// const {RegisterUser,Login} = require('../controllers/authController');
const router = express.Router();

router.post('/register', Register);
router.post('/login',Login);

// module.exports = router;
export default router;