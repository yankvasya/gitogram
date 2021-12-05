import * as api from '../../api'

export default {
  namespaced: true,
  state: {
    data: [],
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
    async fetchUserRepos ({ state }) {
      state.data.repos = {
        data: null,
        loading: true,
        error: ''
      }
      try {
        const response = await api.user.getUserRepos(state.data.login)
        state.data.repos = {
          ...state.data.repos,
          data: response.data
        }
      } catch (e) {
        state.data.repos = {
          ...state.data.repos,
          error: e.message
        }
      } finally {
        state.data.repos = {
          ...state.data.repos,
          loading: false
        }
      }
    },
    async fetchUserFollowing ({ state }) {
      state.data.followings = {
        data: null,
        loading: true,
        error: ''
      }
      try {
        const response = await api.user.getUserFollowing(state.data.login)
        state.data.followings = {
          ...state.data.followings,
          data: response.data
        }
      } catch (e) {
        state.data.followings = {
          ...state.data.followings,
          error: e.message
        }
      } finally {
        state.data.followings = {
          ...state.data.followings,
          loading: false
        }
      }
    }
  }
}
