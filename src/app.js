const express = require('express');
const cors = require('cors');

const routerApi = require('./routes');
const { checkApiKey } = require('./middlewares/auth.handler');

const useGraphql = require('./graphql');

const {
  logErrors,
  errorHandler,
  boomErrorHandler,
  ormErrorHandler,
} = require('./middlewares/error.handler');

const createApp = async () => {
  const app = express();

  app.use(express.json());
  app.use(cors());

  require('./utils/auth');

  app.get('/', (req, res) => {
    res.send('Hola mi server en express');
  });

  app.get('/nueva-ruta', checkApiKey, (req, res) => {
    res.send('Hola, soy una nueva ruta');
  });

  routerApi(app);
  await useGraphql(app);

  /**
   * MIDDLEWARES
   * Es importante tener en cuenta el orden de ejecución
   */
  app.use(logErrors);
  app.use(ormErrorHandler);
  app.use(boomErrorHandler);
  app.use(errorHandler);

  return app;
};

module.exports = createApp;
