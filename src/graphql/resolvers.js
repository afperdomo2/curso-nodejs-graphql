const {
  getProduct,
  getProducts,
  addProduct,
  updateProduct,
  deleteProduct,
} = require('./product.resolvers');
const { login } = require('./auth.resolvers');

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
  },
};

module.exports = resolvers;
