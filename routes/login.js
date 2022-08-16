const router = require("express").Router();
const bcrypt = require('bcryptjs')

const jwtService = require('../jwt')
const User = require("../models/user.model");

router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!(email && password)) {
            res.status(400).send("All input is required");
        }
        const user = await User.findOne({ email });

        if (user && (await bcrypt.compare(password, user.password))) {
            const payload = { user_id: user._id, email }
            user.token = jwtService.sign(payload);

            return res.status(200).json(user);
        }
        return res.status(400).send("Invalid Credentials");
    } catch (err) {
        console.log(err);
    }
});
module.exports = router;