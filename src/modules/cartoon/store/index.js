/**
 * Created by sampson on 2017/5/10.
 */
// import ajax from '~common/ajax'
import { mapActions, mapMutations, mapGetters } from '~/common/util'
import store from '~/store'
export const ns = module.i.split('modules/')[1].split('/')[0]
const state = {
    test: 'hello'
}
const actionsInfo = mapActions({}, ns)

const mutationsInfo = mapMutations({}, ns)

const gettersInfo = mapGetters({
    ddd (state) {
        return 'eee2'
    }
}, ns)

const actions = actionsInfo.actions
const mutations = mutationsInfo.mutations
const getters = gettersInfo.getters

export const aTypes = actionsInfo.aTypes
export const mTypes = mutationsInfo.mTypes
export const gTypes = gettersInfo.gTypes
store.registerModule(ns, { state, actions, mutations, getters })
