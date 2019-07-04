/**
 * Created by sampson on 2017/5/10.
 */
// import ajax from '~common/ajax'
import { connect } from 'vue-spirits'
export default connect({
    ns: 'demo',
    state: {
        aa: '1242233',
        bb: '444'
    },
    mt: {
        setAa (payload) {
            this.aa = payload
        }
    },
    getters: {
        me ({ aa }) {
            return aa
        }
    },
    act: {
        getAa (payload) {
            this.commit('setAa', payload)
        }
    }
})
