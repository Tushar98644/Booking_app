const express = require('express');

const router = express.Router();

router.get('/room',(req,res)=>{
    res.send('Hello World');
}
);

module.exports = router;