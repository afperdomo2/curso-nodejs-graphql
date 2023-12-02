const { ApolloServer } = require('@apollo/server');
const {
  ApolloServerPluginLandingPageGraphQLPlayground,
} = require('@apollo/server-plugin-landing-page-graphql-playground');
const { expressMiddleware } = require('@apollo/server/express4');
const { loadFiles } = require('@graphql-tools/load-files');
const resolvers = require('./resolvers');
const { buildContext } = require('graphql-passport');
const {
  typeDefs: scalarsTypeDefs,
  resolvers: scalarsResolvers,
} = require('graphql-scalars');

const useGraphql = async (app) => {
  const server = new ApolloServer({
    typeDefs: [await loadFiles('./src/**/*.graphql'), scalarsTypeDefs],
    resolvers: [resolvers, scalarsResolvers],
    playground: true,
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground],
  });

  await server.start();
  console.log('🚀 Apollo Server start');

  app.use(
    expressMiddleware(server, {
      context: async ({ req, res }) => buildContext({ req, res }),
    })
  );
};

module.exports = useGraphql;
