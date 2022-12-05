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

const verifyToken = (authorization) => {
  try {
    const payload = jwt.verify(authorization, secret);
    return payload;
  } catch (erro) {
    return { isError: true, erro };
  }
};

module.exports = {
  createToken,
  createTokenWithoutPassword,
  verifyToken,
};
