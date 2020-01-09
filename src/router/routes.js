import loadable from '../utils/loadable';
import uuid from 'uuid';

export default [
    {   
        path: '/home',
        name: 'home',
        id: uuid(),
        component: loadable(() => import('../pages/home/Home')),
    },

    {
        path: '/list',
        name: 'list',
        id: uuid(),
        component: loadable(() => import('../pages/list/List')),
    }
]