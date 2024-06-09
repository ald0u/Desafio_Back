const jsonwebtoken = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

const sign = (payload) => jsonwebtoken.sign(payload, JWT_SECRET, { expiresIn: '1d' });


const verify = (token) => jsonwebtoken.verify(token, JWT_SECRET);


module.exports = { sign, verify }