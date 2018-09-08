/**
 * Created by sampson on 2017/5/10.
 */
// import ajax from '~common/ajax'
import { mapActions, mapMutations } from '~/common/util'
import store from '~/store'
import ctx from '../route'

export const ns = ctx.path.replace('/', '')
const state = {
    test: 'hello'
}
const actionsInfo = mapActions({}, ns)

const mutationsInfo = mapMutations({}, ns)

const actions = actionsInfo.actions
const mutations = mutationsInfo.mutations
export const aTypes = actionsInfo.aTypes
export const mTypes = mutationsInfo.mTypes
store.registerModule(ns, { state, actions, mutations })
