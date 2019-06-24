//
//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
//               佛祖保佑         永无BUG
//
/**
 * Created by lichun on 2018/9/8.
 */
import 'es6-promise/auto'
import Vue from 'vue'
import store from './store'
import router from './router'
import spritis from './common/spirits'
import { sync } from 'vuex-router-sync'
import vueTap from 'v-tap'
import '~/assets/style.css'

Vue.use(vueTap)
sync(store, router)
spritis(store)

Vue.mixin({
    methods: {
        map (key, ns = this.ns) {
            return ns && this.$store.getters[[ns, key].join('/')]
        }
    },
    computed: {
        state () {
            return (this.ns && this.$store.state[this.ns]) || {}
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
