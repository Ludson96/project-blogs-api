const { User } = require('../models');
const { createToken, createTokenWithoutPassword } = require('../auth/jwtFunctions');

const loginUser = async ({ email, password }) => {
  const user = await User.findOne({ where: { email, password } });
  const token = createToken(password);
  return { user, token };
};

const createUser = async ({ displayName, email, password }) => {
  const result = await User.findOne({ where: { email } });
  if (result) return { user: null, token: null };
  const newUser = await User.create({ displayName, email, password });
  const { password: _password, ...userWithoutPassword } = newUser.dataValues;
  const token = createTokenWithoutPassword(userWithoutPassword);
  return { user: userWithoutPassword, token };
};

module.exports = {
  loginUser,
  createUser,
};