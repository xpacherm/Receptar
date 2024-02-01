const express = require('express');
const mongoose = require('mongoose');
const recipeRoutes = require('./routes/recipeRoutes');
const Recipe = require('./models/recipe');

const app = express();

const dbURI = "mongodb://localhost:27017/receptar"

mongoose.connect(dbURI)
    .then(result => app.listen(3000))
    .catch(err => console.log(err))

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {
    Recipe.find().sort({ createdAt: -1 }).limit(1)
        .then((result) => {
            res.render('index', { recipes: result, title: 'Hlavná stránka' });
        })
        .catch(err => {
            console.log(err);
        })
})

app.use('/recipes', recipeRoutes)

// catch-all
app.use((req, res) => {
    res.status(404).render('404');
})