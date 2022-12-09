const Sequelize = require('sequelize');
const { BlogPost, User, Category } = require('../models');

const getAllBlogPost = async () => BlogPost.findAll({
  include: [{
     model: User,
     as: 'user',
     attributes: { exclude: ['password'] }, 
    },
    {
      model: Category,
      as: 'categories',
      through: { attributes: [] },
    }],
});

const getBlogPostById = async (id) => BlogPost.findOne({
  where: { id },
  include: [{
    model: User,
    as: 'user',
    attributes: { exclude: ['password'] },
  },
  {
    model: Category,
    as: 'categories',
    through: { attributes: [] },
  }], 
});

const updateBlogPost = async (id, { title, content }, req) => {
  const blogPost = await getBlogPostById(id);
  console.log('Eu sou o blogPost: ', blogPost.userId);
  const idUser = req.user.id; 
  if (blogPost.userId === idUser) {
  await BlogPost.update({ title, content }, { where: { id } });

  const blogUpdated = await getBlogPostById(id);
  return blogUpdated;
  }

  return null;
};
// retirado do stackoverflow https://pt.stackoverflow.com/questions/355872/como-utilizar-o-like-do-sql-no-sequelize
const searchBlogPost = async (q) => {
  const { Op } = Sequelize; // biblioteca de operadores
  const query = `${q}%`; // string de consulta
  const searchedPost = await BlogPost.findAll({
    where: {
      [Op.or]: [
        { title: { [Op.like]: query } },
        { content: { [Op.like]: query } },
      ],
    },
    include: [{ model: User, as: 'user', attributes: { exclude: ['password'] } },
              { model: Category, as: 'categories', through: { attributes: [] } }], 
  });
  return searchedPost;
};

module.exports = {
  getAllBlogPost,
  getBlogPostById,
  updateBlogPost,
  searchBlogPost,
};