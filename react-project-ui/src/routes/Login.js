import React from 'react';
import {Grid, Image} from 'semantic-ui-react';
import Signin from './login/Signin';
import Signup from './login/Signup';
import LostPassword from './login/LostPassword';
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
    }
    showRegister =(e)=>{
        e.preventDefault();
        this.setState({showLogin:false,showRegister:true,showLostPassword:false});
    }
    showLogin =(e)=>{
        e.preventDefault();
        this.setState({showLogin:true,showRegister:false,showLostPassword:false});
    }
    handleLogin=(e,args)=>{
        console.log(args);
    }
    render(){
        const {showLogin,showRegister,showLostPassword} = this.state;
        return(
                <Grid verticalAlign="middle" centered columns={2} style={styles.grid} >
                    <Grid.Row>
                        <Grid.Column>
                            <Image fluid src='images/fondo.jpg'/>
                        </Grid.Column>
                        <Grid.Column>
                            {showLogin && <Signin styles={styles} handleClick={this.showRegister} handleSubmit={this.handleLogin}></Signin>}
                            {showRegister && <Signup styles={styles} handleClick={this.showLogin}></Signup>}
                            {/*showLostPassword && <LostPassword styles={styles}></LostPassword>*/}
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
        )
    }
}
export default Login;