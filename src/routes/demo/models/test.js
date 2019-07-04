/**
 * Created by sampson on 2017/5/10.
 */
// import ajax from '~common/ajax'
import { connect } from 'vue-spirits'
export const ns = 'test'
export default connect({
    ns,
    state: {
        aa: '1242233'
    },
    mutations: {
        setAa (state, payload) {
            state.aa = payload
        }
    },
    getters: {
        me: ({ aa }) => {
            return aa
        }
    },
    actions: {
        getAa (val) {
            this.commit('setAa', val)
        }

    }
}).result
