import React, { Component } from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import Error from './components/Error';
import Login from './components/Login';
import Message from './components/Message';
import Notify from './components/Notify';
import Config from './components/Config';
import Exit from './components/Exit';

class Router extends Component {

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path='/home' component={Home} />
                    <Route exact path='/login' component={Login} />
                    <Route exact path='/message' component={Message} />
                    <Route exact path='/notifications' component={Notify} />
                    <Route exact path='/settings' component={Config} />
                    <Route exact path='/exit' component={Exit} />

                    <Route component={Error} />
                </Switch>
            </BrowserRouter>
        );
    }
}
export default Router;