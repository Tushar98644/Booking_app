const user = require('../models/User');
const bcrypt = require('bcryptjs');

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
    }
    catch (err) {
        res.status(500).json(err);
        console.log(err);
    }
}

const Login = async (req, res) => {
    try {
        const user = await user.findOne({ username: req.body.username });
        !user && res.status(400).json("Wrong credentials!");

        const validated = await bcrypt.compare(req.body.password, user.password);
        !validated && res.status(400).json("Wrong credentials!");

        const { password, ...others } = user._doc;
        res.status(200).json(others);
    } catch (err) {
        res.status(500).json(err);
    }
};

module.exports =  RegisterUser , Login;
