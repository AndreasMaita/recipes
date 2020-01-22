const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const Ingredient = require('./models/ingredient');
const mongoose = require('mongoose');


const app = express();

mongoose.connect("mongodb+srv://root:vpe2e5D9bNeA0RHh@recookcluster-chevr.mongodb.net/reCook?retryWrites=true&w=majority")
  .then(() => {
    console.log('connected to database');
  })
  .catch(() => {
    console.log('Connection failed');
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, OPTIONS" );
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
} );

app.post("/api/shoppingitems", (req, res, next) =>{
  const ingredients = new Ingredient({
    name: req.body.name,
    amount: req.body.amount
  });
  ingredients.save().then( createdIngredient => {
    res.status(201).json({
    message: 'ingredient added',
    IngreID: createdIngredient._id
    });
  });
  console.log("Ingredient " + ingredients.name +" with amount of " + ingredients.amount + " and id of " + ingredients.id + " is added!");
});

app.put("/api/ingredients/:id", (req, res, next) => {
  const ingredient = new Ingredient({
    name: req.body.name,
    amount: req.body.amount
  });
  Ingredient.updateOne({ _id: req.params.id}, ingredient).then(result => {
    console.log(result);
    res.status(200).json({ message: "Updated scuesfull!"});
  });
});

app.get("/api/shoppingitems", (req, res, next) => {
  Ingredient.find().then((documents) => {
    res.status(200).json({
    message: "ingredients fetched successfully",
    ingredients: documents
    });
  });
});

app.delete("/api/shoppingitems/:id", (req, res, next) => {

  Ingredient.deleteOne({ _id: req.params.id}).then( result => {
    console.log(result.name);

    res.status(200).json({message: "Ingredient Deleted!"});
  });
});

app.post("/api/recipes", (req, res, next) =>{
  const recipes = new Recipes({
    name: req.body.name,
    amount: req.body.author
  });
  recipes.save().then( createdRecipes => {
    res.status(201).json({
    message: 'ingredient added',
    IngreID: createdRecipes._id
    });
  });
  console.log("Recipe " + recipes.name +" of Author " +recipes.author +" is added!");
});


module.exports = app;
