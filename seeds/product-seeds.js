const { Product } = require('../models');

const productData = [
  {
    product_name: 'iPhone',
    price: 1000.00,
    stock: 20,
    category_id: 1,
  },
  {
    product_name: 'MacBook',
    price: 2000.0,
    stock: 25,
    category_id: 2,
  },
  {
    product_name: 'AirPods',
    price: 200.99,
    stock: 12,
    category_id: 3,
  },
  {
    product_name: 'Sony',
    price: 5000.00,
    stock: 50,
    category_id: 4,
  },
  {
    product_name: 'Samsung',
    price: 800.0,
    stock: 22,
    category_id: 5,
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
