import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
} from 'react-router-dom';
import Home from './Home';
import ToolBar from '../components/ToolBar';

const Register =()=>[<ToolBar></ToolBar>,<h1>Register</h1>] ;
export default ()=>(
    <Router>
        <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/register" exact component={Register}></Route>
        </Switch>
    </Router>
)