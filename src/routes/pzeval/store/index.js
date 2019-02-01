/**
 * Created by sampson on 2017/5/10.
 */
import { get } from '../common/ajax'
import { mapActions, mapMutations } from '~/common/util'
import store from '~/store'
export const ns = module.i.split('modules/')[1].split('/')[0]
const state = {
    test: 'hello',
    detail: null,
    question: null
}
const actionsInfo = mapActions({
    async getInfo ({ commit }, { eid = 1, hid = -10000, token = '80020312-1-211d48d80294bea6' }) {
        const info = await get(`/api/xinli/evaluation/detail/eid/${eid}/hid/${hid}`, token)
        if (info.code === 200) {
            commit(mTypes.setDetail, info.data)
            return info.data
        }
        const e = new Error(info.msg)
        e.code = info.code
        throw e
    },
    async getQuestion ({ commit }, { eid = 1, hid = -10000, token = '80020312-1-562a2f1aa3925a7d' }) {
        const info = await get(`/api/xinli/evaluation/question/list/54`, token)
        if (info.code === 200) {
            commit(mTypes.setDetail, info.data)
            return info.data
        }
        const e = new Error(info.msg)
        e.code = info.code
        throw e
    }

}, ns)

const mutationsInfo = mapMutations({
    setDetail (state, detail) {
        state.detail = detail
    },
    setQuestion (state, qs) {
        state.question = qs
    }

}, ns)

const actions = actionsInfo.actions
const mutations = mutationsInfo.mutations
export const aTypes = actionsInfo.aTypes
export const mTypes = mutationsInfo.mTypes
store.registerModule(ns, { state, actions, mutations })
