const express = require('express');
const {UpdateUser, DeleteUser , GetUser ,GetUsers} = require('../controllers/userController');

const router = express.Router();
// make a dropdown 


router.post('/update',UpdateUser);

router.delete('/delete',DeleteUser);

router.get('/:id',GetUser);

router.get('',GetUsers);



module.exports = router;