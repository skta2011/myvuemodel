import Home from './views/Home.vue'
import Container from './views/test/Container.vue'
import elsearch1 from './views/elsearch/elsearch1.vue'
import elsearch2 from './views/elsearch/elsearch2.vue'
import elsearch3 from './views/elsearch/elsearch3.vue'

let routes = [
    {
        path: '/',
        component: Home,
        name: '主页'
    },
    {
        path: '/',
        component: Home,
        name: '内管业务',
        children: [
            { path: '/elsearch1', component: elsearch1, name: '基础查询' },
            { path: '/elsearch2', component: elsearch2, name: '基础查询2' },
            { path: '/elsearch3', component: elsearch3, name: '基础查询3' }
        ]
    }
];

export default routes;