


import express from 'express';
import mongoose from 'mongoose';
import authRoute from '../routes/auth';
import hotelRoute from '../routes/hotels';
import cookieParser from 'cookie-parser';
import userRoute from '../routes/users';
import roomRoute from '../routes/rooms';

const app = express();

// import config from "config";
import * as dotenv from "dotenv";
dotenv.config();

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('DB connected'))
    .catch(err => console.log(err));

app.use(cookieParser());
app.use(express.json())

app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);
app.use('/api/hotels', hotelRoute);
app.use('/api/rooms', roomRoute);
app.use('/', (req, res) => {
    res.send('Hello World');
});

app.listen(process.env.PORT || 8080, () => {
    console.log('Server is running on port', process.env.PORT);
}
);

export default app;
