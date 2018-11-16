export default`
    type Post{
        _id:ID!
        desc:String
        by:UserShort
        photo:String
        likedBy:[UserShort]
        comments:[UserShort]
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