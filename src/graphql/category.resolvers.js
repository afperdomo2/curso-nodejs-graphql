const CategoryService = require('../services/category.service');

const service = new CategoryService();

const addCategory = (_, { data }) => {
  return service.create(data);
};

module.exports = { addCategory };
