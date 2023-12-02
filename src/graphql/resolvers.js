const {
  getProduct,
  getProducts,
  addProduct,
  updateProduct,
  deleteProduct,
} = require('./product.resolvers');
const { addCategory } = require('./category.resolvers');
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
  },

  Mutation: {
    login,
    addProduct,
    updateProduct,
    deleteProduct,
    addCategory,
  },

  CategoryNameType,
};

module.exports = resolvers;
