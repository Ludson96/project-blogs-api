const CategoryService = require('../services/category.service');

const createCategory = async (req, res) => {
  try {
    const { name } = req.body;
    const newCategory = await CategoryService.createCategory(name);
    return res.status(201).json(newCategory);
  } catch (erro) {
    return res.status(500).json({
      message: 'Erro, não foi possivel criar categoria',
      error: erro.message,
    });
  }
};

const getAllCategory = async (_req, res) => {
  try {
    const allCategory = await CategoryService.getAllCategory();
    return res.status(200).json(allCategory);
  } catch (erro) {
    return res.status(500).json({
      message: 'Não foi possivel listar todas as categorias',
      error: erro.message,
    });
  }
};

module.exports = {
  createCategory,
  getAllCategory,
};