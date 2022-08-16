const jwt = require('jsonwebtoken')

const { privateKEY, signOptions, verifyOptions, publicKEY } = require('./options');

const createJwtToken = (payload) => {
    const token = jwt.sign(payload, privateKEY, signOptions);
    console.log(token)
    return token
}

const verifyJwtToken = (token) => {
    const legit = jwt.verify(token, publicKEY, verifyOptions);
    console.log("\nJWT verification result: " + JSON.stringify(legit));
    return legit
}

const decode = (token) => jwt.decode(token, { complete: true });

module.exports = {
    sign: createJwtToken,
    verify: verifyJwtToken,
    decode
}