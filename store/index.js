// import createPersistedState from 'vuex-persistedstate'

// export const plugins = [createPersistedState()]

export const state = () => ({
  course: {},
  courses: [],
  posts: [],
  post: {},
  form: {
    email: '',
    fullName: '',
    companyName: '',
    phoneNumber: '',
    jobTitle: '',
    message: ''
  }
})

export const mutations = {
  SET_COURSE(state, payload) {
    state.course = payload
  },
  SET_COURSES(state, payload) {
    state.courses = payload
  },
  SET_POSTS(state, payload) {
    state.posts = payload
  },
  SET_POST(state, payload) {
    state.post = payload
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
  },
  async getPosts({ commit }) {
    const data = await this.$axios.$get(`/posts?_fields=slug,id,title,excerpt,date,featured_media,categories,_links`)
    // console.log(data[0])
    commit('SET_POSTS', data)
  },
  async getPost({ commit }, id) {
    const data = await this.$axios.$get(`/posts/${id}`)
    // console.log(data[0])
    commit('SET_POST', data)
  }
}
