// DEPENDENCIES
var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

// MIDDLEWARE
var app = express();
app.use(express.static(__dirname + '/app/public'));
app.use(bodyParser.urlencoded({extended: false}));

// OVERRIDE with POST having ?_method=DELETE
app.use(methodOverride('_method'));

// HANDLEBARS
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
    defaultLayout: 'main',
    extname: '.handlebars',
    layoutsDir: 'app/views/layouts'
}));
app.set('view engine', 'handlebars');
app.set('views', __dirname + '/app/views');

// ROUTES
var routes = require('./app/controllers/farm-controller.js');
app.use('/', routes);

// CONFIRMATION
var PORT = process.env.NODE_ENV || 3000;
app.listen(PORT, function(){
    console.log('App listening on PORT: ' + PORT);
});