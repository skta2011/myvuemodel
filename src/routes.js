import Home from './views/Home.vue'
import Container from './views/test/Container.vue'
import common from './views/mngpage/common.vue'
import bill from './views/mngpage/bill.vue'
import task from './views/mngpage/task.vue'
import mainpage from './views/mainpage/mainpage.vue'

let routes = [
    {
        path: '/',
        component: Home,
        oneLeafFlag: true,
        name: '主页',
        children:[{
            path: '/mainpage', component: mainpage, name: '主页内容'
        }]
    },
    {
        path: '/',
        component: Home,
        name: '内管业务',
        children: [
            { path: '/common', component: common, name: '基础查询' },
            { path: '/bill', component: bill, name: '账单查询' },
            { path: '/task', component: task, name: '任务列表' }
        ]
    }
];

export default routes;