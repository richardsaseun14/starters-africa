// import createPersistedState from 'vuex-persistedstate'

// export const plugins = [createPersistedState()]

export const state = () => ({
  course: {},
  courses: []
})

export const mutations = {
  SET_COURSE(state, payload) {
    state.course = payload
  },
  SET_COURSES(state, payload) {
    state.courses = payload
  }
}

export const actions = {
  async getCourse({ commit }, id) {
    const data = await this.$axios.$get(`/course/${id}`)
    // console.log(data[0])
    commit('SET_COURSE', data)
  },
  async getCourses({ commit }) {
    const data = await this.$axios.$get(`/course`)
    // console.log(data[0])
    commit('SET_COURSES', data)
  }
}
