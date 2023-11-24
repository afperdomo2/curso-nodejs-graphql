const { ApolloServer } = require('@apollo/server');
const {
  ApolloServerPluginLandingPageGraphQLPlayground,
} = require('@apollo/server-plugin-landing-page-graphql-playground');
const { expressMiddleware } = require('@apollo/server/express4');
const { loadFiles } = require('@graphql-tools/load-files');

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
    getProduct: () => {
      return {
        id: '123',
        name: 'Camisa',
        price: 1500,
        description: 'Camisa de salir',
        image: 'https://www.photos.com/camisas',
        createdAt: new Date().toISOString(),
      };
    },
  },
};

const useGraphql = async (app) => {
  const server = new ApolloServer({
    typeDefs: await loadFiles('./src/**/*.graphql'),
    resolvers,
    playground: true,
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground],
  });

  await server.start();
  console.log('🚀 Apollo Server start');

  app.use(
    expressMiddleware(server, {
      context: async ({ req }) => ({ token: req.headers.token }),
    })
  );
};

module.exports = useGraphql;
