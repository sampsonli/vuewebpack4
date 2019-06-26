const DemoList = () => import('./pages/list/index.vue' /* webpackChunkName: "demo_list" */)
const DemoDetail = () => import('./pages/detail/index.vue' /* webpackChunkName: "demo_detail" */)
const DemoComment = () => import('./pages/comment/index.vue' /* webpackChunkName: "demo_detail_comment" */)
export default {
    component: { template: '<router-view/>' },
    children: [
        {
            path: 'list',
            name: 'demo/list',
            component: DemoList
        },
        {
            path: 'detail/:art_id',
            component: DemoDetail,
            name: 'demo/detail'
        },
        {
            path: 'detail/:art_id/:comm_id',
            component: DemoComment,
            name: 'demo/comment'
        },
        {
            path: '*',
            redirect: { name: 'demo/list' }
        }
    ]
}
