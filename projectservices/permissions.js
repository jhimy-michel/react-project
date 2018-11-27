import { createResolver } from 'apollo-resolvers'
//import { baseResolver } from './baseResolver';


export const baseResolver = createResolver(
   null,
   (root, args, context, error) =>  error
 );

 export const isAuthenticatedResolver = baseResolver.createResolver(
    (root, args, { user }, info) => {
      if (!user) throw new Error("User not authenticated");
    }
  );