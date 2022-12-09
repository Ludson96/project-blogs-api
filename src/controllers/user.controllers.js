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
    if (!user) return res.status(409).json({ message: 'User already registered' });
    return res.status(201).json({ token });
  } catch (erro) {
    return res.status(500).json({
      message: 'Erro ao salvar o usuário no banco',
      error: erro.message,
    });
  }
};

const getAllUsers = async (_req, res) => {
  try {
    const user = await UserService.getAllUsers();

    return res.status(200).json(user);
  } catch (erro) {
    res.status(500).json({
      message: 'Erro ao buscar usuários',
      error: erro.message,
    });
  }
};

const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await UserService.getUserById(id);
    if (!user) return res.status(404).json({ message: 'User does not exist' });
    return res.status(200).json(user);
  } catch (erro) {
    res.status(500).json({
      message: 'Erro ao buscar usuário pelo id',
      error: erro.message,
    });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { authorization } = req.headers;
    await UserService.deleteUser(authorization);
    return res.status(204).end();
  } catch (erro) {
    res.status(500).json({
      message: 'Erro ao deletar usuário',
      error: erro.message,
    });
  }
};

module.exports = {
  loginUser,
  createUser,
  getAllUsers,
  getUserById,
  deleteUser,
};