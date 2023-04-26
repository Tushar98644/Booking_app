// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;
import { Schema } from 'mongoose';
import mongoose from 'mongoose';

const UserSchema = new Schema({
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
   },
    {
        timestamps: true
    }
);

// module.exports = mongoose.model('User',UserSchema);
export default mongoose.model('User', UserSchema);