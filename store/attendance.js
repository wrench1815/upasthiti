// state: used to store the data

import attendance from '~/api/attendance'

// helper pointer: use with state
export const state = () => ({
  attendanceList: new Set(),
})

// getters: used to get data from state
// helper pointer; use with getters
export const getteres = {
  attendances(state) {
    return state.attendanceList
  },
}

// mutations: used to change data in state
// helper pointer: use with commit
export const mutations = {
  // add attendance into attendanceList
  addAttendance(state, attendance) {
    state.attendanceList.add(attendance)
  },

  // clear all attendances from attendanceList
  clearAttendance(state) {
    state.attendanceList.clear()
  },
}

// actions: used to change data in state
// helper pointer: use with dispatch
export const actions = {
  // add attendance into attendanceList
  addAttendance({ commit }, attendance) {
    commit('addAttendance', attendance)
  },

  // clear all attendances from attendanceList
  clearAttendance({ commit }) {
    commit('clearAttendance')
  },
}
