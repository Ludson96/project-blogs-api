const express = require('express');
const { CategoryController } = require('../controllers');
const validateInputCategory = require('../middlewares/validateInputCategory');
const validateJWT = require('../auth/validateJWT');

const router = express.Router();

router.post('/', validateJWT, validateInputCategory, CategoryController.createCategory);

router.get('/', validateJWT, CategoryController.getAllCategory);

module.exports = router;