/**
 * Created by lichun on 2019/6/1.
 */

import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const views = [];
((r) => {
    r.keys().forEach((key) => {
        const md = r(key).default
        md.path = md.path || ('/' + key.split('/')[2])
        views.push(md)
    })
})(
    require.context('./', true, /\.\/routes\/([^/]+)\/route.js$/)
    // require.context('./', true, /\.\/routes\/(demo)\/route.js$/)
)
export default new VueRouter({
    mode: process.env.PUB_PATH ? 'history' : 'hash',
    routes: [...views, { path: '*', redirect: { path: 'demo/' } }]
})
