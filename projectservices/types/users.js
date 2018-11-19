export default`
    type User{
        _id:ID!
        username: String!
        password: String!
        thumbnail:String
    }
    type Error{
        path:String!
        message:String!
    }
    type Query{
        allUsers: [User]!
        getUser(_id:ID!):User!
    }
    type Response{
        success:Boolean!
        errors:[Error]
    }
    type Mutation{
        createUser(username:String!,password:String!):Response!
    }
`;