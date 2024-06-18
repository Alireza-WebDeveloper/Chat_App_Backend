// !! Packages
import { ApolloServer } from '@apollo/server';
import { expressMiddleware as apolloMiddleware } from '@apollo/server/express4';
import { resolvers } from './graphql/resolves.js';
import { readFile } from 'node:fs/promises';
import { WebSocketServer } from 'ws';
import { useServer as useWsServer } from 'graphql-ws/lib/use/ws';
import { createServer as createHttpServer } from 'node:http';
import mongoose from 'mongoose';
import { makeExecutableSchema } from '@graphql-tools/schema';

import app from './app.js';

// !! Connection MongoDb
const Port = process.env.PORT || 8000;
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log('MongoDb Connected'));
process.on('unhandledRejection', (err) => {
  console.log(err.name, err.message);
});
process.on('uncaughtException', (err) => {
  console.log('UNCAUGHT EXCEPTION 💥 Shutting down...');
  console.log(err.name, err.message);
  server.close(() => process.exit(1));
});

// !! Connection Apollo Server
const typeDefs = await readFile('./graphql/typeDefs.graphql', 'utf-8');
const schema = makeExecutableSchema({ typeDefs, resolvers });
const apolloServer = new ApolloServer({ schema });
await apolloServer.start();
app.use(
  '/graphql',
  apolloMiddleware(apolloServer, {
    context: ({ req, res }) => {
      // ??
    },
  })
);

const httpServer = createHttpServer(app);

const wsServer = new WebSocketServer({
  server: httpServer,
  path: '/graphql',
});

useWsServer({ schema }, wsServer);

httpServer.listen('8000', () => {
  console.log(`server is running on port ${Port}`);
  console.log(`graphql endpoint http://localhost:8000/graphql`);
});
