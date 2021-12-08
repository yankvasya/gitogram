import * as api from '../../api'

export default {
  namespaced: true,
  state: {
    data: [],
    loading: false,
    error: ''
  },
  getters: {
    checkStateByRepo: (state) => (repo) => {
      return state.data.flatMap(all => all.filter(repos => repos.repository_url?.includes(repo)))
    }
  },
  mutations: {
    SET_ISSUES_DATA (state, payload) {
      state.data.push(payload)
    },
    SET_ISSUES_LOADING (state, payload) {
      state.loading = payload
    },
    SET_ISSUES_ERROR (state, payload) {
      state.error = payload
    }
  },
  actions: {
    async fetchIssues ({ state, commit, getters }, payload) {
      const stateHaveIssues = getters.checkStateByRepo(payload.repo)

      if (stateHaveIssues.length) {
        return
      }

      commit('SET_ISSUES_ERROR', '')
      commit('SET_ISSUES_LOADING', true)
      try {
        const { data } = await api.trandings.getIssues(payload)
        commit('SET_ISSUES_DATA', data)
      } catch (e) {
        commit('SET_ISSUES_ERROR', 'Не удалось получить данные')
      } finally {
        commit('SET_ISSUES_LOADING', false)
      }
    }
  }
}
