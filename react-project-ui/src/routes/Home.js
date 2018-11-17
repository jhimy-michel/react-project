import React from 'react';
import {graphql} from 'react-apollo';
import gpl from  'graphql-tag';
import ToolBar from '../components/ToolBar';

const query=gpl`
    {
        allUsers{
        username
        }
    }
`;

const userItem = (user,i) =><li key={i}>{user.username}</li>
export default graphql(query)(
    ({data:{allUsers=[],loading}})=>{
        if(loading) return null;
        return (
            <div>
                <ToolBar/>
                <ul>
                    {allUsers.map(userItem)}
                </ul>
            </div>
        )
    }
);