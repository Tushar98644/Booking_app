const express = require('express');
const app =  express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();
    
mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log('DB connected'))
.catch(err=>console.log(err));

app.listen(process.env.PORT,()=>{
    console.log('Server is running on port',process.env.PORT);
}   
);