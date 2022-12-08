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

const getBlogPostById = async (req, res) => {
  try {
    const { id } = req.params;
    const blogPost = await blogPostService.getBlogPostById(id);
    if (!blogPost) return res.status(404).json({ message: 'Post does not exist' });
    return res.status(200).json(blogPost);
  } catch (erro) {
    return res.status(500).json({
      message: 'Não foi possivel buscar o post com id especifico',
      erro: erro.message,
    });
  }
};

module.exports = {
  getAllBlogPost,
  getBlogPostById,
};