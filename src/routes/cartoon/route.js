const Cartoon = () => import('./index.vue' /* webpackChunkName: "cartoon" */)
const CartoonList = () => import('./pages/list/index.vue' /* webpackChunkName: "cartoon_list" */)
const CartoonDetail = () => import('./pages/detail/index.vue' /* webpackChunkName: "cartoon_detail" */)
const CartoonComment = () => import('./pages/comment/index.vue' /* webpackChunkName: "cartoon_detail_comment" */)
export default {
    component: Cartoon,
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
            redirect: { name: 'cartoon/list' }
        }
    ]
}
