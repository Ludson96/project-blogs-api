const UserService = require('../services/user.service');

const loginUser = async (req, res) => {
  const login = req.body;
  const { user, token } = await UserService.loginUser(login);
  if (user) return res.status(200).json({ token });
  return res.status(400).json({ message: 'Invalid fields' });
};

module.exports = {
  loginUser,
};