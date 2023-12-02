const {
  getProduct,
  getProducts,
  addProduct,
  updateProduct,
  deleteProduct,
  getProductByCategory,
} = require('./product.resolvers');
const { getCategory, addCategory } = require('./category.resolvers');
const { login } = require('./auth.resolvers');
const { RegularExpression } = require('graphql-scalars');

// Crear un type personalizado con Regex
const CategoryNameType = new RegularExpression(
  'CategoryNameType',
  /^[a-zA-Z0-9]{3,8}$/
);

const resolvers = {
  Query: {
    hello: () => 'hola mundo',
    getPerson: (_, args) => `${args.name} tiene ${args.age} años`,
    getInt: (_, { age }) => age,
    getFloat: () => 1.1,
    getString: () => 'Palabra',
    getBoolean: () => true,
    getID: () => '123123',
    getNumbers: (_, { numbers }) => numbers.map((n) => n * 2),

    // Products
    product: getProduct,
    products: getProducts,

    // Categories
    category: getCategory,
  },

  Mutation: {
    login,
    addProduct,
    updateProduct,
    deleteProduct,
    addCategory,
  },

  CategoryNameType,
  Category: {
    products: getProductByCategory,
  },
};

module.exports = resolvers;
