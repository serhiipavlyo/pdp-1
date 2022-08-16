const jwtService = require('../jwt')

const verifyEmailAccess = (req, res, next) => {
    const token =
        req.body.token || req.query.token || req.headers["x-access-token"];

    if (!token) return res.status(403).send("A token is required!");

    try {
        const decoded = jwtService.verify(token);
        req.user = decoded;
        if (decoded.email !== req.body.email) return res.status(403).send("Access denied!");
    } catch (err) {
        return res.status(401).send("Invalid Token");
    }
    return next();
};

module.exports = verifyEmailAccess;