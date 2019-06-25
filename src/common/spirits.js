let _store
export const connect = (model) => {
    if (_store) {
        if (!model.ns || !model.actions) {
            throw new Error('model 不符合规范，至少需要包含ns(名字空间),actions(方法集合) 字段')
        }
        const methods = { ns: model.ns }
        const actions = { }
        Object.keys(model.actions).forEach((key) => {
            const originFn = model.actions[key]
            actions[key] = (context, payload) => {
                originFn.bind(context)(payload, context)
            }
            methods[key] = (payload, test) => {
                if (test) {
                    throw new Error('参数传递错误， 不能传多个参数， 建议全部参数放入第一个参数中')
                }
                return _store.dispatch(`${model.ns}/${key}`, payload)
            }
        })
        _store.registerModule(model.ns, { namespaced: true, mutations: model.mutations || {}, actions, state: model.state || {}, getters: model.getters || {} })
        return methods
    } else {
        throw new Error('spirits 未初始化, 请先调用 spirits(store)')
    }
}
export default (store) => {
    _store = store
}
