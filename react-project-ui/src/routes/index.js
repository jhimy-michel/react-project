import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
} from 'react-router-dom';
import Home from './Home';
import ToolBar from '../components/ToolBar';
import Login from './Login';

import 'semantic-ui-css/semantic.min.css';
import '../css/main.css';


export default ()=>(
    <Router>
        <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/login" exact component={Login}></Route>
        </Switch>
    </Router>
)