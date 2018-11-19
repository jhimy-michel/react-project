import React from 'react';
import {Grid, Image} from 'semantic-ui-react';
import {graphql,compose} from 'react-apollo';

//utils
import queries from '../utils/queries';
//components
import Signin from './login/Signin';
import Signup from './login/Signup';
//import LostPassword from './login/LostPassword';

const styles={
    grid:{
        height:'100%',
        width:'900px',
        margin: '0 auto',
    },
    box:{
        backgroundColor:'white',
        border: '1px solid #e6e6e6',
        textAlign:'center',
        marginBottom:'1em',
        padding: '1em',
    }
}

class Login extends React.Component{
    state={
        showLogin:true,
        showRegister:false,
        showLostPassword:false,
        argsSignup:{},
        errorSignup:[],
        errorSignin:[]
    }
    showRegister =(e)=>{
        e.preventDefault();
        this.setState({showLogin:false,showRegister:true,showLostPassword:false});
    }
    showLogin =(e)=>{
        e.preventDefault();
        this.setState({showLogin:true,showRegister:false,showLostPassword:false});
    }
    handleLogin = async (ev, args)=>{
        console.log(args);
        const response = await this.props.login({
          variables: args
        })
        const {errors,success,token}=response.data.login
        if(!success){
           
            this.setState({errorSignin:errors})
        }else{
            localStorage.setItem('token',token);
            this.props.history.push("/");
        }
    }
    handleRegister= async(e,args)=>{
        const response = await this.props.mutate ({
            variables: args
        })
        const {errors,success} = response.data.createUser;
        if(!success){
            this.setState({errorSignup:errors,success});
        }else{
            this.props.history.push("/")
        }
    }
    handleChange = (e,input)=>{
        const argsSignup = this.state.argsSignup
        argsSignup[input.name]=input.value
        this.setState({argsSignup})
    }
    render(){
        const {showLogin,showRegister,showLostPassword, argsSignup,errorSignup} = this.state;
        return(
                <Grid verticalAlign="middle" centered columns={2} style={styles.grid} >
                    <Grid.Row>
                        <Grid.Column>
                            <Image fluid src='images/fondo.jpg' alt="fondo"/>
                        </Grid.Column>
                        <Grid.Column>
                            {showLogin && 
                                <Signin styles={styles} handleClick={this.showRegister} handleSubmit={this.handleLogin}/>}
                            {showRegister && 
                                <Signup styles={styles} handleClick={this.showLogin} handleSubmit={this.handleRegister} 
                                        handleChange={this.handleChange} args={argsSignup} errors={errorSignup}/>}
                            {/*showLostPassword && <LostPassword styles={styles}></LostPassword>*/}
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
        )
    }
}
export default compose(
    graphql(queries.mutation.login,{name:'login'}),
    graphql(queries.mutation.createUser,{name:'create'})
)(Login)