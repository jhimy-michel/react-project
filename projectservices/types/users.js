export default`
    type User{
        _id:ID!
        username: String!
        password: String!
        thumbnail:String
    }
    type Query{
        allUsers: [User]!
        getUser(_id:ID!):User!
    }
    type Mutation{
        createUser(username:String!,password:String!):Boolean!
    }
`;