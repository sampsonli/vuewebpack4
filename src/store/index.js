/**
 * Created by lichun on 2017/1/19.
 */

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {

}
const mutations = {

}
const actions = {

}

const modules = {};
;((r) => {
    r.keys().forEach((key) => {
        if (!~key.indexOf('index.js')) {
            modules[key.split('/')[1].split('.')[0]] = r(key)
        }
    })
})(require.context('./', true, /\.js$/));
export default  new Vuex.Store({
    state,
    actions,
    mutations,
    modules
});
