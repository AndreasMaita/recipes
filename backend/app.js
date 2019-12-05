const express = require('express');
const path = require('path');
const app = express();


app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Methods", " GET, POST, PATCH, DELETE, OPTIONS" );
  next();
} );

app.use('/api/shoppingitems', (req, res, next) => {
  const ingredients = [
    {id: 'asdfasdf', name: 'eggs', amount: 12},
    {id: '132456', name: 'milk', amount: 1}
  ];
  return res.status(200).json({
    message: "ingredeints fetched successfully",
    ingredients: ingredients
  });
});

// // Serve only the static files form the dist directoryyyy
// app.use(express.static(__dirname + '/dist/recipe-app'));

// app.get('/*', function(req,res) {

// res.sendFile(path.join(__dirname+'/dist/recipe-app/index.html'));
// });


module.exports = app;
