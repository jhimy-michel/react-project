import gpl from 'graphql-tag';

export default{
    query:{

    },
    mutation:{
        login:gpl`
            mutation($username:String!,$password:String!){
                login(username:$username,password:$password){
                    success,
                    token,
                    errors{
                      message
                    }
                }
            }
        `,
        createUser:gpl`
            mutation($username:String!,$password:String!){
                createUser(username:$username,password:$password){
                    success
                    errors{
                    path
                    message
                    }
                }
            } 
    `
    }
}