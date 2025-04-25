const express = require('express');
const {
  getArticles,
  getArticle,
  createArticle,
  updateArticle,
  deleteArticle
} = require('../controllers/articles');

const Article = require('../models/Article');

const router = express.Router();

const advancedResults = require('../middleware/advancedResults');
const { protect, authorize } = require('../middleware/auth');

router
  .route('/')
  .get(advancedResults(Article), getArticles)
  .post(protect, createArticle);

router
  .route('/:id')
  .get(getArticle)
  .put(protect, updateArticle)
  .delete(protect, deleteArticle);

module.exports = router; 