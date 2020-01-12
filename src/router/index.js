import React from 'react';
import { Route, HashRouter } from 'react-router-dom';
import routes from './routes';

export default () => (
    <HashRouter>
        {routes.map(router => (<Route key={router.id} path={router.path} component={router.component}></Route>))}
    </HashRouter>
)