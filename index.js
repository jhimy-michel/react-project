import bodyparser from 'body-parser';
import {ApolloServer} from 'apollo-server';
import {makeExecutableSchema} from 'graphql-tools';

import typeDefs from './schema';
import resolvers from './resolver';

const PORT=4000;
const server = new ApolloServer({typeDefs, resolvers});

server.listen(PORT).then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });