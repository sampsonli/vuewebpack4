const Cartoon = () => import('./index.vue' /* webpackChunkName: "cartoon" */)
const CartoonList = () => import('./pages/list/index.vue' /* webpackChunkName: "cartoon/list" */)
const CartoonDetail = () => import('./pages/detail/index.vue' /* webpackChunkName: "cartoon/detail" */)
const CartoonComment = () => import('./pages/comment/index.vue' /* webpackChunkName: "cartoon/detail/comment" */)
export default {
    component: Cartoon,
    path: '/cartoon',
    children: [
        {
            path: 'list',
            name: 'cartoon/list',
            component: CartoonList
        },
        {
            path: 'detail/:art_id',
            component: CartoonDetail,
            name: 'cartoon/detail'
        },
        {
            path: 'detail/:art_id/:comm_id',
            component: CartoonComment,
            name: 'cartoon/comment'
        },
        {
            path: '*',
            redirect: {name: 'cartoon/list'}
        }
    ]
}
