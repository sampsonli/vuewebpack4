const Pzeval = () => import('./index.vue' /* webpackChunkName: "pzeval" */)
const Starter = () => import('./pages/starter' /* webpackChunkName: "pzeval_starter" */)
const Question = () => import('./pages/question' /* webpackChunkName: "pzeval_question" */)
const Info = () => import('./pages/info' /* webpackChunkName: "pzeval_info" */)
export default {
    component: Pzeval,
    children: [
        {
            path: 'starter',
            name: 'pzeval_starter',
            component: Starter
        },
        {
            path: 'question',
            name: 'pzeval_question',
            component: Question
        },
        {
            path: 'info',
            name: 'pzeval_info',
            component: Info
        },
        {
            path: '*',
            redirect: { name: 'pzeval_starter' }
        }
    ]
}
