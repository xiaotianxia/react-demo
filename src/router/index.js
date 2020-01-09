import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import routes from './routes';

export default () => (
    <BrowserRouter>
        {routes.map(router => (<Route key={router.id} path={router.path} component={router.component}></Route>))}
    </BrowserRouter>
)