/**
 * Created by lichun on 2018/9/8.
 */
import 'es6-promise/auto'
import Vue from 'vue'
import store from './store'
import router from './router'
import { sync } from 'vuex-router-sync'
import vueTap from 'v-tap'
import '~/assets/style.css'

Vue.use(vueTap)
sync(store, router)

Vue.mixin({
    methods: {
        dispatch: store.dispatch,
        commit: store.commit
    },
    computed: {
        state () {
            return (this.ns && store.state[this.ns]) || {}
        }
    }
})
const app = new Vue({
    el: '#app',
    router,
    store,
    template: '<router-view/>'
})
export { app, router, store }
