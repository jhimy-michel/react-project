import bodyparser from 'body-parser';
import {ApolloServer} from 'apollo-server-express';
import {makeExecutableSchema} from 'graphql-tools';
import  mongoose  from 'mongoose';
import models from './models';
mongoose.Promise = global.Promise;

const express = require('express');

/* import typeDefs from './types/users';
import resolvers from './resolvers/users'; */

//--- uniendo las carpetas types y resolvers
import path  from 'path';
import {fileLoader,mergeTypes,mergeResolvers} from 'merge-graphql-schemas';
const typeDefs = mergeTypes(fileLoader(path.join(__dirname,'./types')));
const resolvers = mergeResolvers(fileLoader(path.join(__dirname,'./resolvers')));


const PORT=4000;
const SECRET ="asdascregihjnlasnuhcxni";
const app = express();
const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});
const server = new ApolloServer({
    schema,
    context:{
        models,
        SECRET,
        user:{
            _id:1,username:"jhimy"
        }
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