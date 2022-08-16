const fs = require('fs');
const privateKEY = fs.readFileSync('./private.key', 'utf8');
const publicKEY = fs.readFileSync('./public.key', 'utf8');

const signOptions = {
  expiresIn: "12h",
  algorithm: "RS256"
};

const verifyOptions = {
  expiresIn: "12h",
  algorithm: ["RS256"]
};

module.exports = {
  signOptions,
  privateKEY,
  publicKEY,
  verifyOptions
};