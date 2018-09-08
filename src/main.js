/**
 * Created by lichun on 2017/1/18.
 */
import 'es6-promise/auto'
import Vue from 'vue'
import App from './app.vue'
import store from './store'
import router from './router'
import { sync } from 'vuex-router-sync'
import vueTap from 'v-tap'

Vue.use(vueTap)
sync(store, router)

Vue.mixin({
  methods: {
    dispatch: store.dispatch,
    commit: store.commit
  }
})
const app = new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
export { app, router, store }
