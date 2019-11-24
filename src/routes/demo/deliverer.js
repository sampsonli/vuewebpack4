var _store

export function connect (ns) {
    if (_store) {
        return function (Clazz) {
            return function () {
                Clazz.prototype.ns = ns
                const result = new Clazz()
                Object.keys(result).forEach(key => {
                    if (typeof result[key] === 'function') {
                        Clazz.prototype[key] = result[key]
                        delete result[key]
                    }
                })
                const actions = result.__actions || {}
                const mutations = {}
                Object.keys(actions).forEach(func => {
                    mutations[func] = function (state, payload) {
                        actions[func].bind(state)(payload)
                    }
                })
                const state = _store.state[ns]
                if (state) {
                    Object.assign(result, state)
                    _store.unregisterModule(ns)
                }
                _store.registerModule(ns, { namespaced: true, mutations, state: result, getters: result.__getters || {} })
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

export function getter (clazz, get) {
    if (!clazz.__getters) {
        clazz.__getters = {}
    }
    clazz.__getters[get] = function (state, getters, rootState) {
        return clazz[get].bind(state)({ getters, rootState })
    }
}

export default function (store) {
    _store = store
}
