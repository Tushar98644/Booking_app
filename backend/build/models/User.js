"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;
var mongoose_1 = require("mongoose");
var mongoose_2 = __importDefault(require("mongoose"));
var UserSchema = new mongoose_1.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
}, {
    timestamps: true
});
// module.exports = mongoose.model('User',UserSchema);
exports.default = mongoose_2.default.model('User', UserSchema);
