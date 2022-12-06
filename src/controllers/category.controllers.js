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

module.exports = {
  createCategory,
};