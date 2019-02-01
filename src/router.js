/**
 * Created by lichun on 2017/5/10.
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
})(require.context('./', true, /\.\/routes\/[^\/]+\/route.js$/)); // eslint-disable-line

// views.push(route)
export default new VueRouter({
    mode: 'hash',
    routes: [...views, { path: '*', redirect: { path: 'cartoon/' } }]
})
