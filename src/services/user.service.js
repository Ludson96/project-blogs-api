const { User } = require('../models');
const { createToken } = require('../auth/validateJWT');

const loginUser = async ({ email, password }) => {
  const user = await User.findOne({ where: { email, password } });
  const token = createToken(password);
  return { user, token };
};

module.exports = {
  loginUser,
};