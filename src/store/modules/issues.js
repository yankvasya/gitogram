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
    SET_ISSUES_DATA (state, payload) {
      state.data = payload
    },
    SET_ISSUES_LOADING (state, payload) {
      state.loading = payload
    },
    SET_ISSUES_ERROR (state, payload) {
      state.error = payload
    }
  },
  actions: {
    async fetchIssues ({ commit }, payload) {
      commit('SET_ISSUES_ERROR', '')
      commit('SET_ISSUES_LOADING', true)
      try {
        const data = []
        for (const el of payload.data) {
          const i = payload.data.indexOf(el)
          data[i] =
            el.open_issues_count
              ? (await api.trandings.getIssues(el.issues_url.split('{/number}').join(''))).data
              : []
        }
        commit('SET_ISSUES_DATA', data)
      } catch (e) {
        commit('SET_ISSUES_ERROR', 'Не удалось получить данные')
      } finally {
        commit('SET_ISSUES_LOADING', false)
      }
    }
  }
}
