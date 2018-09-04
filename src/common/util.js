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

export function wait (time) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), time)
  })
}
