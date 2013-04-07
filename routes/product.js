exports.view = function(req, res){

  res.render('product/view', { 
    product : {
      sku: '1',
      name: 'Product Name',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non nisi id justo lacinia blandit. Mauris vulputate vulputate lectus. Vestibulum id dui sit amet mi hendrerit consequat. Mauris at magna nec metus auctor consectetur. Proin eleifend viverra lorem eu fringilla. Cras nisl ipsum, consequat nec interdum et, eleifend sed ante. Aliquam erat volutpat.',
      url: '#url1',
      add_to_basket_url:'basket/add/id/1',
      price: 99.99,
      image: {url: 'http://assets2.routeone.co.uk/media/catalog/product/cache/1/image/180x230/906777006a047b349c6871792a1ee1c2/39875.jpg'},
      }
    }); 

}

exports.list = function(req, res){


  var desc = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in rutrum turpis. Phasellus vel libero.';

  res.render('product/list', { 
    productCollection : [
        {
          sku: '1',
          name: 'Product Name',
          description: desc,
          url: '#url1',
          price: 99.99,
          image: {url: 'http://assets2.routeone.co.uk/media/catalog/product/cache/1/image/180x230/906777006a047b349c6871792a1ee1c2/39875.jpg'},
        },
        {
          sku: '1',
          name: 'Product Name',
          description: desc,
          url: '#url1',
          price: 99.99,
          image: {url: 'http://assets2.routeone.co.uk/media/catalog/product/cache/1/image/180x230/906777006a047b349c6871792a1ee1c2/39875.jpg'},
        },
        {
          sku: '1',
          name: 'Product Name',
          description: desc,
          url: '#url1',
          price: 99.99,
          image: {url: 'http://assets2.routeone.co.uk/media/catalog/product/cache/1/image/180x230/906777006a047b349c6871792a1ee1c2/39875.jpg'},
        },
        {
          sku: '1',
          name: 'Product Name',
          description: desc,
          url: '#url1',
          price: 99.99,
          image: {url: 'http://assets2.routeone.co.uk/media/catalog/product/cache/1/image/180x230/906777006a047b349c6871792a1ee1c2/39875.jpg'},
        },
        {
          sku: '1',
          name: 'Product Name',
          description: desc,
          url: '#url1',
          price: 99.99,
          image: {url: 'http://assets2.routeone.co.uk/media/catalog/product/cache/1/image/180x230/906777006a047b349c6871792a1ee1c2/39875.jpg'},
        },
        {
          sku: '1',
          name: 'Product Name',
          description: desc,
          url: '#url1',
          price: 99.99,
          image: {url: 'http://assets2.routeone.co.uk/media/catalog/product/cache/1/image/180x230/906777006a047b349c6871792a1ee1c2/39875.jpg'},
        },
        {
          sku: '1',
          name: 'Product Name',
          description: desc,
          url: '#url1',
          price: 99.99,
          image: {url: 'http://assets2.routeone.co.uk/media/catalog/product/cache/1/image/180x230/906777006a047b349c6871792a1ee1c2/39875.jpg'},
        }
   ]

  });

};
