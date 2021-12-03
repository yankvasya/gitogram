import * as api from '../../api'

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
      // state.data = payload.map(item => {
      //   item.repo = {
      //     data: null,
      //     loading: false,
      //     error: ''
      //   }
      //
      //   return item
      // })
    },
    SET_USER_LOADING (state, payload) {
      state.loading = payload
    },
    SET_USER_ERROR (state, payload) {
      state.error = payload
    },
    SET_USER_REPO_DATA (state, payload) {
      state.data.repo.data = payload
    },
    SET_USER_REPO_LOADING (state, payload) {
      state.data.repo.loading = payload
    },
    SET_USER_REPO_ERROR (state, payload) {
      state.data.repo.error = payload
    }
  },
  actions: {
    async fetchUser ({ commit }) {
      commit('SET_USER_ERROR', '')
      commit('SET_USER_LOADING', true)
      try {
        const response = await api.user.getUserData()
        const data = response.data
        commit('SET_USER_DATA', data)
      } catch (e) {
        commit('SET_USER_ERROR', `Не удалось получить данные пользователя ${e}`)
        console.log(e)
      } finally {
        commit('SET_USER_LOADING', false)
      }
    },
    async fetchUserRepos ({ state, commit }) {
      // commit('SET_USER_REPO_ERROR', '')
      // commit('SET_USER_REPO_LOADING', true)
      // try {
      //   const response = await api.user.getUserRepos(state.data.login)
      //   const data = response
      //   console.log(response)
      //   commit('SET_USER_REPO_DATA', data)
      // } catch (e) {
      //   commit('SET_USER_REPO_ERROR', {
      //     status: false,
      //     error: e.message
      //   })
      // } finally {
      //   commit('SET_USER_REPO_LOADING', false)
      // }
    }
  }
}
