// state: used to store the data
// helper pointer: use with state
export const state = () => ({
  breadCrumbs: [{ name: '', url: '/' }],
  lastElement: { name: '', url: '/' },
})

// getters: used to get data from state
// helper pointer; use with getters
export const getters = {
  // return crumbs
  breadCrumbs(state) {
    return state.breadCrumbs
  },
  // return last element
  lastElement(state) {
    return state.lastElement
  },
}

// mutations: used to change data in state
// helper pointer: use with commit
export const mutations = {
  // add crumb to breadcrumbs
  addBreadCrumb(state, crumb) {
    state.lastElement = crumb[crumb.length - 1]
    state.breadCrumbs = crumb
  },
}

// actions: used to change data in state
// helper pointer: use with dispatch
export const actions = {
  // add crumb to breadcrumbs
  addBreadCrumb({ commit }, crumb) {
    commit('addBreadCrumb', crumb)
  },
}
