const { Category } = require('../models');

const categoryData = [
  {
    category_name: 'Cell phones',
  },

  {
    category_name: 'Computers',
  },

  {
    category_name: 'HeadPhones',
  },

  {
    category_name: 'Cameras',
  },

  {
    category_name: 'Tvs',
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
