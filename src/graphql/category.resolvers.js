const CategoryService = require('../services/category.service');
const checkRolesGQ = require('../utils/checkRolesGQ');
const checkJtwGQ = require('../utils/checkJwtGQ');

const service = new CategoryService();

/**
 * Para jemorar la implementación de permisos y autorización,
 * validar con la liberería de https://the-guild.dev/graphql/shield
 */

const addCategory = async (_, { data }, context) => {
  const user = await checkJtwGQ(context);
  checkRolesGQ(user, 'admin');
  return service.create(data);
};

module.exports = { addCategory };
