import * as api from '../../api'

export default {
  namespaced: true,
  state: {
    data: null,
    loading: false,
    error: false
  },
  getters: {
    getReadmeById: (state) => (id) => {
      return state.data?.find(item => item.id === id)
    }
  },
  mutations: {
    SET_README_DATA (state, payload) {
      if (!state.data) {
        state.data = [payload]
      } else {
        if (!state.data.find(item => item.id === payload.id)) {
          state.data.push(payload)
        }
      }
    },
    SET_README_LOADING (state, payload) {
      state.loading = payload
    },
    SET_README_ERROR (state, payload) {
      state.error = payload
    }
  },
  actions: {
    async fetchReadme ({ commit, getters }, { id, owner, repo }) {
      const currentRepo = getters.getReadmeById(id)
      if (currentRepo?.content !== undefined) return
      commit('SET_README_ERROR', '')
      commit('SET_README_LOADING', true)
      try {
        const { data } = await api.trandings.getReadme({ owner, repo })
        commit('SET_README_DATA', { id, content: data })
      } catch (e) {
        commit('SET_README_ERROR', `Не удалось загрузить данные, ошибка: "${e}"`)
      } finally {
        commit('SET_README_LOADING', false)
      }
    }
  }
}
