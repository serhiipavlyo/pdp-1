const router = require("express").Router();
const User = require("../models/user.model");
const jwtService = require('../jwt')
const bcrypt = require('bcryptjs')
router.post('/register', async (req, res) => {
    try {
        const { first_name, last_name, email, password } = req.body;

        if (!(email && password && first_name && last_name)) {
            return res.status(400).send("All input is required");
        }

        const oldUser = await User.findOne({ email });

        if (oldUser) {
            return res.status(409).send("User Already Exist. Please Login");
        }

        encryptedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            first_name,
            last_name,
            email: email.toLowerCase(),
            password: encryptedPassword,
        });
        const payload = { user_id: user._id, email };
        user.token = jwtService.sign(payload);;

        return res.status(201).json(user);
    } catch (err) {
        console.log(err);
    }
})

module.exports = router;