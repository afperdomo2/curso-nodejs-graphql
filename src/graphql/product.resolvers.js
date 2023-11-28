const ProductsService = require('./../services/product.service');

const service = new ProductsService();

const getProduct = async (_, { id }) => {
  return await service.findOne(id);
};

const getProducts = async () => {
  return await service.find({});
};

const addProduct = async (_, { data }) => {
  return await service.create(data);
};

module.exports = { getProduct, getProducts, addProduct };
