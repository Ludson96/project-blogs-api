const blogPostService = require('../services/blogpost.service');

const getAllBlogPost = async (_req, res) => {
  try {
    const allPosts = await blogPostService.getAllBlogPost();
    return res.status(200).json(allPosts);
  } catch (erro) {
    return res.status(500).json({
      message: 'Erro ao buscar todos os posts',
      erro: erro.message,
    });
  }
};

module.exports = {
  getAllBlogPost,
};