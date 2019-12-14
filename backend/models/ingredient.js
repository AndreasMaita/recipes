const mongoose = require('mongoose');

const ingredientSchema = mongoose.Schema({
  name: {type: String, required: true},
  amount: {type: Number, required: false}
});

module.exports = mongoose.model('Ingredient', ingredientSchema);
