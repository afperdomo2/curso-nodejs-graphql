const getProduct = (_, { id }) => {
  return {
    id,
    name: 'Camisa',
    price: 1500,
    description: 'Camisa de salir',
    image: 'https://www.photos.com/camisas',
    createdAt: new Date().toISOString(),
  };
};

const getProducts = () => {
  return [];
};

module.exports = { getProduct, getProducts };
