const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    slug: {
        type: String,
        required: true,
    },
    image: {
        type: String,
    },
    mats: {
        type: Array,
        required: true,
    },
    instructions: {
        type: String,
        required: true,
    },
    minutesMin: {
        type: String,
    },
    minutesMax: {
        type: String,
    },
    isVegan: {
        type: String,
    },
    difficulty: {
        type: String,
    },
    foodType: {
        type: String,
    },

}, { timestamps: true })

const Recipe = mongoose.model('Recipe', recipeSchema);
module.exports = Recipe;