const router = require("express").Router();
const User = require("../models/user.model");

router.post("/update", async (req, res) => {
    try {
        const body = req.body;
        const email = body.email;
        await User.findOneAndUpdate({ email }, { ...body });
        const users = await User.find();
        res.status(200).json({ message: 'ok' });
    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
});

module.exports = router; 