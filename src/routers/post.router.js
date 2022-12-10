const express = require('express');
const validateJWT = require('../auth/validateJWT');
const { validateInputBlogPostUpdated } = require('../middlewares/validateInputBlogPostUpdate');
const blogPostController = require('../controllers');
const validateInputNewBlogPost = require('../middlewares/validateInputNewBlogPost');

const router = express.Router();

router.get('/search', validateJWT, blogPostController.searchBlogPost);

router.get('/', validateJWT, blogPostController.getAllBlogPost);

router.get('/:id', validateJWT, blogPostController.getBlogPostById);

router.put('/:id', 
            validateJWT, 
            validateInputBlogPostUpdated, 
            blogPostController.updateBlogPost);

router.post('/', validateJWT, validateInputNewBlogPost, blogPostController.createPost);

router.delete('/:id', validateJWT, blogPostController.deletePost);

module.exports = router;