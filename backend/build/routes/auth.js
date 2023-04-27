"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const express = require('express');
var express_1 = __importDefault(require("express"));
// import Register from '../controllers/authController.js';
// import Login from '../controllers/authController.js';
var authController_js_1 = require("../controllers/authController.js");
// const {RegisterUser,Login} = require('../controllers/authController');
var router = express_1.default.Router();
router.post('/register', authController_js_1.RegisterUser);
router.post('/login', authController_js_1.Login);
// module.exports = router;
exports.default = router;
