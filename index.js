import bodyparser from 'body-parser';
import {ApolloServer,graphqlExpress} from 'apollo-server-express';
import {makeExecutableSchema} from 'graphql-tools';
import  mongoose  from 'mongoose';
import models from './models';
mongoose.Promise = global.Promise;

const express = require('express');

import typeDefs from './schema';
import resolvers from './resolver';

const PORT=4000;
const app = express();
const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});
const server = new ApolloServer({
    schema,
    context:{
        models
    }
});
server.applyMiddleware({app});

/* app.use('/graphql',bodyparser.json(),graphqlExpress({
    schema,
    context:{
        models
    }
})); */
mongoose.connect('mongodb://juan:control123!@ds161620.mlab.com:61620/jmichel',{useNewUrlParser:true, useCreateIndex:true}).then(
    () => {
        console.log('halo!');
    }
);
app.listen({ port: PORT }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
)