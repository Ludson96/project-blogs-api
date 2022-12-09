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

const updateBlogPost = async (req, res) => {
  try {
    const { id } = req.params;
    const conteudo = req.body;
    const postUpdated = await blogPostService.updateBlogPost(id, conteudo, req);
    if (postUpdated) return res.status(200).json(postUpdated);  
    return res.status(401).json({ message: 'Unauthorized user' });
  } catch (erro) {
    return res.status(500).json({
      message: 'Não foi possivel atualizar o post',
      erro: erro.message,
    });
  }
};

const searchBlogPost = async (req, res) => {
  try {
    const { q } = req.query;
    const searchedPost = await blogPostService.searchBlogPost(q);
    return res.status(200).json(searchedPost);
  } catch (erro) {
    return res.status(500).json({
      message: 'Não foi possivel pesquisar pelo titulo',
      erro: erro.message,
    });
  }
};

const createPost = async (req, res) => {
  try {
    const insert = req.body;
    const newPost = await blogPostService.createPost(insert, req);
    if (!newPost) return res.status(400).json({ message: 'one or more "categoryIds" not found' });
    return res.status(201).json(newPost);
  } catch (erro) {
    return res.status(500).json({
      message: 'Erro ao tentar criar um post',
      erro: erro.message,
    });
  }
};

module.exports = {
  getAllBlogPost,
  getBlogPostById,
  updateBlogPost,
  searchBlogPost,
  createPost,
};