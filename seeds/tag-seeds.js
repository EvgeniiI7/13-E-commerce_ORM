const { Tag } = require('../models');

const tagData = [
  {
    tag_name: 'Silver',
  },
  {
    tag_name: 'Pro',
  },
  {
    tag_name: 'Max',
  },
  {
    tag_name: 'Red',
  },
  {
    tag_name: '4K',
  },
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;
