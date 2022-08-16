const router = require("express").Router();
const User = require("../models/user.model");
const access = require("../middleware/access");

router.post("/update", access, async (req, res) => {
    try {
        const body = req.body;
        const email = body.email;
        await User.findOneAndUpdate({ email }, { ...body });
        const users = await User.find();
        return res.status(200).json({ message: 'ok' });
    } catch (err) {
        console.log(err);
        return res.status(500).json(err)
    }
});

module.exports = router; 