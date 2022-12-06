const { Category } = require('../models');

const createCategory = async (name) => Category.create({ name });

const getAllCategory = async () => Category.findAll();

module.exports = {
  createCategory,
  getAllCategory,
};