import React, { Component } from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Error from './components/Error';
import Message from './components/Message';
import Notify from './components/Notify';
import Exit from './components/Exit';
import { CrudProducts } from './components/crud/CrudProducts';
import {Products} from './components/home/Products';
import LoginUser from './components/Login/LoginUser';
import RegisterUser from './components/Login/RegisterUser';
import {CrudAppPro} from './components/crud/crudproduct/CrudAppPro'
class Router extends Component {

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path='/home' component={Products} />
                    <Route exact path='/login' component={LoginUser} />
                    <Route exact path='/message' component={Message} />
                    <Route exact path='/notifications' component={Notify} />
                    <Route exact path='/settings' component={CrudAppPro} />
                    <Route exact path='/exit' component={Exit} />
                    <Route exact path='/register' component={RegisterUser} />

                    <Route component={Error} />
                </Switch>
            </BrowserRouter>
        );
    }
}
export default Router;