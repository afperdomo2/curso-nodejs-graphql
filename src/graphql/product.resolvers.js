const ProductsService = require('./../services/product.service');

const productsService = new ProductsService();

/**
 * No hay necesidad de poner async y await en las funciones,
 * ya que el resolver lo solventa
 */
const getProduct = (_, { id }) => {
  return productsService.findOne(id);
};

const getProducts = () => {
  return productsService.find({});
};

const addProduct = (_, { data }) => {
  return productsService.create(data);
};

const updateProduct = (_, { id, changes }) => {
  return productsService.update(id, changes);
};

const deleteProduct = async (_, { id }) => {
  await productsService.delete(id);
  return id;
};

const getProductByCategory = (parent) => {
  const id = parent.dataValues.id;
  return productsService.getByCategory(id);
};

module.exports = {
  getProduct,
  getProducts,
  addProduct,
  updateProduct,
  deleteProduct,
  getProductByCategory,
};
