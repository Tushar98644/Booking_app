const user = require('../models/User');

const RegisterUser = async(req, res) => {
    try {
        const newUser = new user(
            req.body
        );
        await newUser.save();
        res.status(200).json({ message: 'User created successfully' });
    }
    catch (err) {
        res.status(500).json(err);
    }
}

module.exports = RegisterUser;