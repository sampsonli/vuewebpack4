/**
 * Created by sampson on 2017/5/15.
 */
export function mapActions (acts, ns) {
    const aTypes = {}
    const actions = {}
    Object.keys(acts).forEach((key) => {
        aTypes[key] = [ns, key].join('/')
        actions[aTypes[key]] = acts[key]
    })
    return { actions, aTypes }
}

export const platform = (function () {
    return ~navigator.userAgent.indexOf('iPhone') ? 'ios' : 'android'
})()

export function mapMutations (muts, ns) {
    const mTypes = {}
    const mutations = {}
    Object.keys(muts).forEach((key) => {
        mTypes[key] = [ns, key].join('/')
        mutations[mTypes[key]] = muts[key]
    })
    return { mutations, mTypes }
}

export function mapGetters (getter, ns) {
    const gTypes = {}
    const getters = {}
    Object.keys(getter).forEach((key) => {
        gTypes[key] = [ns, key].join('/')
        getters[gTypes[key]] = getter[key]
    })
    return { getters, gTypes }
}

export function wait (time) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(), time)
    })
}
