const express = require('express');
const recipeController = require('../controllers/recipeController')

const router = express.Router();

router.get('/', recipeController.recipe_archive);
router.post('/', recipeController.recipe_create_post);
router.get('/create', recipeController.recipe_create_get);
router.get('/:slug', recipeController.recipe_single);
router.delete('/:id', recipeController.recipe_delete);

module.exports = router;