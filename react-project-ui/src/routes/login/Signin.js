import React from 'react';
import {Divider, Form, Button, Icon} from 'semantic-ui-react';

export default ({styles,handleClick, handleSubmit})=>{
    const args = {}
    const handleChange = (e,input)=>{
        args[input.name]=input.value
    }
    return (
        <div>
            <div style={styles.box}>
                <img src='images/logo.png' alt="logo"/>
                <Form onSubmit={(e)=> handleSubmit(e,args)}>
                    <Form.Field>
                        <Form.Input name="username" placeholder='User name' onChange={handleChange}></Form.Input>
                    </Form.Field>
                    <Form.Field>
                        <Form.Input name="password" type='password' placeholder='Password' onChange={handleChange}></Form.Input>
                    </Form.Field>
                    <Button type='submit' fluid primary>Submit</Button>
                    <Divider horizontal inverted> O </Divider>
                    <Button color='facebook'>
                        <Icon name='facebook'></Icon> Iniciar sesion con facebook
                    </Button>
                </Form>
            </div>
            <div style={styles.box}>
                No tienes una cuenta? <a href="#" onClick={handleClick}>Registrate</a>
            </div>
        </div>
    )
}