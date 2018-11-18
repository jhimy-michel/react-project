export default`
    type Post{
        _id:ID!
        desc:String
        by:User
        photo:String
        likedBy:[User]
        comments:[User]
        createdAt:String
    }
    type Query{
        getPost(_id:ID!):Post!
    }
    input iBy{
        username: String!
        thumbnail: String
    }
    input iPost{
        desc:String,
        photo:String,
    }
    type Mutation{
        createPost(post:iPost):Post!
    }
`;