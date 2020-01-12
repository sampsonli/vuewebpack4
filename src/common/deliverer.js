var _store

export function deliver (ns) {
    if (_store) {
        return function (Clazz) {
            Clazz.prototype.ns = ns
            const mutates = Clazz.prototype.__mutates || {}
            delete Clazz.prototype.__mutates
            const getters = Clazz.prototype.__getters || {}
            delete Clazz.prototype.__getters
            return function (...args) {
                const result = new Clazz(...args)
                Object.getOwnPropertyNames(Clazz.prototype).forEach(key => {
                    if (typeof Clazz.prototype[key] === 'function' && !mutates[key] && !getters[key]) {
                        const origin = Clazz.prototype[key]
                        Clazz.prototype[key] = (...args) => {
                            const state = _store.state[ns]
                            const tmp = Object.create(Clazz.prototype)
                            Object.assign(tmp, state)
                            return origin.bind(tmp)(...args)
                        }
                    }
                })
                ns = result.ns || ns
                Clazz.prototype.ns = ns
                delete result.ns
                const mutations = {}
                Object.keys(mutates).forEach(func => {
                    mutations[func] = function (state, payload) {
                        mutates[func].bind(state)(payload)
                    }
                })
                const state = _store.state[ns]
                if (state) {
                    Object.assign(result, state)
                    _store.unregisterModule(ns)
                }
                _store.registerModule(ns, { namespaced: true, mutations, state: { ...result }, getters: getters })
                return Object.create(Clazz.prototype)
            }
        }
    }
}

export function mutate (clazz, act) {
    if (!clazz.__mutates) {
        clazz.__mutates = {}
    }
    clazz.__mutates[act] = clazz[act]
    clazz[act] = function (payload) {
        _store.commit(`${clazz.ns}/${act}`, payload)
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
