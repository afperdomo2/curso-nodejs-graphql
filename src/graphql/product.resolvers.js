const ProductsService = require('./../services/product.service');

const service = new ProductsService();

const getProduct = async (_, { id }) => {
  return await service.findOne(id);
};

const getProducts = async () => {
  return await service.find({});
};

module.exports = { getProduct, getProducts };
