const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || 'seusecretdetoken';

const jwtConfig = {
  algorithm: 'HS256',
  expiresIn: '15min',
};

const createToken = (password) => {
  const token = jwt.sign({ data: password }, secret, jwtConfig);
  return token;
};

const createTokenWithoutPassword = (userWithoutPassword) => {
  const token = jwt.sign({ data: userWithoutPassword }, secret, jwtConfig);
  return token;
};

module.exports = {
  createToken,
  createTokenWithoutPassword,
};
