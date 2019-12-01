import Home from './views/test/Home.vue'
import Container from './views/test/Container.vue'

let routes = [
    {
        path: '/',
        component: Home,
        name: 'mainpage'
    },
    {
        path: '/container',
        component: Container,
        name: 'container'
    }
];

export default routes;