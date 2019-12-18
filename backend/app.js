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
  ingredients.save().then( result => {
    res.status(201).json({
    message: 'ingredient added',
    IngreID: result._id
    });
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
    console.log(result);
    res.status(200).json({message: "Ingredient Deleted!"});
  });
});
// // Serve only the static files form the dist directoryyyy
// app.use(express.static(__dirname + '/dist/recipe-app'));

// app.get('/*', function(req,res) {

// res.sendFile(path.join(__dirname+'/dist/recipe-app/index.html'));
// });


module.exports = app;
