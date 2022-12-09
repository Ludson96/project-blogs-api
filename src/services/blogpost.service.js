const Sequelize = require('sequelize');
const { BlogPost, User, Category, PostCategory } = require('../models');

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

const createPost = async ({ title, content, categoryIds }, req) => {
  const { rows } = await Category.findAndCountAll();
  const isIdValid = rows.every(({ dataValues: { id } }) => categoryIds.includes(id));

  if (!isIdValid) return null;

  const userId = req.user.id;
  
  const newPost = await BlogPost.create({ title, content, userId });

  const newPostCategory = await categoryIds.map((id) => 
    PostCategory.create({ postId: newPost.id, categoryId: id }));
  
    await Promise.all(newPostCategory);

  return newPost;
};

const deletePost = async (id, req) => {
  const blogPost = await getBlogPostById(id);
  const idUser = req.user.id; 
  if (blogPost.userId === idUser) {
    const postDeleted = await BlogPost.destroy(
      { where: { id } },
    );
  
    return postDeleted;
  }

  return null;
};

module.exports = {
  getAllBlogPost,
  getBlogPostById,
  updateBlogPost,
  searchBlogPost,
  createPost,
  deletePost,
};