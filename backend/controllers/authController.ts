// const user = require('../models/User');
// const bcrypt = require('bcryptjs');
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import user from '../models/User';

const RegisterUser = async (req, res) => {
    try {
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(req.body.password, salt);

        const newUser = new user({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword,
        }
        );
        await newUser.save();
        res.status(200).json({ message: 'User created successfully' });
        console.log('User created successfully');
        console.log(newUser);
    }
    catch (err) {
        res.status(500).json(err);
        console.log(err);
    }
}

const Login = async (req, res) => {

    console.log(req.body);

    try {
        const User = await user.findOne({ username: req.body.username });
        !User && res.status(400).json("Wrong credentials!");

        const validated = await bcrypt.compare(req.body.password, User?.password);
        !validated && res.status(400).json("Wrong credentials!");

        const token = jwt.sign({ id: User?._id, isAdmin: User?.isAdmin }, process.env.SECRET_KEY, { expiresIn: "5d" });

        // const { password, isAdmin, ...others } = user._doc;
        res.cookie("access_token",token,{
            httpOnly:true,
        }).status(200).json(User);
        console.log('User logged in successfully');
        console.log(User);
    } catch (err) {
        res.status(500).json(err);
        console.log(err);
    }
};

// export default { RegisterUser, Login };
export { RegisterUser, Login };
