import gpl from 'graphql-tag';

export default{
    query:{

    },
    mutation:{
        createUser:gpl`
        mutation($username:String!,$password:String!){
            createUser(username:$username,password:$password)
        } 
    `
    }
}