import loadable from '../utils/loadable';
import uuid from 'uuid';

export default [
    {   
        path: '/login',
        name: 'login',
        id: uuid(),
        component: loadable(() => import('../pages/login/Login')),
    },

    {
        path: '/repos',
        name: 'repos',
        id: uuid(),
        component: loadable(() => import('../pages/repos/List')),
    },

    {
        path: '/following',
        name: 'following',
        id: uuid(),
        component: loadable(() => import('../pages/following/List')),
    },

    {
        path: '/followers',
        name: 'followers',
        id: uuid(),
        component: loadable(() => import('../pages/followers/List')),
    }
]