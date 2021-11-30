export default {
  namespaced: true,
  state: {
    data: null,
    loading: false,
    error: ''
  },
  getters: {},
  mutations: {
    SET_USER_DATA (state, payload) {
      state.data = payload
    },
    SET_USER_LOADING (state, payload) {
      state.loading = payload
    },
    SET_USER_ERROR (state, payload) {
      state.error = payload
    }
  },
  actions: {
    async fetchUser ({ commit }, info) {
      commit('SET_USER_ERROR', '')
      commit('SET_USER_LOADING', true)
      try {
        const response = await fetch('https://api.github.com/user', {
          headers: {
            Authorization: `token ${info}`
          }
        })

        commit('SET_USER_DATA', response)
      } catch (e) {
        commit('SET_USER_ERROR', `Не удалось получить данные пользователя ${e}`)
        console.log(e)
      } finally {
        commit('SET_USER_LOADING', false)
      }
    }
  }
}
