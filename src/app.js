const express = require('express');
const UserController = require('./controllers/user.controllers');
const validateEmailPwd = require('./middlewares/validateEmailPwd');
const { validateInputUser } = require('./middlewares/validateInputUser');
const { validateInputBlogPostUpdated } = require('./middlewares/validateInputBlogPostUpdate');
const validateJWT = require('./auth/validateJWT');
const CategoryController = require('./controllers/category.controllers');
const validateInputCategory = require('./middlewares/validateInputCategory');
const blogPostController = require('./controllers/blogpost.controller');
const validateInputNewBlogPost = require('./middlewares/validateInputNewBlogPost');

const app = express();

app.use(express.json());

app.get('/post/search', validateJWT, blogPostController.searchBlogPost);

app.post('/login', validateEmailPwd, UserController.loginUser);

app.post('/user', validateInputUser, UserController.createUser);

app.get('/user', validateJWT, UserController.getAllUsers);

app.get('/user/:id', validateJWT, UserController.getUserById);

app.post('/categories', validateJWT, validateInputCategory, CategoryController.createCategory);

app.get('/categories', validateJWT, CategoryController.getAllCategory);

app.get('/post', validateJWT, blogPostController.getAllBlogPost);

app.get('/post/:id', validateJWT, blogPostController.getBlogPostById);

app.put('/post/:id', validateJWT, validateInputBlogPostUpdated, blogPostController.updateBlogPost);

app.delete('/user/me', validateJWT, UserController.deleteUser);

app.post('/post', validateJWT, validateInputNewBlogPost, blogPostController.createPost);

app.delete('/post/:id', validateJWT, blogPostController.deletePost);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
