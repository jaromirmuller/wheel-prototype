
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var homepage = require('./routes/homepage.js');
var product = require('./routes/product.js');
var basket = require('./routes/basket.js');
var checkout = require('./routes/checkout.js');


var app = module.exports = express.createServer();

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.set('view options', { layout: false });

  app.locals({
    copyright : {year: 2013},
    title : 'Wheel Prototype'
  });

  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.compiler({ src : __dirname + '/public', enable: ['less']}));
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

// Compatible

// Now less files with @import 'whatever.less' will work(https://github.com/senchalabs/connect/pull/174)
var TWITTER_BOOTSTRAP_PATH = './vendor/twitter/bootstrap/less';
express.compiler.compilers.less.compile = function(str, fn){
  try {
    var less = require('less');var parser = new less.Parser({paths: [TWITTER_BOOTSTRAP_PATH]});
    parser.parse(str, function(err, root){fn(err, root.toCSS());});
  } catch (err) {fn(err);}
}

// Routes

app.get('/', homepage.view);
app.get('/product/list', product.list);
app.get('/product/view', product.view);
app.get('/basket/view', basket.view);
app.get('/basket/product/add', basket.product.add);
app.get('/basket/product/remove', basket.product.remove);
app.get('/basket/product/update', basket.product.update);
app.get('/checkout', checkout.view);
app.get('/checkout/save', checkout.save);
app.get('/checkout/place', checkout.place);
app.get('/checkout/success', checkout.success);


app.listen(3000, function(){
  console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
});
