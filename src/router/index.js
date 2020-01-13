import React from 'react';
import { Route, HashRouter, Redirect } from 'react-router-dom';
import routes from './routes';

export default () => (
    <HashRouter>
        {routes.map(router => (<Route key={router.id} path={router.path} component={router.component}></Route>))}
        <Redirect from="/" to="login" />
    </HashRouter>
)