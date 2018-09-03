const Video = () => import('./index.vue' /* webpackChunkName: "video" */)
const Demo = () => import('./views/demo/index.vue' /* webpackChunkName: "video_demo" */)
export default {
    component: Video,
    children: [
        {
            path: 'demo',
            name: 'video/demo',
            component: Demo
        },
        {
            path: '*',
            redirect: {name: 'video/demo'}
        }
    ]
}
