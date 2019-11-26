const express = require('express');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/recipe-app'));

app.get('/*', function(req,res) {

res.sendFile(path.join(__dirname+'/dist/recipe-app/index.html'));
});




module.export = app;
