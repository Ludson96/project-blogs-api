const express = require('express');
const UserController = require('./controllers/user.controllers');
const validateEmailPwd = require('./middlewares/validateEmailPwd');
const { validateInputUser } = require('./middlewares/validateInputUser');

const app = express();

app.use(express.json());

app.post('/login', validateEmailPwd, UserController.loginUser);

app.post('/user', validateInputUser, UserController.createUser);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
