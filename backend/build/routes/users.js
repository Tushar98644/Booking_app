"use strict";
// const express = require('express');
// const {UpdateUser, DeleteUser , GetUser ,GetUsers} = require('../controllers/userController');
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const router = express.Router();
var express_1 = __importDefault(require("express"));
var userController_js_1 = require("../controllers/userController.js");
var router = express_1.default.Router();
router.post('/update', userController_js_1.UpdateUser);
router.delete('/delete', userController_js_1.DeleteUser);
router.get('/:id', userController_js_1.GetUser);
router.get('', userController_js_1.GetUsers);
// module.exports = router;
exports.default = router;
