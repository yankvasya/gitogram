import * as api from '../../api'

export default {
  namespaced: true,
  state: {
    data: null,
    loading: false,
    error: false
  },
  getters: {},
  mutations: {
    SET_README_DATA (state, payload) {
      state.data = payload
    },
    SET_README_LOADING (state, payload) {
      state.loading = payload
    },
    SET_README_ERROR (state, payload) {
      state.error = payload
    }
  },
  actions: {
    async fetchReadme ({ commit }, { id, owner, repo }) {
      commit('SET_README_ERROR', '')
      commit('SET_README_LOADING', true)
      try {
        const { data } = await api.trandings.getReadme({ owner, repo })
        console.log(data)
        commit('SET_README_DATA', { id, content: data })
      } catch (e) {
        commit('SET_README_ERROR', `Не удалось загрузить данные, ошибка: "${e}"`)
      } finally {
        commit('SET_README_LOADING', false)
      }
    }
  }
}
