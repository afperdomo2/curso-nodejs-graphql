const ProductsService = require('./../services/product.service');

const service = new ProductsService();

/**
 * No hay necesidad de poner async y await en las funciones,
 * ya que el resolver lo solventa
 */
const getProduct = (_, { id }) => {
  return service.findOne(id);
};

const getProducts = () => {
  return service.find({});
};

const addProduct = (_, { data }) => {
  return service.create(data);
};

const updateProduct = (_, { id, changes }) => {
  return service.update(id, changes);
};

const deleteProduct = async (_, { id }) => {
  await service.delete(id);
  return id;
};

module.exports = {
  getProduct,
  getProducts,
  addProduct,
  updateProduct,
  deleteProduct,
};
