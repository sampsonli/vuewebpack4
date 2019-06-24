let _store
export const connect = (model) => {
    if (_store) {
        if (!model.ns || !model.mutations || !model.actions) {
            console.error('model 不符合规范，至少需要包含ns,mutations,actions 字段')
            return
        }
        const oactions = { ns: model.ns }
        const iactions = { }
        Object.keys(model.actions).forEach((key) => {
            const originFn = model.actions[key]
            iactions[key] = (context, payload) => {
                originFn.bind(context)(payload, context)
            }
            oactions[key] = (payload, test) => {
                if (test) {
                    throw new Error('参数传递错误， 不能传多个参数， 建议全部参数放入第一个参数中')
                }
                return _store.dispatch(`${model.ns}/${key}`, payload)
            }
        })
        _store.registerModule(model.ns, { namespaced: true, mutations: model.mutations, actions: iactions, state: model.state || {}, getters: model.getters || {} })
        return oactions
    } else {
        throw new Error('spirits 未初始化, 请先调用 spirits(store)')
    }
}
export default (store) => {
    _store = store
}
