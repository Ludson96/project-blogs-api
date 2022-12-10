const express = require('express');
const UserController = require('./controllers/user.controllers');
const validateEmailPwd = require('./middlewares/validateEmailPwd');
const { categoriesRouter, postRouter, userRouter } = require('./routers');

const app = express();

app.use(express.json());

app.use('/post', postRouter);

app.use('/categories', categoriesRouter);

app.use('/user', userRouter);

app.post('/login', validateEmailPwd, UserController.loginUser);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
