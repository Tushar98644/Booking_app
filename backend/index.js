const express = require('express');
const app =  express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const authRoute = require('./routes/auth');
const hotelRoute = require('./routes/hotels');  
const cookieParser = require('cookie-parser');

dotenv.config();
    
mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log('DB connected'))
.catch(err=>console.log(err));

app.use(cookieParser)
app.use(express.json())

app.use('/api/auth',authRoute);
app.use('/api/users',require('./routes/users'));
app.use('/api/hotels',hotelRoute);
app.use('/api/rooms',require('./routes/rooms'));

app.listen(process.env.PORT,()=>{
    console.log('Server is running on port',process.env.PORT);
}   
);
