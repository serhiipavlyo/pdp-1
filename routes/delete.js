const router = require("express").Router();
const User = require("../models/user.model");

router.delete("/", async (req, res) => {
    try {
        const body = req.body;
        const email = body.email;
        await User.findOneAndRemove({ email: email });
        const users = await User.find();
        res.status(200).json(users);
    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
});

module.exports = router; 