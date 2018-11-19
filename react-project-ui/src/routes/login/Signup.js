import React from 'react';
import {Divider, Form, Button, Icon, Message} from 'semantic-ui-react';
import _find from 'lodash';


export default ({styles,handleClick,handleSubmit, handleChange,args,errors})=>{

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
                    <Form.Input placeholder="username" 
                        icon={!errors.length?null: _find(errors,{path:'username'})?<Icon name="remove circle" color="red" size='large'/>
                                :<Icon name="check circle outline" color="green" size='large'/>} 
                        name="username" onChange={handleChange}/>
                </Form.Field>
                <Form.Field>
                    <Form.Input type='password' placeholder='Password' 
                       icon={!errors.length?null: _find(errors,{path:'password'})?<Icon name="remove circle" color="red" size='large'/>
                       :<Icon name="check circle outline" color="green" size='large'/>} 
                        name="password" onChange={handleChange}/>
                </Form.Field>
                <Button type='submit' fluid primary disabled={!args.username || !args.password}>Register</Button>
                {
                    errors.length?
                    <Message negative header="Los siguientes errores:" list={errors.map(error=>`[${error.path}] ${error.message}`)}/>
                    :null
                }
            </Form>
            </div>
            <div style={styles.box}>
                ¿Tienes una cuenta? <a href="#" onClick={handleClick}>Inicia sesion</a>
            </div>
        </div>
    )
}