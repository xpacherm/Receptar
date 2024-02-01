const Recipe = require('../models/recipe');
const _ = require('lodash');

const recipe_archive = (req, res) => {
    Recipe.find().sort({ createdAt: -1 })
        .then((result) => {
            res.render('archive', {recipes: result, title: "Zoznam receptov"});
        })
        .catch(err => {
            console.log(err);
        })
}

const recipe_single = (req, res) => {
    const slug = req.params.slug;
    Recipe.findOne({slug})
        .then(result => {
            res.render('single', { recipe: result, title: 'Detail receptu' })
        });
}

const recipe_create_get = (req, res) => {
    res.render('create', { title: 'Vytvor recept' })
}

const recipe_create_post = (req, res) => {
    const recipe = new Recipe(req.body);
    recipe.slug = _.kebabCase(recipe.title);
    recipe.save()
        .then(result => {
            res.redirect('/recipes');
        })
        .catch(err => {
            console.log(err);
        });
}

const recipe_delete = (req, res) => {
    const id = req.params.id;
    Recipe.findByIdAndDelete(id)
        .then(result => {
            res.json({ redirect: '/recipes' });
        })
        .catch(err => {
            console.log(err);
        });
}

module.exports = {
    recipe_archive,
    recipe_single,
    recipe_create_get,
    recipe_create_post,
    recipe_delete
}