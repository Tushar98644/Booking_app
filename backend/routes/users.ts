// const express = require('express');
// const {UpdateUser, DeleteUser , GetUser ,GetUsers} = require('../controllers/userController');

// const router = express.Router();

import express from 'express';
import { UpdateUser, DeleteUser, GetUser, GetUsers} from '../controllers/userController';

const router = express.Router();

router.post('/update',UpdateUser);

router.delete('/delete',DeleteUser);

router.get('/:id',GetUser);

router.get('',GetUsers);



// module.exports = router;
export default router;