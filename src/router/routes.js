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
        path: '/recommend',
        name: 'recommend',
        id: uuid(),
        component: loadable(() => import('../pages/recommend/Recommend')),
    }
]