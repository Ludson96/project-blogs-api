const UserService = require('../services/user.service');

const loginUser = async (req, res) => {
  const login = req.body;
  const { user, token } = await UserService.loginUser(login);
  if (user) return res.status(200).json({ token });
  return res.status(400).json({ message: 'Invalid fields' });
};

const createUser = async (req, res) => {
  try {
    const newUser = req.body;
    const { user, token } = await UserService.createUser(newUser);
    if (!user) res.status(409).json({ message: 'User already registered' });
    return res.status(201).json({ token });
  } catch (erro) {
    res.status(500).json({
      message: 'Erro ao salvar o usuário no banco',
      errpr: erro.message,
    });
  }
};

module.exports = {
  loginUser,
  createUser,
};