/**
 * Created by sampson on 2017/5/10.
 */
// import ajax from '~common/ajax'
import { mapActions, mapMutations } from '~/common/util'
// import {store} from '~/main';
import ctx from '../route'
export const ns = 'cartoon';
const state = {

    test: 'hello'
}
const actionsInfo = mapActions({

}, ns)

const mutationsInfo = mapMutations({

}, ns)

const actions = actionsInfo.actions
const mutations = mutationsInfo.mutations
export const aTypes = actionsInfo.aTypes
export const mTypes = mutationsInfo.mTypes

// const modules = {};
// ;((r) => {
//     r.keys().forEach((key) => {
//         if (!~key.indexOf('index.js')) {
//             modules[key.split('/')[1].split('.')[0]] = r(key)
//         }
//     })
// })(require.context('./', true, /\.js$/));
// Object.keys(modules).forEach((key) => {
//     store.registerModule(key, modules[key])
// });

// store.registerModule(ns, { state, actions, mutations })
