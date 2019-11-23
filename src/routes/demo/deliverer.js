var _store

export function connect (ns) {
    if (_store) {
        return function (Clazz) {
            return function () {
                const result = new Clazz()
                result.ns = ns
                const actions = result.__actions || {}
                delete result.__actions
                const mutations = {}
                Object.keys(actions).forEach(func => {
                    mutations[func] = function (state, payload) {
                        actions[func].bind(state)(payload)
                        actions[func].bind(result)(payload)
                    }
                })
                let state = _store.state[ns]
                if (state) {
                    for (const key in state) {
                        result[key] = state[key]
                    }
                    _store.unregisterModule(ns)
                } else {
                    state = JSON.parse(JSON.stringify(result))
                }
                _store.registerModule(ns, { namespaced: true, mutations, state })
                return result
            }
        }
    }
}

export function action (clazz, act) {
    if (!clazz.__actions) {
        clazz.__actions = {}
    }
    clazz.__actions[act] = clazz[act]
    clazz[act] = function (payload) {
        _store.commit(`${this.ns}/${act}`, payload)
    }
    return clazz[act]
}
export default function (store) {
    _store = store
}
