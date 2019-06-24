/**
 * Created by sampson on 2017/5/10.
 */
// import ajax from '~common/ajax'
import { connect } from '~/common/spirits'
export default connect({
    ns: 'test',
    state: {
        aa: '1242'
    },
    mutations: {
        setAa (state, payload) {
            state.aa = payload
        }
    },
    getters: {
        me: () => {
            return '我是春哥'
        }
    },
    actions: {
        getAa (val) {
            this.commit('setAa', val)
        }

    }
})
