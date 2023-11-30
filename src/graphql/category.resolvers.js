const boom = require('@hapi/boom');
const CategoryService = require('../services/category.service');

const service = new CategoryService();

const addCategory = async (_, { data }, context) => {
  const { user } = await context.authenticate('jwt', { session: false });
  if (!user) {
    throw boom.unauthorized('jwt is not valid');
  }
  return service.create(data);
};

module.exports = { addCategory };
