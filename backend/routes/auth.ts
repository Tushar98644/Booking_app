// const express = require('express');
import express from 'express';
// import Register from '../controllers/authController.js';
// import Login from '../controllers/authController.js';
import { RegisterUser, Login } from '../controllers/authController';
// const {RegisterUser,Login} = require('../controllers/authController');
const router = express.Router();

router.post('/register', RegisterUser);
router.post('/login',Login);

// module.exports = router;
export default router;