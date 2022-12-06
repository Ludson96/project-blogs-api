const express = require('express');
const UserController = require('./controllers/user.controllers');
const validateEmailPwd = require('./middlewares/validateEmailPwd');
const { validateInputUser } = require('./middlewares/validateInputUser');
const validateJWT = require('./auth/validateJWT');
const CategoryController = require('./controllers/category.controllers');
const validateInputCategory = require('./middlewares/validateInputCategory');

const app = express();

app.use(express.json());

app.post('/login', validateEmailPwd, UserController.loginUser);

app.post('/user', validateInputUser, UserController.createUser);

app.get('/user', validateJWT, UserController.getAllUsers);

app.get('/user/:id', validateJWT, UserController.getUserById);

app.post('/categories', validateJWT, validateInputCategory, CategoryController.createCategory);

app.get('/categories', validateJWT, CategoryController.getAllCategory);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
