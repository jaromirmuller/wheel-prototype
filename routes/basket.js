

exports.view = function(req, res){
  res.render('basket/view', { 
    productCollection : [
      {
        sku: '1',
        name: 'Product Name',
        price: 99.99,
        qty: 1,
        row_total: 99.99,
        image: {url: 'http://assets2.routeone.co.uk/media/catalog/product/cache/1/image/180x230/906777006a047b349c6871792a1ee1c2/39875.jpg'}
      }, 
      {
        sku: '2',
        name: 'Product Name',
        price: 99.99,
        qty: 1,
        row_total: 99.99,
        image: {url: 'http://assets2.routeone.co.uk/media/catalog/product/cache/1/image/180x230/906777006a047b349c6871792a1ee1c2/39875.jpg'}
      },
    ]
  });
};


exports.product = {};

exports.product.add = function(req, res){
  res.render('basket', { 
  });
};

exports.product.remove = function(req, res){
  res.render('basket', { 
  });
};

exports.product.update = function(req, res){
  res.render('basket', { 
  });
};

