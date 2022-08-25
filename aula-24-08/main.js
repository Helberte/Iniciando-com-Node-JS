const express = require('express');
const app = express();
const routesBase = require('./routes/base');
const routesContato = require('./routes/contato');

const nunjucks = require('nunjucks')

// configs template engine
nunjucks.configure('views', {
    autoescape: true,
    noCache: true,
    express: app
});
  
app.set('view engine', 'html');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));

// configs routes
app.use(routesBase);
app.use(routesContato);
 
app.listen('8000', function () {
    console.log('Server online:8000');
});
