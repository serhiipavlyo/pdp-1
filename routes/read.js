const router = require("express").Router();
const User = require("../models/user.model");

router.get("/", async (req, res) => {
    try {
        const users = await User.find();

        res.status(200).json(users);
    } catch (err) {
        console.log(err);
    }
});

module.exports = router;