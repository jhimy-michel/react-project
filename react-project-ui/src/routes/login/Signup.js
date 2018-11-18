import React from 'react';
import {Divider, Form, Button, Icon} from 'semantic-ui-react';
export default ({styles,handleClick,handleSubmit})=>{

    const args = {}
    const handleChange = (e,input)=>{
        args[input.name]=input.value
    }
    return (
        <div>
            <div style={styles.box}>
            <Form onSubmit={(e)=> handleSubmit(e,args)}>
                <h4>Regístrate para ver fotos y videos de tus amigos</h4>
                <Button color='facebook'>
                    <Icon name='facebook'></Icon> Iniciar sesion con facebook
                </Button>
                <Divider horizontal inverted> O </Divider>
                <Form.Field>
                    <Form.Input placeholder="username" icon={<Icon name="check circle outline" color="red" size='large'  />} name="username" onChange={handleChange}/>
                </Form.Field>
                <Form.Field>
                    <Form.Input type='password' placeholder='Password' icon={<Icon name="check circle outline" color="red" size='large'  />} name="password" onChange={handleChange}/>
                </Form.Field>
                <Button type='submit' fluid primary>Register</Button>
            </Form>
            </div>
            <div style={styles.box}>
                ¿Tienes una cuenta? <a href="#" onClick={handleClick}>Inicia sesion</a>
            </div>
        </div>
    )
}