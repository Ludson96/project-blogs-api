const { User } = require('../models');
const { createToken, verifyToken } = require('../auth/jwtFunctions');

const loginUser = async ({ email, password }) => {
  const user = await User.findOne({ where: { email, password } });
  if (!user) return { user: null, token: null };
  const { password: _password, ...userWithoutPassword } = user.dataValues;
  const token = createToken(userWithoutPassword);
  return { user, token };
};

const createUser = async ({ displayName, email, password }) => {
  const result = await User.findOne({ where: { email } });
  if (result) return { user: null, token: null };
  const newUser = await User.create({ displayName, email, password });
  const { password: _password, ...userWithoutPassword } = newUser.dataValues;
  const token = createToken(userWithoutPassword);
  return { user: userWithoutPassword, token };
};

const getAllUsers = async () => User.findAll({ attributes: { exclude: 'password' } });

const getUserById = async (id) => {
  const user = await User.findOne({ where: { id }, attributes: { exclude: 'password' } });
  if (!user) return null;
  return user;
};

const deleteUser = async (authorization) => {
  const { data: { id } } = verifyToken(authorization);
  const user = await User.destroy(
    { where: { id } },
    );
  return user;
};

module.exports = {
  loginUser,
  createUser,
  getAllUsers,
  getUserById,
  deleteUser,
};