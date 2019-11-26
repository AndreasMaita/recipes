const express = require('express');
const path = require('path');
const app = express();


app.use('/api/shoppingitems', (req, res, next) => {
  const ingredients = [
    {name: 'eggs'},
    {name: 'milk'}
  ];
  res.json(ingredients);
});

// // Serve only the static files form the dist directory
// app.use(express.static(__dirname + '/dist/recipe-app'));

// app.get('/*', function(req,res) {

// res.sendFile(path.join(__dirname+'/dist/recipe-app/index.html'));
// });


module.exports = app;
